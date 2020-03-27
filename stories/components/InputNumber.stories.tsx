import React, { useState } from "react";
import styled from "styled-components";
import { ContentProvider, InputNumber } from "../../src";

import markdown from "./InputNumber.md";

export default {
  title: "Components/Input"
};

const contentNodes = {
  "demo.placeholder": {
    copy: {
      en: "placeholder value",
      fr: "placeholder value"
    }
  }
};

const theme = {
  colors: {
    primary: {
      light: "#d0dbfd",
      dark: "2000ff"
    }
  }
};

const content = {
  contentNodes,
  theme
};

const StyledContainer = styled.div`
  width: 300px;
`;

export const NumberInputs = () => {
  const [value, setValue] = useState("5");

  const setNewValue = newValue => {
    if (newValue >= 0) {
      setValue(newValue);
    }
  };
  return (
    <StyledContainer>
      <ContentProvider lang="en" content={content}>
        <InputNumber
          title="Applicants"
          value={value}
          callback={setNewValue}
          min={5}
          max={25}
        />
      </ContentProvider>
    </StyledContainer>
  );
};

NumberInputs.story = {
  parameters: {
    notes: { markdown }
  }
};
