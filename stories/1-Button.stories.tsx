import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, ContentProvider, useContent } from "../src";

export default {
  title: "Button",
  component: Button
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

export const Text = () => {
  return (
    <ContentProvider lang="fr" contentNodes={contentNodes}>
      <Buttons />
    </ContentProvider>
  );
};

const Buttons = () => {
  const { lang, setLang } = useContent();

  return (
    <div>
      <p>Language code: {lang}</p>
      <Button contentKey="demo.Button" onClick={() => setLang("en")} />
      <Button
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
