import React, { useCallback, createContext, useContext } from "react";
import { Button } from "reakit/Button";
import styled from "styled-components";

import { useContent } from "../Content/Content";
import { styleValues, colors } from "../shared/constants";

interface RadioCardsProps {
  name: string;
  value: any;
  setFieldValue: any;
  [key: string]: any;
}

interface RadioCardProps {
  value: any;
  [key: string]: any;
}

interface RadioContext {
  name: string;
  value: any;
  setValue: (value: string) => void;
}

const StyledCard = styled(Button)`
  box-shadow: ${styleValues.bowShadow};
  background-color: ${props =>
    props.selected ? props.theme?.colors?.primary?.light : colors.WHITE};
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.selected ? props.theme?.colors?.primary?.dark : "transparent"};
  border-radius: 16px;
  padding: 16px;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 32px;
  cursor: pointer;
`;

const RadioContext = createContext<RadioContext>({
  name: "",
  value: "",
  setValue: () => {}
});

export const RadioCards = ({
  name,
  value,
  setFieldValue,
  children
}: RadioCardsProps) => {
  return (
    <RadioContext.Provider
      value={{
        name,
        value,
        setValue: value => setFieldValue(name, value)
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

export const RadioCard = ({ value, children, ...rest }: RadioCardProps) => {
  const { value: selectedValue, setValue } = useContext(RadioContext);
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      setValue(value);
    },
    [value]
  );
  const { theme } = useContent();
  const selected = value === selectedValue;

  return (
    <StyledCard
      selected={selected}
      theme={theme}
      {...rest}
      role="radio"
      onClick={handleClick}
    >
      {children({ selected })}
    </StyledCard>
  );
};
