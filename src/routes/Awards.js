import React from "react";
import Awards1 from "components/Awards1";
import Awards2 from "components/Awards2";
import Footer from "components/Footer";
import "css/awards.css";

const Awards = () => {
  return (
    <div>
      <div className="awards1">
        <Awards1 />
      </div>
      <div className="awards2">
        <Awards2 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Awards;
