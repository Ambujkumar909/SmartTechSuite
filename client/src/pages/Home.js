import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import SolutionsSection from '../components/SolutionsSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductSection />
      <SolutionsSection />
    </main>
  );
};

export default Home;