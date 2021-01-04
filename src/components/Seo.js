import React from 'react';
import { Helmet } from 'react-helmet';
import ogImage from '../assets/images/og-image.jpg';

function SEO({ description, lang, meta, title, image, keywords }) {
  const metaDescription =
    description ||
    'Newsletter dedicated to farmers protest. Reporting from the protest, and for the protest.';

  const metaKeyword =
    keywords || 'Trolley, Times, Newspapper, Farmers, Protest, 2020';

  const metaImage = image || ogImage;
  const mTitle = title ? `${title} | The Trolley Times` : 'The Trolley Times';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={mTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: mTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
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
          content: mTitle,
        },
        {
          name: `twitter:title`,
          content: mTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: metaImage,
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
