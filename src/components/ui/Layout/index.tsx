import * as React from "react";
import styled from "styled-components";

import Head from "../Head";

import GlobalStyle from "./styles/GlobalStyle";
import GlobalFonts from "./fonts/GlobalFonts";

const LayoutContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;

  overflow: hidden;
`;

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Head />
      <LayoutContainer className="Layout">{children}</LayoutContainer>
    </>
  );
}
