import React, { useState } from "react";
import styled from "styled-components";
import {
  useDialog,
  DialogCentreScreen,
  ContentProvider,
  Button,
  ButtonPrimary,
  P
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
  "demo.confirmationP": {
    copy: {
      en: "Are you sure?",
      fr: "Êtes-vous sûr?"
    }
  },
  "demo.yesButton": {
    copy: {
      en: "Yes",
      fr: "Oui"
    }
  },
  "demo.noButton": {
    copy: {
      en: "No",
      fr: "Non"
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

const StyledButtonContainer = styled.div`
  display: flex;
`;

const content = {
  contentNodes,
  theme
};

export const ConfirmationDialogDemo = () => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmation = userHasConfirmed => {
    setConfirmed(userHasConfirmed);
  };

  return (
    <ContentProvider lang="en" content={content}>
      <ConfirmationDialog handleConfirmation={handleConfirmation}>
        <P contentKey="demo.confirmationP" />
      </ConfirmationDialog>
      <div>confirmed: {`${confirmed}`}</div>
    </ContentProvider>
  );
};

const ConfirmationDialog = ({ handleConfirmation, children }) => {
  const dialog = useDialog();
  const YES = "yes";
  const handleClick = e => {
    e.preventDefault();
    handleConfirmation(e.target.dataset.confirmation === YES);
    dialog.hide();
  };

  return (
    <div>
      <ButtonPrimary contentKey="demo.ToggleButton" onClick={dialog.toggle} />
      <DialogCentreScreen label="Hello" {...dialog}>
        {children}
        <StyledButtonContainer>
          <Button
            data-confirmation="no"
            onClick={handleClick}
            contentKey="demo.noButton"
          />
          <ButtonPrimary
            data-confirmation={YES}
            onClick={handleClick}
            contentKey="demo.yesButton"
          />
        </StyledButtonContainer>
      </DialogCentreScreen>
    </div>
  );
};
