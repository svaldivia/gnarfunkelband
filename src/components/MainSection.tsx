import React, { RefObject, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import SocialIcons from './SocialIcons';

const Layout = styled.div<{ ref: RefObject<HTMLDivElement> }>`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url('/images/landing-background.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 780px) {
    display: grid;
    align-items: center;
    grid-template-rows: 1fr min-content;
  }
`;

const SocialIconsWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  @media only screen and (max-width: 780px) {
    position: initial;
  }
`;

const BandImgLayout = styled.div`
  aspect-ratio: 5/7;

  @media only screen and (max-width: 780px) {
    width: 100vw;
    max-width: 500px;
  }

  @supports not (aspect-ratio: 5 / 7) {
    width: 700px;
  }
`;

const MainSection = () => {
  const imageData = useStaticQuery(getImages);
  const mainSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Layout ref={mainSectionRef}>
      <BandImgLayout>
        <Img fluid={imageData.bandLandingImage.childImageSharp.fluid} />
      </BandImgLayout>
      <SocialIconsWrapper>
        <SocialIcons />
      </SocialIconsWrapper>
    </Layout>
  );
};

export default MainSection;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const getImages = graphql`
  query {
    bandLandingImage: file(relativePath: { eq: "images/band-landing.png" }) {
      ...fluidImage
    }
  }
`;
