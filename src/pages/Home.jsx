import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Galery from './sections/Galery';
import More from './sections/More';
import Client from './sections/Client';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <More />
      <Client />
      <Galery />
      <Contact />
    </div>
  );
};

export default Home;
