import React from "react";
import {
  ContentProvider,
  DialogFullScreen,
  useDialog,
  ButtonPrimary,
  P
} from "../../src";

export default {
  title: "Components/Dialog"
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

export const FullscreenDialog = () => (
  <ContentProvider lang="en" content={content}>
    <Dialogs />
  </ContentProvider>
);

const Dialogs = () => {
  const dialog = useDialog();
  return (
    <div>
      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />
      <DialogFullScreen label="Hello" {...dialog}>
        <P contentKey="demo.P" centered />
      </DialogFullScreen>
    </div>
  );
};
