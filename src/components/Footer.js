import { Link } from 'gatsby';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section>
        <p>© {new Date().getFullYear()} The Trolley Times</p>
        <nav>
          <ul>
            <li>
              <Link activeClassName="active" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
