import React from "react";
import styled from "styled-components";
import {
  Dialog as RKDialog,
  useDialogState as rkUseDialogState
} from "reakit/Dialog";
import { Tabbable } from "reakit/Tabbable";
import { MdClose } from "react-icons/md";

import { useContent } from "../Content/Content";
import { colors } from "../shared/constants";
import { device } from "../shared/mediaHelper";

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
  background-color: ${colors.PALE_GREY};
  padding: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
  ${device.mobile`
    padding: 28px;
  `}
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
  ${device.mobile`
    top: 28px;
    right: 28px;
  `}
`;

const StyledCloseText = styled.span`
  display: block;
  margin-top: 8px;
  color: ${colors.GRAY};
  ${device.mobile`
    display: none;
  `};
`;

const StyledChildrenContainer = styled.div`
  width: 100%;
`;

const closeCopy = {
  en: "esc",
  fr: "fermer"
};

export const DialogFullScreen = ({
  label,
  children,
  baseId,
  visible,
  hide,
  hideOnEsc,
  hideOnClickOutside,
  ...rest
}: DialogProps) => {
  const { lang, theme } = useContent();
  return (
    <StyledDialog
      aria-label={label}
      baseId={baseId}
      visible={visible}
      hide={hide}
      hideOnEsc={hideOnEsc || false}
      hideOnClickOutside={hideOnClickOutside || false}
      {...rest}
    >
      {visible && <StyledChildrenContainer>{children}</StyledChildrenContainer>}
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

export const useDialog = rkUseDialogState;
