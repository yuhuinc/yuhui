import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Card } from "./Card";
import { colors } from "../shared/constants";
import styled from "styled-components";

export interface CardProps {
  disableDelete?: boolean;
  handleDelete?: Function;
  disableEdit?: boolean;
  handleEdit?: Function;
  disableCheckbox?: boolean;
  [key: string]: any;
}

export type CardWithCheckbox = React.ComponentType<CardProps>;

const StyledContainer = styled.div`
  height: 100%;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme?.colors?.primary?.white || colors.WHITE};
`;

const StyledCheckBox = styled(Checkbox)`
  padding: 25px;
`;

export const CardWithCheckbox: CardWithCheckbox = ({
  children,
  disableDelete,
  disableEdit,
  handleDelete,
  handleEdit,
  disableCheckbox,
  ...props
}) => {
  const { size, checked, toggle } = props;
  return (
    <StyledContainer>
      <StyledCheckBox
        size={size}
        checked={checked}
        toggle={toggle}
        disabled={disableCheckbox}
      />
      <Card
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        disableEdit={disableEdit}
        disableDelete={disableDelete}
      >
        {children}
      </Card>
    </StyledContainer>
  );
};
