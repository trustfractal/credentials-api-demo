import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Discord from "../../assets/icons/discord.svg";
import Reddit from "../../assets/icons/reddit.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Twitter from "../../assets/icons/twitter.svg";

const RootContainer = styled.div`
  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export const IconNames = {
  DISCORD: "discord",
  REDDIT: "reddit",
  TELEGRAM: "telegram",
  TWITTER: "twitter",
};

const Icons = {
  [IconNames.DISCORD]: Discord,
  [IconNames.REDDIT]: Reddit,
  [IconNames.TELEGRAM]: Telegram,
  [IconNames.TWITTER]: Twitter,
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconNames)),
  clickable: PropTypes.bool,
};

Icon.defaultProps = {
  clickable: false,
};

function Icon(props) {
  const { name, clickable, onClick, ...otherProps } = props;

  const Svg = Icons[name];

  return (
    <RootContainer clickable={clickable} onClick={onClick}>
      <Svg alt={name} {...otherProps} />
    </RootContainer>
  );
}

export default Icon;
