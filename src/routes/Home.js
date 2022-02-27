import React from "react";
import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import Page4 from "components/Page4";
import Page5 from "components/Page5";
import Footer from "components/Footer";
import "css/home.css";

const Home = () => {
  return (
    <div>
      <div className="page1">
        <Page1 />
      </div>
      <div className="page2">
        <Page2 />
      </div>
      <div className="page3">
        <Page3 />
      </div>
      <div className="page4">
        <Page4 />
      </div>
      <div className="page5">
        <Page5 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
