import React, { useState } from "react";
import markdown from "./Checkbox.md";
import { Checkbox, ContentProvider, H1 } from "../../../src";
import styled from "styled-components";
import { Formik } from "formik";

export default {
  title: "Components/Checkbox"
};

const contentNodes = {
  "regular.H1": {
    copy: {
      en: "Plain",
      fr: "Plaine"
    }
  },
  "disabled.H1": {
    copy: {
      en: "Disabled",
      fr: "Désactivé"
    }
  },
  "withLabel.H1": {
    copy: {
      en: "With label",
      fr: "Avec étiquette"
    }
  },
  "withCustomSize.H1": {
    copy: {
      en: "Size",
      fr: "Taille"
    }
  },
  "withFormik.H1": {
    copy: {
      en: "With formik",
      fr: "Avec formik"
    }
  }
};

const theme = {
  colors: {
    primary: {
      light: "#d0dbfd",
      blue: "#230cc2"
    }
  }
};

const content = {
  contentNodes,
  theme
};

export const _Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  return (
    <ContentProvider lang="en" content={content}>
      <H1 contentKey="regular.H1" />
      <Checkbox checked={checked} toggle={toggle} />

      <H1 contentKey="disabled.H1" />
      <Checkbox checked={true} disabled={true} />
      <Checkbox disabled={true} style={{ marginLeft: "10px" }} />

      <H1 contentKey="withLabel.H1" />
      <Checkbox
        checked={checked}
        toggle={toggle}
        label="can click me as well"
      />

      <H1 contentKey="withCustomSize.H1" />
      <Checkbox checked={checked} toggle={toggle} size="10px" label="10px" />
      <Checkbox
        checked={checked}
        toggle={toggle}
        size="2rem"
        label="2rem"
        style={{ marginLeft: "10px" }}
      />

      <H1 contentKey="withFormik.H1" />
      <CheckboxForm />
    </ContentProvider>
  );
};

const StyledFormContainer = styled.div`
  height: 200px;
  width: 300px;
  background-color: #eee;
`;

export const CheckboxForm = () => {
  return (
    <StyledFormContainer>
      <ContentProvider lang="en" content={content}>
        <Formik
          initialValues={{
            checked: false
          }}
          onSubmit={values => console.log(values)}
        >
          {({ values, setFieldValue }) => (
            <>
              <Checkbox
                label="Sign me up"
                name="checked"
                checked={values.checked}
                size="16px"
                toggle={() => setFieldValue("checked", !values.checked)}
              />
              <div>{JSON.stringify(values)}</div>
            </>
          )}
        </Formik>
      </ContentProvider>
    </StyledFormContainer>
  );
};

_Checkbox.story = {
  parameters: {
    notes: { markdown }
  }
};
