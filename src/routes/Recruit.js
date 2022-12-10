import React from "react";
import Recruit1 from "components/Recruit1";
import Recruit2 from "components/Recruit2";
import Recruit4 from "components/Recruit4";
import Recruit5 from "components/Recruit5";
import Footer from "components/Footer";
import "css/recruit.css";

const Recruit = () => {
  return (
    <div>
      <div className="recruit1">
        <Recruit1 />
      </div>
      <div className="recruit2">
        <Recruit2 />
      </div>
      <div className="recruit4">
        <Recruit4 />
      </div>
      <div className="recruit5">
        <Recruit5 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Recruit;
