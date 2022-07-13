import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const TextSizes = {
  EXTRA_EXTRA_SMALL: "14px",
  EXTRA_SMALL: "17px",
  SMALL: "20px",
  NORMAL: "22px",
  LARGE: "24px",
  EXTRA_LARGE: "27px",
};

export const TextWeights = {
  LIGHT: "normal",
  NORMAL: "normal",
  BOLD: "bold",
};

const TextContainer = styled.p`
  ${(props) =>
  css`
      font-size: ${props.size};
      line-height: ${props.size};
      font-weight: ${props.weight};
    `}
`;

export default function Text(props) {
  const { children, size, weight } = props;

  return (
    <TextContainer size={size} weight={weight}>
      {children}
    </TextContainer>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    ),
    PropTypes.element,
    PropTypes.string,
  ]),
};

Text.defaultProps = {
  size: TextSizes.NORMAL,
  weight: TextWeights.NORMAL,
};
