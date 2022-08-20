import * as React from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type RootContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  clickable?: boolean;
};
const RootContainer = styled.div<RootContainerProps>`
  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export const ImageNames = {
  BLOCKCHAIN_INDUSTRY: "blockchain_industry",
  CRYPTO_TODAY: "crypto_today",
  EXPLORING_BLOCKCHAIN: "exploring_blockchain",
} as const;

type ImageProps = RootContainerProps & {
  name: typeof ImageNames[keyof typeof ImageNames];
};
export default function Image(props: ImageProps) {
  const { name, clickable, onClick } = props;

  const data = useStaticQuery(
    graphql`
      query {
        blockchain_industry: file(
          relativePath: { eq: "blockchain_industry.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        crypto_today: file(relativePath: { eq: "crypto_today.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        exploring_blockchain: file(
          relativePath: { eq: "exploring_blockchain.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    `
  );

  const image = getImage(data[name]);

  if (image === undefined) {
    throw new Error(`Unknown image: ${name}`);
  }

  return (
    <RootContainer clickable={clickable} onClick={onClick}>
      <GatsbyImage image={image} alt={name} />
    </RootContainer>
  );
}
