import React from "react";
import styled from "styled-components";

import { colors } from "../shared/colors";
import { withContent, WithContentProps } from "../Content/Content";

interface ButtonProps extends WithContentProps {
  disabled?: boolean;
  [key: string]: any;
}

const StyledButton = styled.button`
  color: ${props =>
    props.disabled ? colors.BATTLESHIP_GREY : props.theme.colors.primary.dark};
  background-color: ${props =>
    props.disabled ? colors.PALE_GREY : props.theme.colors.primary.light};
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
      <StyledButton {...rest} theme={theme}>
        {children}
      </StyledButton>
    );
  }
);
