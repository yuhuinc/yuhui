import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import markdown from "./FileCollection.md";
import { ContentProvider, FileCollection } from "../../../src";
import { Input, InputCollection } from "../../../src";

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

// const theme = {
//   colors: {
//     primary: {
//       grey: '#d9d9e3',
//       medium: '#c6c6d0',
//       light: '#dfe8ff',
//       dark: '#2000ff',
//     },
//   },
// };

const theme = {
  colors: {
    primary: {
      light: "#f1f1f1",
      medium: "#d9d9e3",
      label: "#b5b5b5",
      dark: "#74777a"
    },
    secondary: {
      medium: "#2000ff"
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

const FileCollectionSchema = Yup.object().shape({
  company_names: Yup.array()
    .required("cannot be empty array")
    .of(Yup.string().required("required"))
});

const uploadedFiles = [
  {
    name: "file1.txt",
    src: "https://www.google.ca",
    file_type: "text/plain",
    keep: true
  },
  {
    name: "file1.txt",
    src: "https://www.google.ca",
    file_type: "text/plain",
    keep: true
  }
];

export const FileCollections = () => {
  const fileCollectionValid = values =>
    values.files.length > 0 ||
    !values.uploadedFiles.every(file => file.keep === false);

  return (
    <ContentProvider lang="en" content={content}>
      <Formik
        validationSchema={FileCollectionSchema}
        initialValues={{
          files: [],
          uploadedFiles: uploadedFiles,
          company_names: []
        }}
        onSubmit={values => {
          if (!fileCollectionValid(values)) {
            return;
          }
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
            <FileCollection
              newFiles={values.files}
              data={values.uploadedFiles}
              onChange={(newValues, uploadedValues) => {
                setFieldValue("files", newValues);
                setFieldValue("uploadedFiles", uploadedValues);
              }}
              contentKey="demo.placeholder" // not used in component
              onDropVerbiage="Drop file here"
              dropFileVeriage="Drag and drop files here"
              browseVerbiage="Or browse files"
            />
            {!fileCollectionValid(values) && (
              <div style={{ color: "red" }}>
                Please uploaded atleast one file
              </div>
            )}
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
};

FileCollections.story = {
  parameters: {
    notes: { markdown }
  }
};
