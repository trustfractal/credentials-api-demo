import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Text from "./Text";
import Icon from "./Icon";

const buttonStyles = css`
  user-select: none;

  background-color: var(--c-orange);
  color: var(--c-white);

  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;

  height: 40px;
  min-width: 170px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;
  transform: scale(1);

  :hover {
    ${(props) =>
      !props.disabled &&
      !props.loading &&
      css`
        opacity: 0.8;
      `}
  }

  ${(props) =>
    props.alt === "true" &&
    css`
      background-color: var(--c-light-pink);
      box-shadow: 0px 3px 3px var(--c-pink);
      border-radius: 5px;

      padding-left: 10px;
      padding-right: 16x;
      justify-content: flex-start;

      height: 30px;
    `}

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

${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      background-color: var(--c-red);
    `}
`;

const ButtonContainer = styled.button`
  ${buttonStyles}
`;

const AnchorContainer = styled.a`
  ${buttonStyles}

  cursor: pointer;
  text-decoration: none;
  width: fit-content;
`;

const LeftIconContainer = styled.div`
  margin-right: 16px;
  display: flex;
`;

const RightIconContainer = styled.div`
  margin-left: 16px;
  display: flex;
`;

function ButtonContent(props) {
  const { loading, leftIcon, rightIcon, children } = props;

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {leftIcon !== undefined && (
        <LeftIconContainer>
          <Icon name={leftIcon} />
        </LeftIconContainer>
      )}
      {children}
      {rightIcon !== undefined && (
        <RightIconContainer>
          <Icon name={rightIcon} />
        </RightIconContainer>
      )}
    </>
  );
}

export default function Button(props) {
  const { loading, disabled, href, target, type, alt, ...otherProps } = props;

  if (href) {
    return (
      <AnchorContainer
        href={href}
        target={target}
        alt={alt.toString()}
        disabled={disabled || loading}
        {...otherProps}
      >
        <ButtonContent {...props} />
      </AnchorContainer>
    );
  }

  return (
    <ButtonContainer
      type={type}
      alt={alt.toString()}
      disabled={disabled || loading}
      {...otherProps}
    >
      <ButtonContent {...props} />
    </ButtonContainer>
  );
}

Button.defaultProps = {
  target: "_blank",
  type: "button",
  alt: false,
  disabled: false,
  loading: false,
};

Button.propTypes = {
  children:  PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    ),
    PropTypes.element,
    PropTypes.string,
  ]),
  height: PropTypes.string,
  width: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  alt: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
