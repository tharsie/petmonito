import React from 'react';
import header_img from '../../Assets/header.png'; // Background image

import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${header_img})` }}>
      <Navbar />
      <Hero/>
    </header>
  );
};
