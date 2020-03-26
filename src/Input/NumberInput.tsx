import React from "react";
import styled from "styled-components";

import { colors } from "../shared/constants";

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const StyledInner = styled.div`
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
  color: ${colors.DARK_GRAY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(70% - 15px);
  margin-right: 15px;
`;

const StyledInputGroup = styled.div`
  width: 30%;
`;

const StyledInput = styled.input`
  width: 25px;
  margin-left: 5px;
  margin-right: 5px;
  height: 20px;
  outline: none;
`;

const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  outline: none;
  border: ${`solid 1.5px ${colors.PURE_BLUE}`};
  border-radius: 50%;
  color: ${colors.PURE_BLUE};
  opacity: ${props => (props.disabled ? "37%" : "100%")};
  cursor: pointer;
`;

interface NumberInputProps {
  title: string;
  value: string;
  min: number;
  max: number;
  callback: (newValue: number) => void;
  [key: string]: any;
}

export const NumberInput = ({
  title,
  value,
  min = 0,
  max = 99,
  callback,
  ...rest
}: NumberInputProps) => (
  <StyledContainer>
    <StyledInner>
      <StyledTitle>
        <span>{title}</span>
      </StyledTitle>
      <StyledInputGroup>
        <StyledButton
          type="button"
          onClick={() => callback(parseInt(value, 10) - 1)}
          disabled={parseInt(value, 10) <= min}
        >
          -
        </StyledButton>
        <StyledInput
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={e => {
            callback(e.target.value);
          }}
          {...rest}
        />
        <StyledButton
          type="button"
          onClick={() => callback(parseInt(value, 10) + 1)}
          disabled={parseInt(value, 10) >= max}
        >
          +
        </StyledButton>
      </StyledInputGroup>
    </StyledInner>
  </StyledContainer>
);
