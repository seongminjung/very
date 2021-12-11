import React from "react";
import About1 from "components/About1";
import About2 from "components/About2";
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
