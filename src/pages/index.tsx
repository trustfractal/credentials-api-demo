import React from "react";
import styled from "styled-components";

import { Layout } from "../components/ui";
import About from "../components/ActionPage/About";
import CallToAction from "../components/ActionPage/CallToAction";
import Footer from "../components/ActionPage/Footer";
import Hero from "../components/ActionPage/Hero";
import Header from "../components/ActionPage/Header";
import News from "../components/ActionPage/News";
import Socials from "../components/ActionPage/Socials";

const HeroContainer = styled.section`
  background: linear-gradient(
    0deg,
    rgba(209, 151, 255, 0.13),
    rgba(209, 151, 255, 0.13)
  );

  @media (min-width: 768px) {
    border-radius: 0% 100% 100% 0% / 100% 0% 100% 0%;
  }
`;

const IndexPage = () => (
  <Layout>
    <HeroContainer>
      <Header />
      <Hero />
    </HeroContainer>
    <About />
    <Socials />
    <News />
    <CallToAction />
    <Footer />
  </Layout>
);

export default IndexPage;
