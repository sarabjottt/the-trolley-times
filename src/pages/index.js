import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PaperGrid from '../components/PaperGrid';
import Seo from '../components/Seo';

export default function Index({ data }) {
  return (
    <Layout>
      <Seo title="" />
      <PaperGrid data={data} />
    </Layout>
  );
}
export const query = graphql`
  {
    allContentfulNewsletter(sort: { fields: publishDate, order: DESC }) {
      totalCount
      edges {
        node {
          title
          slug
          publishDate
          haveEnglishEdition
          coverImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
