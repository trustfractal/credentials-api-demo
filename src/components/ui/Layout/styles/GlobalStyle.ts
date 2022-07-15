import { createGlobalStyle } from "styled-components";

import ResetStyle from "./ResetStyle";
import NormalizeStyle from "./NormalizeStyle";

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${NormalizeStyle}
  :root {
    --c-white: #ffffff;
    --c-black: #000000;
    --c-gray: #f5f0f8;
    --c-lightest-pink: rgba(209, 151, 255, 0.1);
    --c-light-pink: rgba(209, 151, 255, 0.74);
    --c-pink: #d197ff;
    --c-dark-pink: #cc8bff;
    --c-red: rgba(239, 68, 68);
    --c-orange: rgba(255, 103, 29, 0.8);
  }

  html {
    background-color: var(--c-white);
    color: var(--c-black);
  }

  html,
  body {
    font-family: Nexa, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
`;

export default GlobalStyle;
