import { css } from "styled-components";

import { sizes } from "../atoms/Variables";

// iterate through the sizes and create media templates
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
