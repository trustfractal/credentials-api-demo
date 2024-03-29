import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleContainer = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
`;

export default function Title(props) {
  const { children } = props;

  return <TitleContainer>{children}</TitleContainer>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
