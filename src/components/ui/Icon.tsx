import * as React from "react";
import styled, { css } from "styled-components";

import Discord from "../../assets/icons/discord.svg";
import Reddit from "../../assets/icons/reddit.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Twitter from "../../assets/icons/twitter.svg";

type RootContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  clickable?: boolean;
};
const RootContainer = styled.div<RootContainerProps>`
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
} as const;
export type IconName = typeof IconNames[keyof typeof IconNames];

const Icons = {
  [IconNames.DISCORD]: Discord,
  [IconNames.REDDIT]: Reddit,
  [IconNames.TELEGRAM]: Telegram,
  [IconNames.TWITTER]: Twitter,
};

type IconProps = React.ComponentPropsWithoutRef<"svg"> &
  Pick<RootContainerProps, "clickable" | "onClick"> & {
    name: IconName;
  };

Icon.defaultProps = {
  clickable: false,
};
function Icon(props: IconProps) {
  const { name, clickable, onClick, ...otherProps } = props;

  const Svg = Icons[name];

  return (
    <RootContainer clickable={clickable} onClick={onClick}>
      <Svg alt={name} {...otherProps} />
    </RootContainer>
  );
}

export default Icon;
