import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found : 404" />
    <div style={{ margin: '100px 0' }}>
      <h1>Page Not Found : 404</h1>
      <p>
        The page you are looking for does not exist or could be under
        maintenance.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
