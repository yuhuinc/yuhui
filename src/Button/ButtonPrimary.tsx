import React from "react";
import styled from "styled-components";

import { colors } from "../shared/constants";
import { withContent } from "../Content/Content";
import { ButtonProps } from "./Button";

const StyledButton = styled.button`
  color: ${props =>
    props.disabled
      ? colors.BATTLESHIP_GREY
      : props.themeObj.colors.primary.dark};
  background-color: ${props =>
    props.disabled ? colors.DISABLED_GRAY : props.themeObj.colors.primary.light};
  line-height: 36px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 28px !important;
  padding: 1px 24px 0;
  text-align: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export const ButtonPrimary = withContent(
  ({ children, theme, ...rest }: ButtonProps) => {
    return (
      <StyledButton {...rest} themeObj={theme}>
        {children}
      </StyledButton>
    );
  }
);
