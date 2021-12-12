import React from "react";
import Companies1 from "components/Companies1";
import Companies2 from "components/Companies2";
import Footer from "components/Footer";
import "css/companies.css";

const Companies = () => {
  return (
    <div>
      <div className="companies1">
        <Companies1 />
      </div>
      <div className="companies2">
        <Companies2 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Companies;
