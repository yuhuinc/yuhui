import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { colors } from "../shared/constants";
import styled from "styled-components";

export interface CardProps {
  disableDelete?: boolean;
  disableEdit?: boolean;
  handleDelete?: Function;
  handleEdit?: Function;
  [key: string]: any;
}

export type Card = React.ComponentType<CardProps>;

const StyledContainer = styled.div`
  height: 100%;
  font-size: 24px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme?.colors?.primary?.white || colors.WHITE};
`;

const StyledButtonsContainer = styled.div`
  flex: 1;
  height: 100%;
  margin: 0;
  text-align: right;
`;

const StyledButton = styled.button`
  font-size: 24px;
  height: 100%;
  flex: 1;
  padding: 25px;
  margin: 0;
  background: none;
  border: none;
  color: ${props => props.theme?.colors?.primary?.blue || colors.COOL_BLUE};

  &:focus {
    outline: none;
  }
`;

export const Card: Card = ({
  children,
  disableDelete,
  disableEdit,
  handleDelete,
  handleEdit
}) => {
  return (
    <StyledContainer>
      {children}
      <StyledButtonsContainer>
        {!disableDelete && (
          <StyledButton
            type="button"
            onClick={handleDelete}
            disabled={disableDelete}
          >
            <RiDeleteBin6Line />
          </StyledButton>
        )}
        {!disableEdit && (
          <StyledButton
            type="button"
            onClick={handleEdit}
            disabled={disableEdit}
          >
            <MdKeyboardArrowRight />
          </StyledButton>
        )}
      </StyledButtonsContainer>
    </StyledContainer>
  );
};
