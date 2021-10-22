import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Al1 from "components/Al1";
import Al2 from "components/Al2";
import Footer from "components/Footer";
import "css/alumni.css";

const Alumni = () => {
  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
      scrollingSpeed={1000} /* Options here */
      verticalCentered={false}
      navigation={true}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section al1">
              <Al1 />
            </div>
            <div className="section al2">
              <Al2 />
            </div>
            <div className="section footer fp-auto-height">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Alumni;
