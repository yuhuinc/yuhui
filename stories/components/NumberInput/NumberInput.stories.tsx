import React, { useState } from "react";
import styled from "styled-components";
import { ContentProvider, NumberInput } from "../../../src";

import markdown from "./NumberInput.md";

export default {
  title: "Components/NumberInput"
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
      dark: "#230cc2"
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
  const [value, setValue] = useState("0");

  const setNewValue = newValue => {
    if (newValue >= 0) {
      setValue(newValue);
    }
  };
  return (
    <StyledContainer>
      <ContentProvider lang="en" content={content}>
        <NumberInput title="Applicants" value={value} callback={setNewValue} />
      </ContentProvider>
    </StyledContainer>
  );
};

NumberInputs.story = {
  parameters: {
    notes: { markdown }
  }
};
