import React, { createContext, forwardRef, useContext, useState } from "react";

export const ContentContext = createContext<ContentContext>({
  lang: "",
  setLang: () => {},
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

interface ContentContext {
  lang: string;
  setLang: (lang: string) => void;
  contentNodes: ContentNodes;
  addContentNodes: (nodes: ContentNodes) => void;
}

interface ContentProviderProps {
  children?: React.ReactNode;
  lang?: string;
  contentNodes?: ContentNodes;
  [key: string]: any;
}

export const ContentProvider = ({
  children,
  lang: defaultLang,
  contentNodes: defaultContentNodes
}: ContentProviderProps) => {
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
        addContentNodes
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
    const { lang, contentNodes } = useContext(ContentContext);
    const { copy } = contentNodes[contentKey];

    return (
      <WrappedComponent
        ref={ref}
        style={{ ...contentNodes[contentKey].style, ...style }}
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
