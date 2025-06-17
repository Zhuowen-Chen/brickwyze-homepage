import React from 'react';
import backgroundImg from '../assets/images/Background.jpg'; // 推荐方式

const Hero = () => {
  return (
    <section className="hero">
      <h1>Land Your Biz Where It Pops.</h1>
      <h2>Real data. Real blocks. Real results.</h2>

      <img src={backgroundImg} alt="ManhattanBusinessBackgroundImage" className="hero-background" />

      <button 
        className="map-button" 
        onClick={() => { /* 后续添加跳转逻辑 */ }}
        >

        Hit the Map
      </button>
    </section>
  );
};

export default Hero;