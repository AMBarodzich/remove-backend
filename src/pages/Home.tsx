import React from 'react';
import { Hero, About, Services } from '../components/Sections';
import Contact from '../components/Contact';

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}
