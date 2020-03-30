import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import { ContentProvider, InputNumber } from "../../../src";

import markdown from "./InputNumber.md";

export default {
  title: "Components/Input"
};

const contentNodes = {
  "demo.title1": {
    copy: {
      en: "Applicants",
      fr: "Candidats"
    }
  },
  "demo.title2": {
    copy: {
      en: "A long title that should be cut off",
      fr: "Un titre long à couper oui"
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
  padding: 10rem;
  width: 300px;
  background-color: #eee;
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
        <Formik
          initialValues={{
            one: 5,
            two: 1
          }}
          onSubmit={values => console.log(values)}
        >
          {({ values, setFieldValue }) => (
            <>
              <InputNumber
                contentKey="demo.title1"
                name="one"
                value={values.one}
                callback={val => setFieldValue("one", val)}
                min={5}
                max={25}
              />
              <InputNumber
                contentKey="demo.title2"
                name="two"
                value={values.two}
                callback={val => setFieldValue("two", val)}
                min={1}
                max={10}
              />
              <div>{JSON.stringify(values)}</div>
            </>
          )}
        </Formik>
      </ContentProvider>
    </StyledContainer>
  );
};

NumberInputs.story = {
  parameters: {
    notes: { markdown }
  }
};
