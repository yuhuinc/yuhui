import React, { useCallback } from "react";
import styled from "styled-components";
import { Dialog, DialogBackdrop } from "reakit/Dialog";
import { Tabbable } from "reakit/Tabbable";
import { MdClose } from "react-icons/md";

import { colors } from "../shared/constants";
import { device } from "../shared/mediaHelper";
import { useContent } from "../Content/Content";

interface DialogProps {
  label: string;
  visible: boolean;
  showEscButton?: boolean;
  hideOnEsc?: boolean;
  hideOnClickOutside?: boolean;
  onEscButtonClick?: (event: any) => boolean;
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
  min-width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: ${colors.WHITE};
  border-radius: 8px;
  border: 1px solid rgba(33, 33, 33, 0.25);
  padding: 62px 24px;
  max-height: calc(100vh - 56px);
  overflow-y: auto;
`;

const StyledCloseContainer = styled(Tabbable)`
  position: absolute;
  top: 16px;
  right: 16px;
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

export const DialogCentreScreen = ({
  label,
  children,
  baseId,
  visible,
  hide,
  showEscButton = true,
  hideOnEsc = true,
  hideOnClickOutside = true,
  onEscButtonClick,
  ...rest
}: DialogProps) => {
  const { theme } = useContent();
  const handleEscButtonClick = useCallback(
    e => {
      e.preventDefault();

      if (!onEscButtonClick) return hide(e);
      if (onEscButtonClick(e)) return hide(e);
    },
    [onEscButtonClick]
  );

  return (
    <StyledBackdrop baseId={baseId} visible={visible} hide={hide} {...rest}>
      <StyledDialog
        baseId={baseId}
        aria-label={label}
        visible={visible}
        hide={hide}
        hideOnEsc={hideOnEsc || false}
        hideOnClickOutside={hideOnClickOutside || false}
        {...rest}
      >
        {visible && children}
        {showEscButton && (
          <StyledCloseContainer onClick={handleEscButtonClick}>
            <MdClose
              size="24px"
              color={theme.colors?.primary?.dark || colors.BLUE}
            />
          </StyledCloseContainer>
        )}
      </StyledDialog>
    </StyledBackdrop>
  );
};
