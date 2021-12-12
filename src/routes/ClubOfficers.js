import React from "react";
import Clubofficers1 from "components/Clubofficers1";
import Clubofficers2 from "components/Clubofficers2";
import Clubofficers3 from "components/Clubofficers3";
import Footer from "components/Footer";
import "css/clubofficers.css";

const Clubofficers = () => {
  return (
    <div>
      <div className="clubofficers1">
        <Clubofficers1 />
      </div>
      <div className="clubofficers2">
        <Clubofficers2 />
      </div>
      <div className="clubofficers3">
        <Clubofficers3 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Clubofficers;
