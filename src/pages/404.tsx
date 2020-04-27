import React from 'react';

import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <div>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </div>
  );
};

export default NotFoundPage;
