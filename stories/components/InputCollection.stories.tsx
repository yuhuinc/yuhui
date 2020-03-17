import React from 'react';

import { ContentProvider, InputCollection } from '../../src';

export default {
  title: 'Components/Input',
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
      lightgrey: '#fafafc',
      dark: '#230cc2',
    },
  },
};

const content = {
  contentNodes,
  theme,
};

export const InputCollections = () => (
  <ContentProvider lang="en" content={content}>
    <InputCollection type="text" contentKey="demo.placeholder" addVerbiage="Add additional input" />
  </ContentProvider>
);
