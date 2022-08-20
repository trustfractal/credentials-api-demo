import * as React from "react";
import styled, { css } from "styled-components";

import Text from "./Text";
import Icon, { IconName } from "./Icon";

type ButtonStyleProps = {
  alt?: string;
  disabled?: boolean;
  height?: string;
  loading?: boolean;
  width?: string;
};
const buttonStyles = css<ButtonStyleProps>`
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

type ButtonContainerProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonStyleProps;
const ButtonContainer = styled.button`
  ${buttonStyles}
`;

const LeftIconContainer = styled.div`
  margin-right: 16px;
  display: flex;
`;

const RightIconContainer = styled.div`
  margin-left: 16px;
  display: flex;
`;

type ButtonContentProps = React.PropsWithChildren<{
  loading?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
}>;
function ButtonContent(props: ButtonContentProps) {
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

type ButtonOwnProps = {
  loading: boolean;
};
type ButtonProps = ButtonOwnProps & ButtonContentProps & ButtonContainerProps;

Button.defaultProps = {
  type: "button",
  alt: false,
  disabled: false,
  loading: false,
};

export default function Button(props: ButtonProps) {
  const { loading, disabled, type, alt, ...otherProps } = props;
  return (
    <ButtonContainer
      type={type}
      alt={alt?.toString()}
      disabled={disabled || loading}
      {...otherProps}
    >
      <ButtonContent {...props} />
    </ButtonContainer>
  );
}

type AnchorContainerProps = React.ComponentPropsWithoutRef<"a"> &
  ButtonStyleProps;
const AnchorContainer = styled.a<ButtonStyleProps>`
  ${buttonStyles}

  cursor: pointer;
  text-decoration: none;
  width: fit-content;
`;

type AnchorButtonOwnProps = {
  loading: boolean;
};
type AnchorButtonProps = AnchorButtonOwnProps &
  ButtonContentProps &
  AnchorContainerProps;

AnchorButton.defaultProps = {
  target: "_blank",
  alt: false,
  disabled: false,
  loading: false,
};

export function AnchorButton(props: AnchorButtonProps) {
  const { loading, disabled, href, target, alt, ...otherProps } = props;
  return (
    <AnchorContainer
      href={href}
      target={target}
      alt={alt?.toString()}
      disabled={disabled || loading}
      {...otherProps}
    >
      <ButtonContent {...props} />
    </AnchorContainer>
  );
}
