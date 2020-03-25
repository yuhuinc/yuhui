import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { ContentProvider, FileCollection } from "../../../src";

export default {
  title: "Components/FileCollection"
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
      grey: "#d9d9e3",
      mediumgrey: "#c6c6d0",
      lightgrey: "#dfe8ff",
      dark: "#230cc2",
      navyblue: "#2000ff"
    }
  }
};

const content = {
  contentNodes,
  theme
};

const FileCollectionSchema = Yup.object().shape({
  files: Yup.array().required("cannot be empty array")
});

const files = [
  new File(["blob"], "some_file1.txt", {
    type: "text/plain"
  }),
  new File(["blob"], "some_file2.txt", {
    type: "text/plain"
  })
];

export const FileCollections = () => (
  <ContentProvider lang="en" content={content}>
    <Formik
      validationSchema={FileCollectionSchema}
      initialValues={{
        files: files
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors }) => (
        <Form>
          <FileCollection
            data={files}
            onChange={newValues => {
              setFieldValue("files", newValues);
            }}
            contentKey="demo.placeholder" // not used in component
            onDropVerbiage="Drop file here"
            dropFileVeriage="Drag and drop files here"
            browseVerbiage="Or browse files"
            errors={errors.files}
          />
          <div style={{ marginTop: "50px" }}>
            form values
            {JSON.stringify(values)}
          </div>
          <div>
            error values
            {JSON.stringify(errors)}
          </div>
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  </ContentProvider>
);
