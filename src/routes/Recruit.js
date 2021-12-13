import React from "react";
import Recruit1 from "components/Recruit1";
import Footer from "components/Footer";
import "css/recruit.css";

const Recruit = () => {
  return (
    <div>
      <div className="recruit1">
        <Recruit1 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Recruit;
