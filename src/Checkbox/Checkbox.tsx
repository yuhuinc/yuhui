import React from "react";
import { Checkbox as RKCheckbox } from "reakit/Checkbox";
import { colors } from "../shared/constants";
import styled, { css } from "styled-components";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  toggle?: Function;
  label?: string;
  size?: string;
  [key: string]: any;
}

export type Checkbox = React.ComponentType<CheckboxProps>;

const StyledCheckBoxLabel = styled.label`
  text-align: left;
  display: inline-flex;
  vertical-align: middle;
  line-height: ${props => (props.size ? props.size : "12px")};
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
    props.disabled
      ? colors.LABEL_GRAY
      : props.theme?.colors?.primary?.blue || colors.COOL_BLUE};
  border: 1px solid
    ${props =>
      props.disabled
        ? colors.LABEL_GRAY
        : props.theme?.colors?.primary?.blue || colors.COOL_BLUE};
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
  width: ${props => (props.size ? props.size : "12px")};
  height: ${props => (props.size ? props.size : "12px")};
  border-radius: 4px;
  transition: all 150ms;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  ${props => (props.checked ? checkedStyles : uncheckedStyles)};
`;

const StyledTextLabel = styled.div`
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
  font-size: ${props => (props.size ? props.size : "12px")};
`;

export const Checkbox: Checkbox = ({
  disabled,
  checked,
  toggle,
  label,
  size,
  children,
  ...props
}) => {
  return (
    <StyledCheckBoxLabel onChange={toggle} {...props}>
      <HiddenCheckbox checked={checked} />
      <RKCheckbox
        as={StyledCheckBox}
        checked={checked}
        disabled={disabled}
        size={size}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </RKCheckbox>
      {label ? <StyledTextLabel size={size}>{label}</StyledTextLabel> : ""}
      {children}
    </StyledCheckBoxLabel>
  );
};
