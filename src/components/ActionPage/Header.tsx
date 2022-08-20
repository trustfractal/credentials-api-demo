import * as React from "react";
import styled from "styled-components";

import { Subtitle, Text, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";

const HeaderSection = styled.section`
  min-height: 76px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const LinksContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--c-black);

  :hover {
    color: var(--c-pink);
  }
`;

const Logo = styled.div`
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderSection>
      <TopComponent>
        <HeaderContainer>
          <LogoContainer>
            <Logo>
              <Subtitle>Defistarter</Subtitle>
            </Logo>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">
              <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                home
              </Text>
            </Link>
            <Link href="#">
              <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                products
              </Text>
            </Link>
            <Link href="#">
              <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                our team
              </Text>
            </Link>
            <Link href="#">
              <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                contact us
              </Text>
            </Link>
          </LinksContainer>
        </HeaderContainer>
      </TopComponent>
    </HeaderSection>
  );
}
