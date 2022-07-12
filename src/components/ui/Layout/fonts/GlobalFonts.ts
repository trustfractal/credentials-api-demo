import { createGlobalStyle } from "styled-components";

import NexaLightOtf from "./NexaLight.otf";
import NexaBoldOtf from "./NexaBold.otf";

const fonts = createGlobalStyle`
  @font-face {
    font-family: "Nexa";
    font-weight: normal;
    font-style: normal;
    src: url(${NexaLightOtf}) format("opentype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Nexa";
    font-weight: bold;
    font-style: normal;
    src: url(${NexaBoldOtf}) format("opentype");
    font-display: fallback;
  }
`;

export default fonts;
