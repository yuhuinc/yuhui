import { css } from "styled-components";

const sizes = {
  mobile: 749,
  desktop: 750,
  largeDesktop: 1023
};

export const device = {
  desktop: (...args) => css`
    @media (max-width: ${sizes.largeDesktop}px) and (min-width: ${sizes.desktop}px) {
      ${css(...args)};
    }
  `,
  largeDesktop: (...args) => css`
    @media (min-width: ${sizes.largeDesktop}px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${sizes.mobile}px) {
      ${css(...args)}
    }
  `
};
