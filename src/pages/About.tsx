import React from 'react';
import Hero from '../components/about/Hero';
import Mission from '../components/about/Mission';
import Values from '../components/about/Values';
import Team from '../components/about/Team';
import Process from '../components/about/Process';

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <Process />
      <Team />
    </>
  );
}