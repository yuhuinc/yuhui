import React, { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";

export const ContentContext = createContext<ContentContext>({
  lang: "",
  setLang: () => {},
  theme: {},
  contentNodes: {},
  addContentNodes: () => {}
});

interface Copy {
  en: string;
  fr: string;
  [key: string]: string;
}

interface ContentNode {
  copy: Copy;
  style?: any;
  render?: any;
  [key: string]: any;
}

interface ContentNodes {
  [key: string]: ContentNode;
}

interface Content {
  contentNodes: ContentNodes;
  theme: any;
}

interface ContentContext {
  lang: string;
  setLang: (lang: string) => void;
  contentNodes: ContentNodes;
  addContentNodes: (nodes: ContentNodes) => void;
  theme: any;
}

interface ContentProviderProps {
  children?: React.ReactNode;
  lang?: string;
  content: Content;
  [key: string]: any;
}

export const ContentProvider = ({
  children,
  lang: defaultLang,
  content
}: ContentProviderProps) => {
  const { contentNodes: defaultContentNodes, theme } = content;
  const [lang, setLang] = useState(defaultLang || "en");
  const [contentNodes, setContentNodes] = useState(
    defaultContentNodes || ({} as ContentNodes)
  );

  const addContentNodes = (nodes: ContentNodes) => {
    setContentNodes({ ...contentNodes, ...nodes });
  };

  return (
    <ContentContext.Provider
      value={{
        lang,
        setLang,
        contentNodes,
        addContentNodes,
        theme
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export function interpolate(string, params) {
  return string.split(/\${|}/gm).reduce((prev, curr, i) => {
    if (i % 2 === 0) {
      return prev + curr;
    } else {
      return prev + params[curr];
    }
  }, "");
}

export interface WithContentProps {
  contentKey: string;
  copyParams?: any;
  style?: any;
  render?: any;
  [key: string]: any;
}

export const withContent = (WrappedComponent: React.ComponentType<any>) => ({
  style,
  contentKey,
  copyParams = {},
  render,
  children,
  ...rest
}: WithContentProps) => {
  const { contentNodes, theme } = useContext(ContentContext);
  const copy = useCopy(contentKey, copyParams);
  return (
    <WrappedComponent
      style={{ ...contentNodes?.[contentKey]?.style, ...style }}
      theme={theme}
      {...rest}
    >
      <>
        {render ? render(copy) : copy}
        {children}
      </>
    </WrappedComponent>
  );
};

export const useContent = (): ContentContext => {
  return useContext(ContentContext);
};

export const useCopy = (contentKey: string, copyParams?) => {
  const { lang, contentNodes } = useContent();
  const copy = contentNodes?.[contentKey]?.copy?.[lang];
  if (!copy) {
    return `MISSING translations for: ${contentKey}`;
  } else if (copyParams) {
    return interpolate(copy, copyParams);
  } else {
    return copy;
  }
};

const baseTextStyles = css`
  ${props =>
    props.centered &&
    `
    text-align: center;
  `};
`;
export const H1 = withContent(styled.h1`
  ${baseTextStyles};
`);
export const H2 = withContent(styled.h2`
  ${baseTextStyles};
`);
export const P = withContent(styled.p`
  ${baseTextStyles};
`);
export const Span = withContent(styled.span`
  ${baseTextStyles};
`);
