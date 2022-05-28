import React, { FC } from 'react';
import styled from 'styled-components';

import InstagramFeedImageElement from './InstagramFeedImageElement';
import useInstagramPosts from '../hooks/useInstagramPosts';

const Layout = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(3, 326px);
  grid-auto-rows: 326px;

  @media only screen and (max-width: 780px) and (min-width: 500px) {
    grid-template-columns: repeat(3, 193px);
    grid-auto-rows: 193px;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 128px);
    grid-auto-rows: 128px;
  }

  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(3, 115px);
    grid-auto-rows: 115px;
  }

  @media only screen and (max-width: 1030px) and (min-width: 780px) {
    grid-template-columns: repeat(3, 293px);
    grid-auto-rows: 293px;
  }
  @media only screen and (max-width: 1030px) {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
`;

const MainSection: FC = () => {
  const { posts, isLoading } = useInstagramPosts();

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      {posts?.map(post => (
        <InstagramFeedImageElement
          key={post.id}
          permalink={post.permalink}
          mediaUrl={post.media_url}
          thumbnailUrl={post.thumbnail_url}
          mediaType={post.media_type}
        />
      ))}
    </Layout>
  );
};

export default MainSection;
