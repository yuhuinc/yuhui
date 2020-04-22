import React from "react";
import styled from "styled-components";
import { useDialogState, Dialog, DialogBackdrop } from "reakit/Dialog";
import { colors } from "../shared/constants";

interface DialogProps {
  label: string;
  [key: string]: any;
}

const StyledBackdrop = styled(DialogBackdrop)`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 999;
`;

const StyledDialog = styled(Dialog)`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  z-index: 999;
  max-width: 560px;
  max-height: 250px;
  color: #212121;
  background-color: ${colors.WHITE};
  border-radius: 8px;
  border: 1px solid rgba(33, 33, 33, 0.25);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 1em;
  max-height: calc(100vh - 56px);
  outline: 0;
`;

export const DialogCentreScreen = ({
  label,
  children,
  dialog
}: DialogProps) => {
  return (
    <StyledBackdrop {...dialog}>
      <StyledDialog {...dialog} aria-label={label}>
        {children}
      </StyledDialog>
    </StyledBackdrop>
  );
};

export const useDialog = useDialogState;
