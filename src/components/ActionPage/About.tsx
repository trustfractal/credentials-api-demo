import * as React from "react";
import styled from "styled-components";

import { Button, Subtitle, Text, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";

const AboutSection = styled.section``;
const AboutContainer = styled.div`
  margin-bottom: 20px;

  @media(min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const TextContainer = styled.div`
  margin-bottom: 24px;

  @media(min-width: 768px) {
    margin-bottom: 50px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media(min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default function About() {
  return (
    <AboutSection>
      <TopComponent>
        <AboutContainer>
          <TitleContainer>
            <Subtitle>About Defistarter</Subtitle>
          </TitleContainer>
          <TextContainer>
            <Text size={TextSizes.MEDIUM}>
              Defistarter is a fully functional ecosystem built to enable
              projects to raise capital on a decentralized environment and
              connect investors with promising projects from their earliest
              stages
            </Text>
          </TextContainer>
          <ButtonContainer>
            <Button>
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Learn more
              </Text>
            </Button>
          </ButtonContainer>
        </AboutContainer>
      </TopComponent>
    </AboutSection>
  );
}

About.propTypes = {};
