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
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
