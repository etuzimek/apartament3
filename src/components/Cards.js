import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="mobile">
        <div className="mobile-container">
          <Link to="/apartment">
            <img src="/images/apartament1.jpg" alt="apartment"></img>
          </Link>
        </div>
        <div className="mobile-container">
          <Link to="/beach">
            <img src="/images/beach1.jpg" alt="beach"></img>
          </Link>
        </div>
        <div className="mobile-container">
          <Link to="/attractions">
            <img src="/images/atrakcje1.jpg" alt="attractions"></img>
          </Link>
        </div>
        <div className="mobile-container">
          <Link to="/gallery">
            <img src="/images/beach2.jpg" alt="gallery"></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
