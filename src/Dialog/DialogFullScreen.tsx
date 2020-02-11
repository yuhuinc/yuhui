import React from "react";
import styled from "styled-components";
import {
  Dialog as RKDialog,
  useDialogState as rkUseDialogState
} from "reakit/Dialog";
import { Tabbable } from "reakit/Tabbable";
import { MdClose } from "react-icons/md";

import { useContent } from "../Content/Content";
import { colors } from "../shared/colors";

interface DialogProps {
  label: string;
  [key: string]: any;
}

const StyledDialog = styled(RKDialog)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding: 160px 62px 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCloseContainer = styled(Tabbable)`
  position: absolute;
  top: 62px;
  right: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
`;

const StyledCloseText = styled.span`
  display: block;
  margin-top: 8px;
  color: ${colors.GRAY};
`;

const closeCopy = {
  en: "esc",
  fr: "fermer"
};

export const DialogFullScreen = ({
  label,
  children,
  baseId,
  hide,
  ...rest
}: DialogProps) => {
  const { lang, theme } = useContent();
  return (
    <StyledDialog aria-label={label} baseId={baseId} hide={hide} {...rest}>
      <div>{children}</div>
      <StyledCloseContainer onClick={hide}>
        <MdClose
          size="24px"
          color={theme.colors?.primary?.dark || colors.BLUE}
        />
        <StyledCloseText>{closeCopy[lang]}</StyledCloseText>
      </StyledCloseContainer>
    </StyledDialog>
  );
};

export const useDialogState = rkUseDialogState;
