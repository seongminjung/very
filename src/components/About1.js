import React from "react";
import Navigation from "components/Navigation";
import "css/about1.css";

const About1 = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <p className="ab1-title">- About VERY -</p>
      </div>
      <div className="ab1-stripe">
        <div>
          <p className="ab1-stripe__text">창립 연도</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_318"
              data-name="사각형 318"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <p className="ab1-stripe__number">1997</p>
      </div>
    </>
  );
};

export default About1;
