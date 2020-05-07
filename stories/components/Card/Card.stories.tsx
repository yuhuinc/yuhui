import React from "react";
import styled from "styled-components";
import markdown from "./Card.md";
import { ContentProvider, Card, H1, P } from "../../../src";

export default {
  title: "Components/Card"
};

const contentNodes = {
  "card.text": {
    copy: {
      en: "My title",
      fr: "Mon titre"
    }
  },
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
  }
};

const theme = {
  colors: {
    primary: {
      white: "white",
      blue: "#230cc2"
    }
  }
};

const content = {
  contentNodes,
  theme
};

const StyledContainer = styled.div`
  background: #f3f3f3;
  padding: 10px;
`;

const SampleCardText = () => (
  <P contentKey="card.text" style={{ marginLeft: "25px" }} />
);

export const _Card = () => {
  const handleEdit = () => console.log("edit");
  const handleDelete = () => console.log("delete");

  return (
    <StyledContainer>
      <ContentProvider lang="en" content={content}>
        <H1 contentKey="regular.H1" />
        <Card handleEdit={handleEdit} handleDelete={handleDelete}>
          <SampleCardText />
        </Card>

        <H1 contentKey="disabled.H1" />
        <Card
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          disableDelete={true}
        >
          <SampleCardText />
        </Card>
        <Card
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          disableEdit={true}
        >
          <SampleCardText />
        </Card>
      </ContentProvider>
    </StyledContainer>
  );
};

_Card.story = {
  parameters: {
    notes: { markdown }
  }
};
