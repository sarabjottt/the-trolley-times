import React from 'react';
import { Link } from 'gatsby';

export default function Header({ data }) {
  return (
    <header>
      <section className="master-bar">
        <Link className="site-name" to="/">
          <h1 className="grmk">ਟਰਾਲੀ ਟਾਇਮਜ਼</h1>
          <h2>Trolley Times</h2>
        </Link>
      </section>
      <section className="master-nav">
        <nav>
          <ul>
            <li>
              <Link to={`/${data.contentfulNewsletter.slug}`}>
                Latest Edition
              </Link>
            </li>
            <li>
              <Link to="/">All Editions</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
