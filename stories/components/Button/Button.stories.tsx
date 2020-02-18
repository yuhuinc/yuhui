import React from "react";

import markdown from "./Button.md";
import { ContentProvider, useContent, ButtonPrimary } from "../../../src";

export default {
  title: "Components/Button"
};

const contentNodes = {
  "demo.Button": {
    copy: {
      en: "Switch to English",
      fr: "Passer à l'anglais"
    }
  },
  "demo.ButtonWithRender": {
    copy: {
      en: "Switch to French",
      fr: "Passer au français"
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

export const PrimaryButton = () => {
  return (
    <ContentProvider lang="fr" content={content}>
      <Buttons />
    </ContentProvider>
  );
};
PrimaryButton.story = {
  parameters: {
    notes: { markdown }
  }
};

const Buttons = () => {
  const { lang, setLang } = useContent();

  return (
    <div>
      <p>Language code: {lang}</p>
      <ButtonPrimary contentKey="demo.Button" onClick={() => setLang("en")} />
      <ButtonPrimary
        onClick={() => setLang("fr")}
        contentKey="demo.ButtonWithRender"
        render={copy => (
          <span>
            <b>{copy}</b> with render()
          </span>
        )}
      />
    </div>
  );
};
