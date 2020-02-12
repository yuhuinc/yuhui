import React from "react";
import {
  ContentProvider,
  DialogFullScreen,
  useDialogState,
  ButtonPrimary,
  P
} from "../src";

export default {
  title: "Dialog"
};

const contentNodes = {
  "demo.Button": {
    copy: {
      en: "Toggle Dialog",
      fr: "Toggle Dialog"
    }
  },
  "demo.P": {
    copy: {
      en: "Hello",
      fr: "Bounjour"
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

export const Fullscreen_Dialog = () => (
  <ContentProvider lang="en" content={content}>
    <Dialogs />
  </ContentProvider>
);

const Dialogs = () => {
  const dialogState = useDialogState();
  return (
    <div>
      <ButtonPrimary contentKey="demo.Button" onClick={dialogState.toggle} />
      <DialogFullScreen label="Hello" {...dialogState}>
        <P contentKey="demo.P" centered />
      </DialogFullScreen>
    </div>
  );
};
