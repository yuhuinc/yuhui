import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import {useWindowWidth} from '../shared/useWindowWidth'

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

const getClientWidth = (ref, cb) => {
  if (ref.current && ref.current.clientWidth > 0) {
    cb(ref.current.clientWidth)
  } else {
    window.requestAnimationFrame(() => getClientWidth(ref, cb))
  }
}

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
  const windowWidth = useWindowWidth();
  const container = useRef();

  useEffect(() => {
    getClientWidth(container, (clientWidth) => {
      setPageWidth(clientWidth)
    })
  }, [windowWidth])

  return (
    <StyledContainer ref={container} {...rest}>
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
