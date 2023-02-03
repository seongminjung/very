import React from "react";
import Alumni1 from "components/Alumni1";
import Alumni2 from "components/Alumni2";
import Footer from "components/Footer";
import "css/alumni.css";

const Alumni = () => {
  return (
    <div>
      <div className="alumni1">
        <Alumni1 />
      </div>
      <div className="alumni2">
        <Alumni2 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Alumni;
