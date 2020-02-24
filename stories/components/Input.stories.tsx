import React from "react";

import { ContentProvider, Input } from "../../src";

export default {
  title: "Components/Input"
};

const contentNodes = {
  "demo.placeholder": {
    copy: {
      en: "placeholder value",
      fr: "placeholder value"
    }
  }
};

const theme = {
  colors: {
    primary: {
      light: "#d0dbfd",
      dark: "#230cc2"
    }
  }
};

const content = {
  contentNodes,
  theme
};

export const Inputs = () => (
  <ContentProvider lang="en" content={content}>
    <Input type="text" contentKey="demo.placeholder" />
  </ContentProvider>
);
