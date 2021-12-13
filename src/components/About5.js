import React from "react";
import "css/about5.css";
import logoempty from "img/main/logo-empty.png";
import logo1 from "img/main/logo-knowledge.png";
import logo2 from "img/main/logo-network.png";
import logo3 from "img/main/logo-experience.png";
import logofix from "img/main/logo-fix.png";

const About5 = () => {
  return (
    <div className="container">
      <div className="ab5-nav">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="2"
            viewBox="0 0 23 2"
          >
            <line
              id="선_108"
              data-name="선 108"
              x2="23"
              transform="translate(0 1)"
              fill="none"
              stroke="#7c7c7c"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
          <p className="ab5-pagenumber">03.</p>
        </div>
      </div>
      <p className="ab5-title">SYMBOL</p>
      <div className="ab5-images__flex">
        <div className="ab5-images__left">
          <img src={logoempty} alt="logo" />
        </div>
        <div className="ab5-images__right">
          <img src={logofix} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About5;
