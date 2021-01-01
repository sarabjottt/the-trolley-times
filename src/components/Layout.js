import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const navData = useStaticQuery(graphql`
    {
      allContentfulNewsletter(
        sort: { fields: publishDate, order: DESC }
        limit: 1
      ) {
        nodes {
          slug
        }
      }
    }
  `);
  return (
    <>
      <Header data={navData} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
