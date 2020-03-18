import React from "react";
import styled from "styled-components";
import { useContent } from "../Content/Content";

const StyledInput = styled.input`
  width: ${props => props.width || "100%"};
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.primary.light};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.dark};
  }
`;

export const Input = ({ contentKey, ...rest }) => {
  const { lang, contentNodes, theme } = useContent();
  const placeholder = contentNodes[contentKey].copy[lang];
  return <StyledInput placeholder={placeholder} theme={theme} {...rest} />;
};
