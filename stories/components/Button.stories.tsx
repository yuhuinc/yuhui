import React from "react";
import { ContentProvider, useContent, ButtonPrimary } from "../../src";

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

export const PrimaryButtons = () => {
  return (
    <ContentProvider lang="fr" content={content}>
      <Buttons />
    </ContentProvider>
  );
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
        render={({ content, lang }) => (
          <span>
            <b>{content.copy[lang]}</b> with render()
          </span>
        )}
      />
    </div>
  );
};
