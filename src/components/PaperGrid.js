import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

export default function PaperGrid({ data }) {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <section>
      <ul className="paper-grid">
        {data.allContentfulNewsletter.edges.map(({ node }) => (
          <li key={node.slug}>
            <Link to={node.slug}>
              <article>
                <Image
                  placeholderStyle={{ filter: 'blur(10px)' }}
                  style={{ height: '350px' }}
                  fluid={node.coverImage.fluid}
                />
                <div className="meta">
                  <h1>{node.title}</h1>
                  <p className="date">
                    {new Date(node.publishDate).toLocaleDateString(
                      'en-IN',
                      dateOptions
                    )}
                  </p>
                  <p>
                    Available in <span>Punjabi</span>
                    <span>Hindi</span>
                    {node.haveEnglishEdition && <span>English</span>}
                  </p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
