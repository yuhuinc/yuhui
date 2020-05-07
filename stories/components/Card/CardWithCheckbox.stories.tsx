import React, { useState } from "react";
import styled from "styled-components";
import markdown from "./Card.md";
import { ContentProvider, CardWithCheckbox, H1, P } from "../../../src";

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

const StyledCard = styled(CardWithCheckbox)`
  box-shadow: 0px 2px 6px rgba(0, 17, 80, 0.125929);
  border-radius: 8px;
`;

export const _CardWithCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  const handleEdit = () => console.log("edit");
  const handleDelete = () => console.log("delete");

  return (
    <StyledContainer>
      <ContentProvider lang="en" content={content}>
        <H1 contentKey="regular.H1" />
        <StyledCard
          size="18px"
          checked={checked}
          toggle={toggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        >
          <P contentKey="card.text" />
        </StyledCard>

        <H1 contentKey="disabled.H1" />
        <StyledCard
          size="18px"
          checked={checked}
          toggle={toggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          disableDelete={true}
        >
          <P contentKey="card.text" />
        </StyledCard>
        <StyledCard
          size="18px"
          checked={checked}
          toggle={toggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          disableEdit={true}
        >
          <P contentKey="card.text" />
        </StyledCard>
      </ContentProvider>
    </StyledContainer>
  );
};

_CardWithCheckbox.story = {
  parameters: {
    notes: { markdown }
  }
};
