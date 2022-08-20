import * as React from "react";
import styled, { css } from "styled-components";

export const TextSizes = {
  EXTRA_EXTRA_SMALL: "14px",
  EXTRA_SMALL: "17px",
  SMALL: "20px",
  NORMAL: "22px",
  LARGE: "24px",
  EXTRA_LARGE: "27px",
};

export const TextLineHeights = {
  EXTRA_EXTRA_SMALL: "17px",
  EXTRA_SMALL: "21px",
  SMALL: "25px",
  NORMAL: "30px",
  LARGE: "32px",
  EXTRA_LARGE: "35px",
};

export const TextWeights = {
  LIGHT: "normal",
  NORMAL: "normal",
  BOLD: "bold",
};

type TextContainerProps = {
  size: string;
  lineHeight: string;
  weight: string;
};
const TextContainer = styled.p<TextContainerProps>`
  ${(props) =>
    css`
      font-size: ${props.size};
      line-height: ${props.lineHeight};
      font-weight: ${props.weight};
    `}
`;

Text.defaultProps = {
  size: TextSizes.NORMAL,
  weight: TextWeights.NORMAL,
  lineHeight: TextLineHeights.NORMAL,
};
export default function Text({
  children,
  ...otherProps
}: React.PropsWithChildren<TextContainerProps>) {
  return <TextContainer {...otherProps}>{children}</TextContainer>;
}
