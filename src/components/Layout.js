import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const navData = useStaticQuery(graphql`
    {
      contentfulNewsletter {
        slug
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
