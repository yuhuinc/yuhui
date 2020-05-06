import React, { useState } from "react";
import { Checkbox as RKCheckbox } from "reakit/Checkbox";
import { colors } from "../shared/constants";
import styled, { css } from "styled-components";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  toggle?: Function;
  [key: string]: any;
}

export type Checkbox = React.ComponentType<CheckboxProps>;

const StyledCheckBoxLabel = styled.label`
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding: 25px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const checkedStyles = css`
  background: ${props =>
    props.theme?.colors?.primary?.blue || colors.COOL_BLUE};
  border: 1px solid
    ${props => props.theme?.colors?.primary?.blue || colors.COOL_BLUE};
  ${Icon} {
    visibility: visible;
  }
`;

const uncheckedStyles = css`
  background: #f2f2f2;
  border: 1px solid #e0e0e0;
  ${Icon} {
    visibility: hidden;
  }
`;

const StyledCheckBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transition: all 150ms;
  padding: 5px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  ${props => (props.checked ? checkedStyles : uncheckedStyles)};
`;

export const Checkbox: Checkbox = ({ disabled, checked, toggle, ...props }) => {
  return (
    <StyledCheckBoxLabel onChange={toggle} {...props}>
      <HiddenCheckbox checked={checked} />
      <RKCheckbox as={StyledCheckBox} checked={checked} disabled={disabled}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </RKCheckbox>
    </StyledCheckBoxLabel>
  );
};
