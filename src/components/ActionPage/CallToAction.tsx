import * as React from "react";
import styled from "styled-components";

import { Button, Input, Subtitle, Text, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";

const CallToActionSection = styled.section``;
const CallToActionContainer = styled.div`
  margin-bottom: 146px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 86px;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 67px;
  }
`;

export default function CallToAction() {
  return (
    <CallToActionSection>
      <TopComponent>
        <CallToActionContainer>
          <TitleContainer>
            <Subtitle>Stay updated to the latest news</Subtitle>
          </TitleContainer>
          <ActionsContainer>
            <Input type="email" placeholder="Enter your email address here" />
            <ButtonContainer>
              <Button height="50px">
                <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                  Sign Up
                </Text>
              </Button>
            </ButtonContainer>
          </ActionsContainer>
        </CallToActionContainer>
      </TopComponent>
    </CallToActionSection>
  );
}
