import React, { useState } from "react";
import styled from "styled-components";

import { Text, Title, TopComponent } from "../ui";
import { TextLineHeights, TextWeights } from "../ui/Text";

import useWeb3 from "../../hooks/web3";
import Connect from "./Connect";
import StatusMessage from "./StatusMessage";
import MiniBackoffice from "./MiniBackoffice";
import Transact from "./Transact";

import { CredentialResponse } from "../../lib/api";
import { StatusMessage as StatusMessageT } from "../../lib/utils";

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
    margin-bottom: 1em;
  }
`;

const HeroTitleColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    // width: 50%;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 29px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
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
  const [credentialResponse, setCredentialResponse] = useState<
    CredentialResponse | undefined
  >(undefined);
  const [statusMessage, setStatusMessage] = useState<StatusMessageT>({
    status: "NO_MESSAGE",
  });

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
                <Text size="20px" lineHeight="25px">
                  This demo shows how your users will experience logging in with{" "}
                  <b>DID Registry</b> - one of Fractal&apos;s web3 identity
                  solutions.
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
                1. First, connect your wallet.
                {active ? (
                  <StatusMessage status={statusMessage} />
                ) : (
                  "  Your wallet is not connected."
                )}
              </Text>
            </SubtitleContainer>
          </HeroRow>
          <HeroRow>
            <Connect />
          </HeroRow>
          <HeroRow>
            <SubtitleContainer>
              {active ? (
                <Text
                  weight={TextWeights.BOLD}
                  lineHeight={TextLineHeights.NORMAL}
                >
                  2. Next, we need to make sure your wallet address is added to
                  the DID Registry.
                  <>
                    <MiniBackoffice
                      setCredentialResponse={setCredentialResponse}
                    />
                  </>
                </Text>
              ) : (
                ""
              )}
            </SubtitleContainer>
          </HeroRow>
          <HeroRow>
            <SubtitleContainer>
              {active ? (
                <Text
                  weight={TextWeights.BOLD}
                  lineHeight={TextLineHeights.NORMAL}
                >
                  3. Depending on your wallet status in the DID Registry, you can purchase or not.
                  <>
                    <Transact
                      credentialResponse={credentialResponse}
                      setStatusMessage={setStatusMessage}
                    />
                  </>
                </Text>
              ) : (
                ""
              )}
            </SubtitleContainer>
          </HeroRow>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  );
}

Hero.propTypes = {};
