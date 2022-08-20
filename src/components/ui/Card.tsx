import * as React from "react";
import styled, { css } from "styled-components";

import { Text } from "../ui";
import { TextSizes, TextWeights } from "./Text";

type CardStyleProps = { height?: string; width?: string };
const cardStyles = css<CardStyleProps>`
  background-color: var(--c-white);

  border-radius: 10px;
  padding: 10px;

  min-height: 100px;
  min-width: 170px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  -webkit-box-shadow: 3px 3px 14px 0px rgba(231, 205, 252, 1);
  -moz-box-shadow: 3px 3px 14px 0px rgba(231, 205, 252, 1);
  box-shadow: 3px 3px 14px 0px rgba(231, 205, 252, 1);

  ${(props) =>
    props.height !== undefined &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.width !== undefined &&
    css`
      width: ${props.width};
    `}
`;

type CardContainerProps = CardStyleProps;
const CardContainer = styled.div<CardContainerProps>`
  ${cardStyles}
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--c-gray);
`;

const CardContentContainer = styled.div`
  padding: 20px 12px 0px 12px;
  min-width: 0;
  flex-grow: 1;
`;

function CardContent({ children }: React.PropsWithChildren) {
  return <CardContentContainer>{children}</CardContentContainer>;
}

type CardTitleProps = { title: string };
function CardTitle({ title }: CardTitleProps) {
  return (
    <CardTitleContainer>
      <Text size={TextSizes.NORMAL} weight={TextWeights.BOLD}>
        {title}
      </Text>
    </CardTitleContainer>
  );
}

type CardProps = React.PropsWithChildren<CardContainerProps & CardTitleProps>;
export default function Card({ title, children, ...otherProps }: CardProps) {
  return (
    <CardContainer {...otherProps}>
      {title && <CardTitle title={title} />}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}
