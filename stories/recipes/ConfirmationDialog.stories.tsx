import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import {
  useDialog,
  DialogCentreScreen,
  ContentProvider,
  ButtonPrimary,
  H1
} from "../../src";

export default {
  title: "Recipes/Confirmation Dialog"
};

const contentNodes = {
  "demo.ToggleButton": {
    copy: {
      en: "Toggle Dialog",
      fr: "Toggle Dialog"
    }
  },
  "demo.H1": {
    copy: {
      en: "Hello!",
      fr: "Bonjour!"
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

export const ConfirmationDialogDemo = () => {
  return (
    <ContentProvider lang="en" content={content}>
      <ConfirmationDialog />
    </ContentProvider>
  );
};

const ConfirmationDialog = () => {
  const dialog = useDialog();
  console.log(dialog);
  return (
    <div>
      <ButtonPrimary contentKey="demo.ToggleButton" onClick={dialog.toggle} />
      <DialogCentreScreen label="Hello" {...dialog}>
        <H1 contentKey="demo.H1" />
      </DialogCentreScreen>
    </div>
  );
};
