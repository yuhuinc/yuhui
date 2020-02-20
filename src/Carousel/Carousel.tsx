import React, { useState, useCallback } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const StyledInner = styled.div`
  width: ${props => props.pageWidth * props.count + "px"};
  transform: ${props => `translateX(-${props.pageWidth * props.pageIndex}px)`};
  display: ${props => (props.pageWidth === 0 ? "none" : "flex")};
  transition: 0.2s all;
`;

export const useCarousel = ({ numOfPages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const goTo = index => setPageIndex(index);
  const back = () => pageIndex > 0 && setPageIndex(pageIndex - 1);
  const forward = () =>
    pageIndex < numOfPages - 1 && setPageIndex(pageIndex + 1);
  return { pageIndex, goTo, back, forward };
};

export const Carousel = ({ pageIndex, children, ...rest }) => {
  const [pageWidth, setPageWidth] = useState(0);
  const handleClientWidth = useCallback(
    elem => {
      if (elem && elem.clientWidth) {
        setPageWidth(elem.clientWidth);
      }
    },
    [setPageWidth]
  );

  return (
    <StyledContainer ref={handleClientWidth} {...rest}>
      <StyledInner
        count={children.length}
        pageIndex={pageIndex}
        pageWidth={pageWidth}
      >
        {children}
      </StyledInner>
    </StyledContainer>
  );
};
