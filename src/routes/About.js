import React from "react";
import About1 from "components/About1";
import About2 from "components/About2";
import About3 from "components/About3";
import About4 from "components/About4";
import About5 from "components/About5";
import Footer from "components/Footer";
import "css/about.css";

const About = () => {
  return (
    <div>
      <div className="about1">
        <About1 />
      </div>
      <div className="about2">
        <About2 />
      </div>
      <div className="about3">
        <About3 />
      </div>
      <div className="about4">
        <About4 />
      </div>
      <div className="about5">
        <About5 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
