import React from "react";
import "css/about6.css";
import image1 from "img/logo/로고_가로형_검정.png";
import image2 from "img/logo/로고_가로형_파랑.png";
import image3 from "img/logo/로고_정사각형_그림_검정.png";
import image4 from "img/logo/로고_정사각형_그림_파랑.png";

const About6 = () => {
  return (
    <div className="container">
      <div className="ab6-flex">
        <img src={image1} alt="logo" className="ab6-logo" />
        <img src={image2} alt="logo" className="ab6-logo" />
        <img src={image3} alt="logo" className="ab6-logo" />
        <img src={image4} alt="logo" className="ab6-logo" />
      </div>
    </div>
  );
};

export default About6;
