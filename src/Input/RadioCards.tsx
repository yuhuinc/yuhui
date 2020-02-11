import React, { useCallback, createContext, useContext } from "react";
import { Button } from "reakit/Button";
import styled from "styled-components";

import { styleValues } from "../shared/constants";

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
  border-radius: 16px;
  padding: 16px;
  margin: 8px;
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
  const handleClick = useCallback(e => {
    e.preventDefault();
    setValue(value);
  }, []);

  return (
    <StyledCard {...rest} role="radio" onClick={handleClick}>
      {children({ selected: value === selectedValue })}
    </StyledCard>
  );
};
