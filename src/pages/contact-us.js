import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function ContactUs() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <section className="contact">
        <h1>Contact Us</h1>
        <h3>Email Submisions:</h3>
        <a href="mailto:timestrolley@gmail.com">timestrolley@gmail.com</a>
        <h3>Twitter:</h3>
        <a href="http://twitter.com/timestrolley">@timestrolley</a>
      </section>
    </Layout>
  );
}
