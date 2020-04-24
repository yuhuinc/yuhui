import React from "react";
import {
  ContentProvider,
  DialogCentreScreen,
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
      en: "Toggle dialog",
      fr: "Basculer la boîte de dialogue"
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

export const CentreScreenDialog = () => (
  <ContentProvider lang="en" content={content}>
    <Dialog />
  </ContentProvider>
);

const Dialog = () => {
  const dialog = useDialog();
  return (
    <div>
      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />
      <DialogCentreScreen {...dialog} label="Hello">
        <P contentKey="demo.P" />
      </DialogCentreScreen>
    </div>
  );
};

CentreScreenDialog.story = {
  parameters: {
    notes: { markdown }
  }
};
