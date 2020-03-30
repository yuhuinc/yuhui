import React from "react";
import styled from "styled-components";
import { useContent, useCopy } from "../Content/Content";
import { colors } from "../shared/constants";

const StyledInput = styled.input`
  width: ${props => props.width || "100%"};
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid
    ${props => props.theme?.colors?.primary?.light || colors.SKY_BLUE};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${props =>
      props.theme?.colors?.primary?.dark || colors.ULTRAMARINE_BLUE};
  }
`;

export const Input = ({ contentKey, ...rest }) => {
  const { theme } = useContent();
  const placeholder = useCopy(contentKey);
  return <StyledInput placeholder={placeholder} theme={theme} {...rest} />;
};
