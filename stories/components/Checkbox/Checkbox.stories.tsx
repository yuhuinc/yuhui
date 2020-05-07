import React, { useState } from "react";
import markdown from "./Checkbox.md";
import { Checkbox, ContentProvider, H1 } from "../../../src";

export default {
  title: "Components/Checkbox"
};

const contentNodes = {
  "regular.H1": {
    copy: {
      en: "Plain",
      fr: "Plaine"
    }
  },
  "disabled.H1": {
    copy: {
      en: "Disabled",
      fr: "Désactivé"
    }
  }
};

const theme = {
  colors: {
    primary: {
      light: "#d0dbfd",
      blue: "#230cc2"
    }
  }
};

const content = {
  contentNodes,
  theme
};

export const _Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  return (
    <ContentProvider lang="en" content={content}>
      <H1 contentKey="regular.H1" />
      <Checkbox checked={checked} toggle={toggle} />
      <H1 contentKey="disabled.H1" />
      <Checkbox checked={checked} toggle={toggle} size="10px" label="label" />
      <H1 contentKey="disabled.H1" />
      <Checkbox checked={true} disabled={true} />
      <Checkbox disabled={true} />
    </ContentProvider>
  );
};

_Checkbox.story = {
  parameters: {
    notes: { markdown }
  }
};
