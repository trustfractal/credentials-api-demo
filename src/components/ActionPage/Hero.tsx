import React, { useState } from "react";
import styled from "styled-components";

import { Text, Title, TopComponent } from "../ui";
import { TextWeights } from "../ui/Text";

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
    margin-bottom: 50px;
  }
`;

const HeroTitleColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
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
  margin-bottom: 29px;
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
              <TitleContainer>
                <Title>Experience the easiest web3 KYC flow with Fractal</Title>
              </TitleContainer>
              <SubtitleContainer>
                <Text>
                  Existing Fractal users (we have 1M and counting) can be
                  onboarded instantly
                </Text>
              </SubtitleContainer>
              <SubtitleContainer>
                {active ? (
                  <StatusMessage status={statusMessage} />
                ) : (
                  <Text weight={TextWeights.BOLD}>
                    Connect your wallet to get started!
                  </Text>
                )}
              </SubtitleContainer>
            </HeroTitleColumn>
            <Connect />
          </HeroRow>
          <HeroRow>
            <MiniBackoffice setCredentialResponse={setCredentialResponse} />
            <Transact
              credentialResponse={credentialResponse}
              setStatusMessage={setStatusMessage}
            />
          </HeroRow>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  );
}

Hero.propTypes = {};
