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
  display: inline;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  float: left;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.DARK_GRAY};
`;

const StyledInputGroup = styled.div`
  float: right;
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
        <h3 style={{ display: "inline" }}>{title}</h3>
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
