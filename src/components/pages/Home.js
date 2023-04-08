import React from "react";
import "../../App.css";
import Hero from "../Hero";
// import Cards from "../Cards";
import Footer from "../Footer";
import '../Cards.css'

function Home() {
  return (
    <>
      <Hero />
      <div className="mobile">
        <div className="mobile-container">
          <a href="apartment">
            <img src="/images/apartament1.jpg" alt="apartment"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="beach">
            <img src="/images/beach1.jpg" alt="beach"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="attractions">
            <img src="/images/atrakcje1.jpg" alt="attractions"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="gallery">
            <img src="/images/beach2.jpg" alt="gallery"></img>
          </a>
        </div>
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
