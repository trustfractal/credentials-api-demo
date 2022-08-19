import * as React from "react";
import styled from "styled-components";

import { Button, Subtitle, Text, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";
import { DOCS_URL } from "../../lib/config";

const AboutSection = styled.section``;
const AboutContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const TextContainer = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default function About() {
  return (
    <AboutSection>
      <TopComponent>
        <AboutContainer>
          <TitleContainer>
            <Subtitle>About this demo</Subtitle>
          </TitleContainer>
          <TextContainer>
            <Text size={TextSizes.NORMAL}>
              This page is the frontend to a dApp that requires KYC. Normally
              you wouldn’t even see the “Make transaction” button until you’re
              KYC-approved, but we’re showing it already so you can test that it
              only succeeds if you’re approved. It’s connected to a smart
              contract that needs to verify your approval before proceeding.
            </Text>
          </TextContainer>
          <ButtonContainer>
            <Button href={DOCS_URL} target="_blank" rel="noreferrer">
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Developer documentation
              </Text>
            </Button>
          </ButtonContainer>
        </AboutContainer>
      </TopComponent>
    </AboutSection>
  );
}

About.propTypes = {};
