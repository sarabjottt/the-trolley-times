import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, meta, title, keywords }) {
  const metaDescription =
    description ||
    'Newsletter dedicated to farmers protest. Reporting from the protest, and for the protest.';

  const metaKeyword =
    keywords || 'Trolley, Times, Newspapper, Farmers, Protest, 2020';

  return (
    <Helmet
      title={title}
      titleTemplate="%s | The Trolley Times"
      defaultTitle="The Trolley Times"
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeyword,
        },
      ].concat(meta)}
    />
  );
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
export default SEO;
