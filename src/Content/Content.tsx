import React, { createContext, forwardRef, useContext, useState } from "react";
import styled, {css} from 'styled-components'

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

export interface WithContentProps {
  contentKey: string;
  style?: any;
}

export const withContent = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  forwardRef(({ style, contentKey, render, children, ...rest }: any, ref) => {
    const { lang, contentNodes, theme } = useContext(ContentContext);
    const { copy } = contentNodes[contentKey];
    return (
      <WrappedComponent
        ref={ref}
        style={{ ...contentNodes[contentKey].style, ...style }}
        theme={theme}
        {...rest}
      >
        {render
          ? render({ content: contentNodes[contentKey], lang })
          : copy[lang]}
        {children}
      </WrappedComponent>
    );
  });

export const useContent = (): ContentContext => {
  return useContext(ContentContext);
};

const baseTextStyles = css`
  text-align: ${props => props.centered ? 'center': 'left'};
`
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