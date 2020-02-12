import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/Hero';
import Sites from '../components/Sites';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Sites />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
