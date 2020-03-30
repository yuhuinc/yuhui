import React from "react";

import markdown from "./Content.md";
import { ContentProvider, H1, H2, P } from "../../../src";

export default {
  title: "Components/Content"
};

const contentNodes = {
  "demo.H1": {
    copy: {
      en: 'View docs by clicking "Notes"',
      fr: 'View docs by clicking "Notes"'
    }
  },
  "demo.H2": {
    copy: {
      en: "Hi, ${name}",
      fr: "Bonjour, ${name}"
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
    <ContentProvider lang="en" content={content}>
      <H1 contentKey="demo.H1" />
      <H2 contentKey="demo.H2" copyParams={{ name: "Jane" }} />
      <P contentKey="demo.not_found" />
    </ContentProvider>
  );
};
Content.story = {
  parameters: {
    notes: { markdown }
  }
};
