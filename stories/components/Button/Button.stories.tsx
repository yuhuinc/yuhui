import React from "react";
import PropTypes from "prop-types";

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

/**
 * Use `Badge` to highlight key info with a predefined status.
 */
export const PrimaryButton = () => {
  return (
    <ContentProvider lang="fr" content={content}>
      <Buttons />
    </ContentProvider>
  );
};
PrimaryButton.propTypes = {
  test: PropTypes.string
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
