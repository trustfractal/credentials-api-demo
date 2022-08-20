import * as React from "react";
import styled from "styled-components";

const RootContainer = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px 122px 50px 122px;

    max-width: 1440px;
    margin: 0px auto;
  }
`;

export default function TopComponent(props: React.PropsWithChildren) {
  const { children } = props;

  return <RootContainer>{children}</RootContainer>;
}
