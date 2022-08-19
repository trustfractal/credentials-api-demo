import React from "react";
import styled from "styled-components";

import { Text, Title, TopComponent } from "../ui";
import { TextLineHeights, TextWeights } from "../ui/Text";

import useWeb3 from "../../hooks/web3";
import Connect from "./Connect";
import MiniBackoffice from "./MiniBackoffice";
import PurchaseEligibility from "./PurchaseEligibility";

import HeroDots from "../../assets/images/hero_dots.svg";

const HeroSection = styled.section`
  height: calc(100vh - 76px);
  display: flex;

  @media (min-width: 768px) {
    height: auto;
  }
`;

const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction column;
  justify-content: space-around;

  @media(min-width: 768px) {
    display: block;
    margin-bottom: 100px;
  }
`;

const HeroDotsContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -10;

  display: flex;
  justify-content: center;

  width: 100vw;
`;

const HeroRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2em;
  }
`;

const HeroTitleColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    // width: 50%;
  }
`;

const SubtitleContainer = styled.div`
  margin: 0.5em;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  // keep <p> height when empty
  p:empty::before {
    content: "";
    display: inline-block;
  }
`;

export default function Hero() {
  const { active } = useWeb3();

  return (
    <HeroSection>
      <HeroDotsContainer>
        <HeroDots />
      </HeroDotsContainer>
      <TopComponent>
        <HeroContainer>
          <HeroRow>
            <HeroTitleColumn>
              <Title>Fractal&apos;s DID Registry User Demo</Title>
              <SubtitleContainer>
                <Text size="20px" lineHeight="30px">
                  This demo shows how your users will experience logging in with{" "}
                  <strong>DID Registry</strong> - one of Fractal&apos;s web3
                  identity solutions. <strong>You will need Görli ETH</strong>{" "}
                  to complete this demo - get some{" "}
                  <a href="https://goerli-faucet.slock.it/">here</a> or{" "}
                  <a href="https://goerlifaucet.com/">here.</a>
                </Text>
              </SubtitleContainer>
            </HeroTitleColumn>
          </HeroRow>
          <HeroRow>
            <SubtitleContainer>
              <Text
                weight={TextWeights.BOLD}
                lineHeight={TextLineHeights.NORMAL}
              >
                1.
                {active
                  ? // <StatusMessage status={statusMessage} />
                    " Your wallet is connected."
                  : " Connect your wallet."}
              </Text>
            </SubtitleContainer>
          </HeroRow>
          <HeroRow>
            <Connect />
          </HeroRow>
          <br />

          <SubtitleContainer>
            {active ? (
              <>
                <HeroRow>
                  <Text
                    weight={TextWeights.BOLD}
                    lineHeight={TextLineHeights.NORMAL}
                  >
                    2. Your wallet address needs to be added to the DID
                    Registry.
                  </Text>
                </HeroRow>
                <HeroRow>
                  <MiniBackoffice />
                </HeroRow>
              </>
            ) : (
              ""
            )}
          </SubtitleContainer>

          <SubtitleContainer>
            {active ? (
              <>
                <HeroRow>
                  <Text
                    weight={TextWeights.BOLD}
                    lineHeight={TextLineHeights.NORMAL}
                  >
                    3. Depending on your wallet status in the DID Registry, you
                    can purchase or not.
                  </Text>
                </HeroRow>
                <HeroRow>
                  <PurchaseEligibility />
                </HeroRow>
              </>
            ) : (
              ""
            )}
          </SubtitleContainer>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  );
}

Hero.propTypes = {};
