import * as React from "react";
import styled from "styled-components";

import { Button, Subtitle, Text, TopComponent } from "../ui";
import { IconNames } from "../ui/Icon";
import { TextSizes, TextWeights } from "../ui/Text";

const SocialsSection = styled.section``;
const SocialsContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
    text-align: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    button {
      height: 60px;
    }
  }
`;

export default function Socials() {
  return (
    <SocialsSection>
      <TopComponent>
        <SocialsContainer>
          <TitleContainer>
            <Subtitle>We are a global community</Subtitle>
          </TitleContainer>
          <TextContainer>
            <Text size={TextSizes.NORMAL}>
              Learn more about us, talk with others in the community and
              participate in creating the future
            </Text>
          </TextContainer>
          <ButtonsContainer>
            <ButtonContainer>
              <Button leftIcon={IconNames.TELEGRAM}>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Telegram
                </Text>
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button leftIcon={IconNames.TWITTER}>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Twitter
                </Text>
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button leftIcon={IconNames.DISCORD}>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Discord
                </Text>
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button leftIcon={IconNames.REDDIT}>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Reddit
                </Text>
              </Button>
            </ButtonContainer>
          </ButtonsContainer>
        </SocialsContainer>
      </TopComponent>
    </SocialsSection>
  );
}
