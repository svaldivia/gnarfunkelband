import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const socialNetworkData = [
  {
    url: 'https://www.facebook.com/gnarfunkelband/',
    name: 'facebook',
  },
  {
    url: 'https://www.instagram.com/gnarfunkelband/',
    name: 'instagram',
  },
  {
    url: 'https://open.spotify.com/artist/2mwAEuKKSnlOQouag2TUe5?si=GvAb4WlaQd60MaN1HJvzyQ',
    name: 'spotify',
  },
  {
    url: 'https://www.tiktok.com/@gnarfunkelband?',
    name: 'tiktok',
  },
  {
    url: 'https://youtube.com/channel/UCgLC96DuNoKz23AX2bGchvw',
    name: 'youtube',
  },
];

const SocialIcon = styled.a`
  color: #ffffff;
  /* Removes underline */
  background-image: none;
  transition: 0.2s color ease-out;

  &:hover {
    color: #dbdbdb;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  padding: 15px 15px;
  box-sizing: border-box;

  @media only screen and (max-width: 780px) {
    grid-template-columns: auto auto auto auto auto;
    justify-items: center;
  }
`;

const SocialIcons = () => (
  <Layout>
    {socialNetworkData.map(({ url, name }) => (
      <SocialIcon key={name} href={url} target="_blank">
        <Icon icon={name} size="50px" />
      </SocialIcon>
    ))}
  </Layout>
);

export default SocialIcons;
