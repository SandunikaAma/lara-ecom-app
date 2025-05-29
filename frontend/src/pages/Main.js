import React from "react";
import '../App.css';
import hero1 from "../components/assets/hero1.jpeg";
import hero2 from "../components/assets/hero2.jpeg";
import promoVideo from "../components/assets/promo3.mp4";

function MainPage() {
  return (
    <div className="main-page">
     
      <section className="hero-section">
        <img src={hero1} alt="Lara Fashion Banner" className="hero-img" />
      </section>

      
      <section className="video-section">
        <video className="background-video" muted autoPlay  loop playsInline>
          <source src={promoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Express Your Style</h1>
        </div>
      </section>

      
      <section className="hero-section">
        <img src={hero2} alt="New Collection" className="hero-img" />
      </section>
    </div>
  );
}

export default MainPage;
