import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import {
  DialogFullScreen,
  useDialog,
  Carousel,
  useCarousel,
  ContentProvider,
  ButtonPrimary,
  H1
} from "../../src";

export default {
  title: "Recipes/Carousel in Dialog"
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
  "demo.ToggleButton": {
    copy: {
      en: "Toggle Dialog",
      fr: "Toggle Dialog"
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

export const CarouselInDialog = () => {
  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({
    numOfPages: 2
  });
  const dialog = useDialog();
  const [name, setName] = useState("");
  const [interested, setInterested] = useState(false);

  return (
    <ContentProvider lang="en" content={content}>
      <ButtonPrimary contentKey="demo.ToggleButton" onClick={dialog.toggle} />
      <DialogFullScreen label="Hello" {...dialog}>
        <Carousel pageIndex={pageIndex} {...rest}>
          <Page1 forward={forward} setName={setName} />
          <Page2
            back={back}
            goTo={goTo}
            name={name}
            interested={interested}
            setInterested={setInterested}
          />
        </Carousel>
      </DialogFullScreen>
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

const Page2 = ({ back, name, ...rest }) => {
  const handleClickBack = e => {
    e.preventDefault();
    back();
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <StyledForm {...rest}>
          <H1
            centered
            contentKey="demo.H1SecondPage"
            render={copy => `${copy}, ${name}`}
          />
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
