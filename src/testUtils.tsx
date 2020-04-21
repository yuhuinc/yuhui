import React from "react";
import { render } from "@testing-library/react";

import { ContentProvider } from "./Content/Content";

interface IRenderWithContent {
  theme?: any;
  contentNodes?: any;
  lang?: string;
}

export const renderWithContent = ({
  theme = {},
  contentNodes = {},
  lang = "en"
}: IRenderWithContent) => (ui, options = {}) => {
  const ContentWrapper = ({ children }) => {
    const defaultTheme = {
      colors: {
        primary: {
          light: "#d0dbfd",
          dark: "#230cc2"
        }
      }
    };

    return (
      <ContentProvider
        content={{
          theme: { ...defaultTheme, ...theme },
          contentNodes
        }}
        lang={lang}
      >
        {children}
      </ContentProvider>
    );
  };

  return render(ui, { wrapper: ContentWrapper, ...options });
};
