import React, { useState, useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";

import { useWindowWidth } from "../shared/useWindowWidth";

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
    cb(ref.current.clientWidth);
  } else {
    window.requestAnimationFrame(() => getClientWidth(ref, cb));
  }
};

export const useCarousel = ({ numOfPages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const goTo = index => setPageIndex(index);
  const back = () => pageIndex > 0 && setPageIndex(pageIndex - 1);
  const forward = () =>
    pageIndex < numOfPages - 1 && setPageIndex(pageIndex + 1);
  return { pageIndex, goTo, back, forward };
};

interface CarouselProps {
  pageIndex: number;
  pages: ReactNode[];
  [key: string]: any;
}

export const Carousel = ({ pageIndex, pages, ...rest }: CarouselProps) => {
  const [pageWidth, setPageWidth] = useState(0);
  const windowWidth = useWindowWidth();
  const container = useRef();

  useEffect(() => {
    getClientWidth(container, clientWidth => {
      setPageWidth(clientWidth);
    });
  }, [windowWidth]);

  return (
    <StyledContainer ref={container} {...rest}>
      <StyledInner
        count={pages.length}
        pageIndex={pageIndex}
        pageWidth={pageWidth}
      >
        {pages.map((page, i) => (
          <CarouselPage pageWidth={pageWidth} shouldRender={pageIndex === i}>
            {page}
          </CarouselPage>
        ))}
      </StyledInner>
    </StyledContainer>
  );
};

const StyledPageContainer = styled.div`
  width: ${props => props.pageWidth + "px" || "100%"};
  visibility: ${props => (props.shouldRender ? "visible" : "hidden")};
`;

const StyledPageInner = styled.div`
  width: 100%;
  display: ${props => (props.shouldRender ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarouselPage = ({ pageWidth, shouldRender, children }) => {
  return (
    <StyledPageContainer pageWidth={pageWidth} shouldRender={shouldRender}>
      <StyledPageInner shouldRender={shouldRender}>{children}</StyledPageInner>
    </StyledPageContainer>
  );
};
