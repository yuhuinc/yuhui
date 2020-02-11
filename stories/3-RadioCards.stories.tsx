import React from "react";
import { Formik, Form } from "formik";

import { ContentProvider, RadioCards, RadioCard } from "../src";

export default {
  title: "Input"
};

const contentNodes = {
  "demo.Button": {
    copy: {
      en: "Toggle Dialog",
      fr: "Toggle Dialog"
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

export const Radio_Cards = () => (
  <ContentProvider lang="en" content={content}>
    <RadioInputs />
  </ContentProvider>
);

const RadioInputs = () => {
  return (
    <Formik
      initialValues={{
        choice: "",
        number: ""
      }}
      onSubmit={values => console.log(values)}
    >
      {({ values, setFieldValue }) => (
        <Form name="form_1">
          <RadioCards
            name="choice"
            setFieldValue={setFieldValue}
            value={values.choice}
          >
            <RadioCard value="hello" setFieldValue={setFieldValue}>
              {({ selected }) => (
                <div>
                  <p>Hello</p>
                  {selected && "*"}
                </div>
              )}
            </RadioCard>
            <RadioCard value="world" setFieldValue={setFieldValue}>
              {({ selected }) => (
                <div>
                  <p>World</p>
                  {selected && "*"}
                </div>
              )}
            </RadioCard>
          </RadioCards>
          <RadioCards
            name="number"
            setFieldValue={setFieldValue}
            value={values.number}
          >
            <RadioCard value="1" setFieldValue={setFieldValue}>
              {({ selected }) => (
                <div>
                  <p>1</p>
                  {selected && "*"}
                </div>
              )}
            </RadioCard>
            <RadioCard value="2" setFieldValue={setFieldValue}>
              {({ selected }) => (
                <div>
                  <p>2</p>
                  {selected && "*"}
                </div>
              )}
            </RadioCard>
          </RadioCards>
          <div>
            form values
            {JSON.stringify(values)}
          </div>
        </Form>
      )}
    </Formik>
  );
};
