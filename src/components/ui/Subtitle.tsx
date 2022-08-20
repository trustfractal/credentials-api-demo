import * as React from "react";
import styled from "styled-components";

const SubtitleContainer = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
`;

export default function Subtitle({ children }: React.PropsWithChildren) {
  return <SubtitleContainer>{children}</SubtitleContainer>;
}
