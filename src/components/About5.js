import React from "react";
import "css/about5.css";
import image1 from "img/logo/로고_정사각형_문구_검정.png";
import image2 from "img/logo/로고_정사각형_문구_파랑.png";

const About5 = () => {
  return (
    <div className="container ab5-relative">
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
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
          <p className="ab5-pagenumber">03.</p>
        </div>
      </div>
      <p className="ab5-title">Symbol</p>
      <div className="ab5-flex">
        <img src={image1} alt="logo" />
        <img src={image2} alt="logo" />
      </div>
    </div>
  );
};

export default About5;
