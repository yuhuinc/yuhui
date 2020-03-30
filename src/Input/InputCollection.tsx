import React, { useState } from "react";
import styled from "styled-components";
import { useContent, WithContentProps } from "../Content/Content";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { colors } from "../shared/constants";

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const StyledOuter = styled.div`
  margin-bottom: 8px;
`;

const StyledInner = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  border: 1px solid;
  border-color: ${props =>
    props.theme?.colors?.primary?.medium || colors.LIGHT_PERIWINKLE};
  border-radius: 7px;
  width: 95%;
  height: 40px;
  padding-left: 16px;
  font-size: 1rem;
  &::placeholder {
    color: ${props => props.theme?.colors?.primary?.light || colors.LIGHT_GRAY};
  }
  &:focus {
    outline: none;
    border-color: ${props =>
      props.theme?.colors?.highlight?.medium || colors.ULTRAMARINE_BLUE};
  }
`;

const StyledAddButton = styled.button`
  display: flex;
  border: 1px solid;
  border-color: ${props =>
    props.theme?.colors?.primary?.medium || colors.LIGHT_PERIWINKLE};
  background-color: ${props =>
    props.theme?.colors?.primary?.light || colors.LIGHT_GRAY};
  width: 95%;
  height: 40px;
  text-align: left;
  font-size: 16px;
  color: ${props => props.theme?.colors?.primary?.label || colors.LABEL_GRAY};
  border-radius: 7px;
  &:focus {
    outline: none;
    border-color: ${props =>
      props.theme?.colors?.highlight?.medium || colors.ULTRAMARINE_BLUE};
  }
`;

const StyledRemoveButton = styled.button`
  width: 5%;
  border: none;
  font-size: 20px;
  color: #b4b7bd;
  &:focus {
    outline: none;
    border: 1px solid
      ${props =>
        props.theme?.colors?.highlight?.medium || colors.ULTRAMARINE_BLUE};
  }
`;

const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  margin-right: 15px;
`;

const StyledError = styled.div`
  color: red;
  margin: 0px;
  padding-left: 17px;
`;

export interface InputCollectionProps extends WithContentProps {
  type: "text" | "email" | "number" | "url";
  addVerbiage: string;
  [key: string]: any;
}

export type InputCollection = React.ComponentType<InputCollectionProps>;

export const InputCollection: InputCollection = ({
  contentKey,
  addVerbiage,
  onChange,
  name,
  type,
  errors,
  ...rest
}) => {
  const { lang, contentNodes, theme } = useContent();
  const placeholder = contentNodes[contentKey].copy[lang];
  const [inputs, setInputs] = useState([""]);

  const handleChange = (e, index) => {
    let newValues = [...inputs];

    newValues[index] = e.target.value;
    setInputs(newValues);
    if (onChange) {
      onChange(e, index, newValues);
    }
  };

  const handleRemoveInput = (e, index) => {
    let newValues = [...inputs];
    newValues.splice(index, 1);
    setInputs(newValues);
    if (onChange) {
      onChange(e, index, newValues);
    }
  };

  const handleAddInput = e => {
    let newValues = [...inputs];
    newValues.push("");
    setInputs(newValues);
    if (onChange) {
      onChange(e, null, newValues);
    }
  };

  return (
    <StyledInputContainer theme={theme} {...rest}>
      {inputs.map((value, index) => (
        <StyledOuter>
          <StyledInner theme={theme}>
            <StyledInput
              type={type}
              name={`${name}[${index}]`}
              placeholder={placeholder}
              value={value}
              onChange={e => handleChange(e, index)}
              theme={theme}
            />
            <StyledRemoveButton
              type="button"
              onClick={e => handleRemoveInput(e, index)}
              theme={theme}
            >
              <AiOutlineClose />
            </StyledRemoveButton>
          </StyledInner>
          {!!(errors && Array.isArray(errors)) ? (
            <StyledError>{errors[index]}</StyledError>
          ) : null}
        </StyledOuter>
      ))}
      <StyledAddButton
        type="button"
        onClick={e => handleAddInput(e)}
        theme={theme}
      >
        <div>
          <StyledAiOutlinePlus />
        </div>
        {addVerbiage}
      </StyledAddButton>
      {!!errors && !Array.isArray(errors) ? (
        <StyledError>{errors}</StyledError>
      ) : null}
    </StyledInputContainer>
  );
};
