import React from "react";
import styled from "styled-components";

import { Button, Text, Title, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";

import HeroDots from "../../assets/images/hero_dots.svg";

const HeroSection = styled.section`
  height: calc(100vh - 76px);
  display: flex;

  @media(min-width: 768px) {
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
    width: 50%;
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

const TitleContainer = styled.div`
  margin-bottom: 29px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    display: block;
  }
`;

const MainButtonContainer = styled.div`
  margin-bottom: 30px;
  
  @media(min-width: 768px) {
    margin-bottom: 15px;
  } 
`;

const SecundaryButtonContainer = styled.div`
  margin-bottom: 22px;
`;

const Label = styled.div`
  min-width: 250px;
  padding: 0 10px;
  background-color: var(--c-orange);
  color: var(--c-white);
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  @media(min-width: 768px) {
    padding: 0;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroDotsContainer>
        <HeroDots />
      </HeroDotsContainer>
      <TopComponent>
        <HeroContainer>
          <TitleContainer>
            <Title>Cross-chain crowdfunding platform</Title>
          </TitleContainer>
          <ButtonsContainer>
            <MainButtonContainer>
              <Label>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Welcome
                </Text>
              </Label>
            </MainButtonContainer>
            <SecundaryButtonContainer>
              <Button>
                <Text size={TextSizes.EXTRA_SMALL}>
                  Logout
                </Text>
              </Button>
            </SecundaryButtonContainer>
          </ButtonsContainer>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  );
}

Hero.propTypes = {};
