import React, { useCallback } from "react";
import styled from "styled-components";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { useCopy } from "../Content/Content";
import { colors } from "../shared/constants";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme?.colors?.black?.dark || colors.DARK_GRAY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 8px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  width: 25px;
  margin-left: 5px;
  margin-right: 5px;
  height: 20px;
  outline: none;
  border: none;
  text-align: center;
  background-color: transparent;
  /* Hide arrows on chrome, safari, edge, opera */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Hide arrows on firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledMinusCircle = styled(FiMinusCircle)`
  color: ${props => props.theme?.colors?.primary?.dark || colors.PURE_BLUE};
  opacity: ${props => (props.disabled ? "37%" : "100%")};
`;

const StyledPlusCircle = styled(FiPlusCircle)`
  color: ${props => props.theme?.colors?.primary?.dark || colors.PURE_BLUE};
  opacity: ${props => (props.disabled ? "37%" : "100%")};
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

interface InputNumberProps {
  contentKey: string;
  value?: string | number;
  min?: number;
  max?: number;
  callback?: (newValue: number) => void;
  [key: string]: any;
}

export const InputNumber = ({
  contentKey,
  value,
  min = 0,
  max = 99,
  callback,
  name,
  ...rest
}: InputNumberProps) => {
  const label = useCopy(contentKey);

  const handleDecrement = useCallback(() => {
    callback(parseInt(value as string, 10) - 1);
  }, [callback]);

  const handleIncrement = useCallback(() => {
    callback(parseInt(value as string, 10) + 1);
  }, [callback]);

  const handleChange = useCallback(
    e => {
      const newValue = e.target.value;
      const num = parseInt(newValue, 10);
      if (
        typeof num === "number" &&
        !isNaN(num) &&
        newValue >= min &&
        newValue <= max
      ) {
        callback(newValue);
      }
    },
    [callback]
  );

  return (
    <StyledContainer>
      <StyledTitle>{label}</StyledTitle>
      <StyledInputGroup>
        <StyledButton
          onClick={handleDecrement}
          disabled={parseInt(value as string, 10) <= min}
        >
          <StyledMinusCircle
            size="24px"
            disabled={parseInt(value as string, 10) <= min}
          />
        </StyledButton>
        <StyledInput
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={handleChange}
          name={name}
          {...rest}
        />
        <StyledButton
          onClick={handleIncrement}
          disabled={parseInt(value as string, 10) >= max}
        >
          <StyledPlusCircle
            size="24px"
            disabled={parseInt(value as string, 10) >= max}
          />
        </StyledButton>
      </StyledInputGroup>
    </StyledContainer>
  );
};
