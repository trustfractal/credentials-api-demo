import * as React from "react";
import styled from "styled-components";

import { Image, Subtitle, Text, TopComponent } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";
import { ImageNames } from "../ui/Image";

const NewsSection = styled.section``;
const NewsContainer = styled.div`
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

const CardsContainer = styled.div`
  display: grid;
  overflow-x: scroll;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  grid-column-gap: 18px;
  grid-row-gap: 22px;
`;

const ImageContainer = styled.div`
  margin-bottom: 17px;
`;

const LabelContainer = styled.div``;

const DescriptionContainer = styled.div``;

const Link = styled.a`
  text-decoration: none;
  color: var(--c-black);

  :hover {
    color: var(--c-pink);
  }
`;

export default function News() {
  return (
    <NewsSection>
      <TopComponent>
        <NewsContainer>
          <TitleContainer>
            <Subtitle>In the news</Subtitle>
          </TitleContainer>
          <CardsContainer>
            <>
              <ImageContainer>
                <Image name={ImageNames.EXPLORING_BLOCKCHAIN} />
              </ImageContainer>
              <ImageContainer>
                <Image name={ImageNames.BLOCKCHAIN_INDUSTRY} />
              </ImageContainer>
              <ImageContainer>
                <Image name={ImageNames.CRYPTO_TODAY} />
              </ImageContainer>
            </>

            <>
              <LabelContainer>
                <Link href="#">
                  <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                    Exploring blockchain technology
                  </Text>
                </Link>
              </LabelContainer>
              <LabelContainer>
                <Link href="#">
                  <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                    Blockchain Industry News
                  </Text>
                </Link>
              </LabelContainer>
              <LabelContainer>
                <Link href="#">
                  <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                    Crypto world today
                  </Text>
                </Link>
              </LabelContainer>
            </>

            <>
              <DescriptionContainer>
                <Text size={TextSizes.SMALL}>
                  This article will discuss the critical terminologies of
                  blockchain technology
                </Text>
              </DescriptionContainer>
              <DescriptionContainer>
                <Text size={TextSizes.SMALL}>
                  Stay tuned to blockchain news, industry analysis and in-depth
                  articles
                </Text>
              </DescriptionContainer>
              <DescriptionContainer>
                <Text size={TextSizes.SMALL}>
                  Latest cryptocurrency news, updates, values, price
                  predictions, and more
                </Text>
              </DescriptionContainer>
            </>
          </CardsContainer>
        </NewsContainer>
      </TopComponent>
    </NewsSection>
  );
}
