import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import markdown from './FileCollection.md';
import { ContentProvider, FileCollection } from '../../../src';
import { InputCollection } from '../../../src';
import { MdSentimentSatisfied } from 'react-icons/md';

export default {
  title: 'Components/FileCollection',
};

const contentNodes = {
  'demo.placeholder': {
    copy: {
      en: 'placeholder value',
      fr: 'placeholder value',
    },
  },
};

const theme = {
  colors: {
    primary: {
      grey: '#d9d9e3',
      mediumgrey: '#c6c6d0',
      lightgrey: '#dfe8ff',
      dark: '#230cc2',
      navyblue: '#2000ff',
    },
  },
};

const content = {
  contentNodes,
  theme,
};

const StyledError = styled.div`
  color: red;
  margin: 0px;
  padding-left: 17px;
`;

const FileCollectionSchema = Yup.object().shape({
  files: Yup.array().required('add a new file'),
  uploadedFiles: Yup.array().of(
    Yup.object({
      keep: Yup.boolean().test({
        name: 'upload-file-test',
        test: function(value) {
          return value === false
            ? this.createError({
                message: 'add a new file1',
                path: this.path,
              })
            : true;
        },
      }),
    })
  ),
});

const uploadedFiles = [
  {
    name: 'file1.txt',
    src: 'https://www.google.ca',
    file_type: 'text/plain',
    keep: true,
  },
  {
    name: 'file1.txt',
    src: 'https://www.google.ca',
    file_type: 'text/plain',
    keep: true,
  },
];


// new File(['blob'], uploadedFiles[0].name, {
//   type: uploadedFiles[0].file_type
// })

// document_template.files.each do |file|
//   if !params[:files].map{|file| file.filename}.include?(file.filename)
//     // delete this file
//   end
// end

// params[:files].each do |file|
//   if !document_template.files.map{|file| file.filename}.include?(file.filename)
//     // create new file
//   end
// end

const renderError = (error, values) => {
  if (!!!error) return null;
  if (values.files.length > 0 || values.uploadedFiles.filter(file => file.keep).length > 0)
    return null;

  if (Array.isArray(error.uploadedFiles)) {
    return <StyledError>{error.uploadedFiles[0].keep}</StyledError>;
  } else {
    return <StyledError>{error.files}</StyledError>;
  }
};

export const FileCollections = () => {
  return (
    <ContentProvider lang="en" content={content}>
      <Formik
        validationSchema={FileCollectionSchema}
        initialValues={{
          files: [],
          // uploadedFiles: uploadedFiles,
        }}
        onSubmit={values => {
          if values.files.length === 0 return
          console.log(values);
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <FileCollection
              newFiles={values.files}
              data={values.uploadedFiles}
              onChange={(newValues, uploadedValues) => {
                setFieldValue('files', newValues);
                setFieldValue('uploadedFiles', uploadedValues);
              }}
              contentKey="demo.placeholder" // not used in component
              onDropVerbiage="Drop file here"
              dropFileVeriage="Drag and drop files here"
              browseVerbiage="Or browse files"
            />
            <div style={{ marginTop: '50px' }}>
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
    notes: { markdown },
  },
};
