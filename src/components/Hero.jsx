// src/components/Hero.jsx
import React from 'react';
import '../assets/images/Background .jpg'; // 根据实际路径调整

const Hero = () => {
  return (
    <section className="hero">
      <h1>Land Your Biz Where It Pops.</h1>
      <h2>Real data. Real blocks. Real results.</h2>
      <img src={require('../assets/images/map.png')} alt="HR Life Map" />
    </section>
  );
};

export default Hero;