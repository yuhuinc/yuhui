import React from "react";

import markdown from "./Carousel.md";
import { Carousel, useCarousel, ContentProvider } from "../../../src";

export default {
  title: "Components/Carousel"
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

export const Carousels = () => {
  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({
    numOfPages: 3
  });
  return (
    <ContentProvider lang="fr" content={content}>
      <h1>Carousel</h1>
      <Carousel
        pageIndex={pageIndex}
        pages={[
          <div style={{ width: "100%" }}>
            <p>Page 1</p>
          </div>,
          <div style={{ width: "100%" }}>
            <p>Page 2</p>
          </div>,
          <div style={{ width: "100%" }}>
            <p>Page 3</p>
          </div>
        ]}
      />
      <div>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
      </div>
    </ContentProvider>
  );
};

Carousels.story = {
  parameters: {
    notes: { markdown }
  }
};
