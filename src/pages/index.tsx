/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MainSection from '../components/MainSection';
import InstagramFeed from '../components/InstagramFeed';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 780px) {
    padding: 0 10px;
  }
`;

const Footer = styled.div`
  border-top: #2b2b2b 1px solid;
  margin-top: 24px;
  width: 100%;
  padding: 24px 0;
  text-align: center;
  font-size: 12px;
`;

const SectionTitle = styled.h1`
  padding-bottom: 20px;
  text-align: center;
`;

const MusicLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MusicIframe = styled.iframe`
  @media only screen and (max-width: 780px) {
    width: 100%;
    padding-bottom: 40px;

    &:last-child {
      padding: 0;
    }
  }
`;

const SongkickWidget = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 900px;
  }
`;

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={siteTitle} />
      <MainSection />
      <Content>
        <Section>
          <SectionTitle>Our Music</SectionTitle>
          <MusicLayout>
            {/* <MusicIframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/biw8ToAzRTY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            <MusicIframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/V8sGvsD5g-o"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <MusicIframe
              src="https://open.spotify.com/embed/artist/2mwAEuKKSnlOQouag2TUe5"
              width="560"
              height="315"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </MusicLayout>
        </Section>
        <Section>
          <SectionTitle>See Us Live</SectionTitle>
          <SongkickWidget>
            <a
              className="songkick-widget"
              href="https://www.songkick.com/artists/9888034"
              data-theme="dark"
              data-track-button="on"
              data-detect-style="true"
              data-background-color="transparent"
            />
          </SongkickWidget>
        </Section>
        <Section>
          <SectionTitle>Follow Us On Instagram</SectionTitle>
          <InstagramFeed />
        </Section>
      </Content>
      <Footer> Copyright © Gnarfunkel ~ Website Design by Sebastian Valdivia</Footer>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
