import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import markdown from "./InputCollection.md";
import { ContentProvider, InputCollection } from "../../../src";

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
      light: "#f1f1f1",
      medium: "#d9d9e3",
      label: "#b5b5b5",
      dark: "#74777a"
    },
    highlight: {
      medium: "#230cc2"
    }
  }
};

const content = {
  contentNodes,
  theme
};

const InputCollectionSchema = Yup.object().shape({
  company_names: Yup.array()
    .required("cannot be empty array")
    .of(Yup.string().required("required"))
});

export const InputCollections = () => (
  <ContentProvider lang="en" content={content}>
    <Formik
      validationSchema={InputCollectionSchema}
      initialValues={{
        company_names: []
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors }) => (
        <Form>
          <InputCollection
            type="text"
            contentKey="demo.placeholder"
            addVerbiage="Add additional input"
            onChange={(e, index, newValues) => {
              setFieldValue("company_names", newValues);
            }}
            errors={errors.company_names}
          />
          <div>
            form values
            {JSON.stringify(values)}
          </div>
          <div>
            error values
            {JSON.stringify(errors)}
          </div>
          <button type="submit">click</button>
        </Form>
      )}
    </Formik>
  </ContentProvider>
);

InputCollections.story = {
  parameters: {
    notes: { markdown }
  }
};
