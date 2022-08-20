import * as React from "react";
import styled from "styled-components";

const TitleContainer = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
`;

export default function Title(props: React.PropsWithChildren) {
  const { children } = props;

  return <TitleContainer>{children}</TitleContainer>;
}
