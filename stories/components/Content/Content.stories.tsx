import React from "react";

import markdown from "./Content.md";
import { ContentProvider, H1 } from "../../../src";

export default {
  title: "Components/Content"
};

const contentNodes = {
  "demo.H1": {
    copy: {
      en: 'View docs by clicking "Notes"',
      fr: 'View docs by clicking "Notes"'
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

export const Content = () => {
  return (
    <ContentProvider lang="fr" content={content}>
      <H1 contentKey="demo.H1" />
    </ContentProvider>
  );
};
Content.story = {
  parameters: {
    notes: { markdown }
  }
};
