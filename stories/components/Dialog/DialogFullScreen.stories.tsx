import React from "react";
import {
  ContentProvider,
  DialogFullScreen,
  useDialog,
  ButtonPrimary,
  P
} from "../../../src";
import markdown from "./Dialog.md";

export default {
  title: "Components/Dialog"
};

const contentNodes = {
  "demo.Button": {
    copy: {
      en: "Toggle full screen dialog",
      fr: "Basculer la boîte de dialogue plein écran"
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

export const FullScreenDialog = () => (
  <ContentProvider lang="en" content={content}>
    <Dialog />
  </ContentProvider>
);

const Dialog = () => {
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

FullScreenDialog.story = {
  parameters: {
    notes: { markdown }
  }
};
