import React from "react";
import Alumni1 from "components/Alumni1";
import Alumni2 from "components/Alumni2";
import Footer from "components/Footer";
import "css/alumni.css";

const Alumni = () => {
  return (
    <div>
      <div className="section al1">
        <Alumni1 />
      </div>
      <div className="section al2">
        <alumni2 />
      </div>
      <div className="section footer fp-auto-height">
        <Footer />
      </div>
    </div>
  );
};

export default Alumni;
