import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Newsletter({
  data: { contentfulNewsletter: paper },
  pageContext,
}) {
  const [isPunjabi, setIsPunjabi] = useState(true);

  return (
    <Layout>
      <Seo title={paper.title} />
      <article className="nwslt-wrapper">
        <section className="edition-meta">
          <p className="pub-date">
            {new Date(paper.publishDate).toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h3 className="nsltr-title">
            {paper.title}
            {isPunjabi ? ' - Punjabi/Hindi' : ' - English'}
          </h3>
          <button
            disabled={!paper.haveEnglishEdition}
            type="button"
            onClick={() => setIsPunjabi(!isPunjabi)}
          >
            {isPunjabi ? 'English' : 'Punjabi'} Edition
            <span>{!paper.haveEnglishEdition && ' - not available'}</span>
          </button>
        </section>
        {isPunjabi ? (
          <iframe
            title={paper.title}
            width="80%"
            src={paper.newsletter.file.url}
            frameBorder="0"
          />
        ) : (
          <iframe
            title={paper.title}
            width="80%"
            src={paper.englishEdition.file.url}
            frameBorder="0"
          />
        )}
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn download"
            href={
              isPunjabi
                ? `https:${paper.newsletter.file.url}`
                : `https:${paper.englishEdition.file.url}`
            }
          >
            Download {isPunjabi ? 'Punjabi' : 'English'} PDF
          </a>
        </section>
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String) {
    contentfulNewsletter(slug: { eq: $slug }) {
      slug
      title
      publishDate
      haveEnglishEdition
      englishEdition {
        file {
          url
        }
      }
      newsletter {
        title
        file {
          fileName
          url
        }
      }
    }
  }
`;
