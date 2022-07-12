import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubtitleContainer = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
`;

export default function Subtitle(props) {
  const { children } = props;

  return <SubtitleContainer>{children}</SubtitleContainer>;
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
