import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import markdown from "./InputFile.md";
import { ContentProvider, InputFile } from "../../src";

export default {
  title: "Components/Input"
};

const StyledError = styled.div`
  color: red;
  margin: 0px;
  padding-left: 17px;
`;

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

export const InputFiles = () => {
  const inputFileValid = values =>
    values.files.length > 0 ||
    values.uploadedFiles.some(file => file.keep === true);

  return (
    <ContentProvider lang="en" content={content}>
      <Formik
        initialValues={{
          files: [],
          uploadedFiles: uploadedFiles
        }}
        onSubmit={values => {
          if (!inputFileValid(values)) {
            return;
          }
          console.log(values);
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <InputFile
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
              rejectFileError="Cannot accept that file"
              acceptedFiles="application/pdf, image/*, text/plain, .zip, .doc"
              maxSize={10000000}
            />
            {!inputFileValid(values) && (
              <StyledError>Please uploaded atleast one file</StyledError>
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

InputFiles.story = {
  parameters: {
    notes: { markdown }
  }
};
