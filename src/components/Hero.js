import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <p>
        Green Sea
        <br />
        Gdańsk
      </p>
      <span>Zamieszkaj w nowoczesnym mieszkaniu blisko morza</span>
    </div>
  );
}

export default Hero;
