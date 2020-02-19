import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import {
  Carousel,
  useCarousel,
  ContentProvider,
  ButtonPrimary,
  H1
} from "../../src";

export default {
  title: "Recipes/Wizard"
};

const contentNodes = {
  "demo.ForwardButton": {
    copy: {
      en: "Next",
      fr: "Next"
    }
  },
  "demo.BackButton": {
    copy: {
      en: "Back",
      fr: "Back"
    }
  },
  "demo.H1FirstPage": {
    copy: {
      en: "Let's get started",
      fr: "Let's get started"
    }
  },
  "demo.H1SecondPage": {
    copy: {
      en: "Hi",
      fr: "Bonjour"
    }
  },
  "demo.H1ThirdPage": {
    copy: {
      en: "Third Page",
      fr: "Third Page"
    }
  },
  "demo.H1FourthPage": {
    copy: {
      en: "Last Page",
      fr: "Last Page"
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

export const FormWizard = () => {
  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({
    numOfPages: 4
  });
  const [name, setName] = useState("");
  const [interested, setInterested] = useState(false);

  return (
    <ContentProvider lang="en" content={content}>
      <h1>Carousel</h1>
      <div
        style={{
          width: "80%",
          margin: "16px auto",
          border: "1px solid teal"
        }}
      >
        <Carousel pageIndex={pageIndex} {...rest}>
          <Page1 forward={forward} setName={setName} />
          <Page2
            back={back}
            goTo={goTo}
            name={name}
            interested={interested}
            setInterested={setInterested}
          />
          <Page3 back={back} forward={forward} interested={interested} />
          <Page4 goTo={goTo} interested={interested} />
        </Carousel>
      </div>
    </ContentProvider>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  height: 400px;
  display: flex;
  visibility: ${props => (props.hide ? "hidden" : "visible")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledField = styled(Field)`
  padding: 8px;
  margin-bottom: 16px;
`;

const Page1 = ({ forward, setName, ...rest }) => {
  return (
    <Formik
      initialValues={{
        name: ""
      }}
      onSubmit={values => {
        setName(values.name);
        forward();
      }}
    >
      {() => (
        <StyledForm {...rest}>
          <H1 centered contentKey="demo.H1FirstPage" />
          <StyledField
            required
            type="text"
            name="name"
            placeholder="Your name"
          />
          <div>
            <ButtonPrimary contentKey="demo.ForwardButton" />
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

const Page2 = ({ goTo, back, name, interested, setInterested, ...rest }) => {
  const handleClickBack = e => {
    e.preventDefault();
    back();
  };
  return (
    <Formik
      initialValues={{
        interested: interested
      }}
      onSubmit={values => {
        setInterested(values.interested);
        if (values.interested) {
          goTo(2);
        } else {
          goTo(3);
        }
      }}
    >
      {() => (
        <StyledForm {...rest}>
          <H1
            centered
            contentKey="demo.H1SecondPage"
            render={copy => `${copy}, ${name}`}
          />
          <label>
            <StyledField type="checkbox" name="interested" />
            Are you interested in seeing the third page?
          </label>
          <div>
            <ButtonPrimary
              onClick={handleClickBack}
              contentKey="demo.BackButton"
            />
            <ButtonPrimary contentKey="demo.ForwardButton" />
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

const Page3 = ({ forward, back, interested, ...rest }) => {
  const handleClickBack = e => {
    e.preventDefault();
    back();
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        forward();
      }}
    >
      {() => (
        <StyledForm hide={!interested} {...rest}>
          <H1 centered contentKey="demo.H1ThirdPage" />
          <div>
            <ButtonPrimary
              onClick={handleClickBack}
              contentKey="demo.BackButton"
            />
            <ButtonPrimary contentKey="demo.ForwardButton" />
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

const Page4 = ({ goTo, interested, ...rest }) => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        if (interested) {
          goTo(2);
        } else {
          goTo(1);
        }
      }}
    >
      {() => (
        <StyledForm {...rest}>
          <H1 centered contentKey="demo.H1FourthPage" />
          <ButtonPrimary contentKey="demo.BackButton" />
        </StyledForm>
      )}
    </Formik>
  );
};
