import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Head from "../Head";

import GlobalStyle from "./styles/GlobalStyle";
import GlobalFonts from "./fonts/GlobalFonts";

const LayoutContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;

  overflow: hidden;
`;

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Head />
      <LayoutContainer className="Layout">{children}</LayoutContainer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  title: PropTypes.string,
};
