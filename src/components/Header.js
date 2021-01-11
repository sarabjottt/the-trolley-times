import React from 'react';
import { Link } from 'gatsby';
import Weather from './Weather';

export default function Header({ data }) {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <header>
      <section className="master-bar">
        <Link className="site-name" to="/">
          <h1 className="grmk">ਟਰਾਲੀ ਟਾਇਮਜ਼</h1>
          <h2>Trolley Times</h2>
        </Link>
      </section>
      <section className="today">
        <p>{new Date().toLocaleDateString('en-IN', dateOptions)}</p>
        <p>Farmers Protest</p>
      </section>
      <section className="weather">
        <Weather />
      </section>
      <section className="master-nav">
        <nav>
          <ul>
            <li>
              <Link
                activeClassName="active"
                to={`/${data.allContentfulNewsletter.nodes[0].slug}`}
              >
                Latest Edition
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/">
                All Editions
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
