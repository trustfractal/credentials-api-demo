import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Text } from "../ui";
import { TextSizes, TextWeights } from "./Text";

const cardStyles = css`
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

const CardContainer = styled.div`
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

function CardContent({ children }) {
  return <CardContentContainer>{children}</CardContentContainer>;
}

function CardTitle({ title }) {
  return (
    <CardTitleContainer>
      <Text size={TextSizes.NORMAL} weight={TextWeights.BOLD}>
        {title}
      </Text>
    </CardTitleContainer>
  );
}

Card.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default function Card(props) {
  const { title, ...otherProps } = props;
  return (
    <CardContainer {...otherProps}>
      {title && <CardTitle title={title} />}
      <CardContent {...props} />
    </CardContainer>
  );
}
