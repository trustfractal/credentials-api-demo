import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootContainer = styled.div`
  padding: 20px;

  @media(min-width: 768px) {
    padding: 100px 122px 100px 122px;

    max-width: 1440px;
  }
`;

export default function TopComponent(props) {
  const { children } = props;

  return <RootContainer>{children}</RootContainer>;
}

TopComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  title: PropTypes.string,
};
