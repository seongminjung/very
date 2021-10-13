import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import "css/home.css";

const Home = () => {
  return (
    <div>
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
        scrollingSpeed={1000} /* Options here */
        verticalCentered={false}
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section page1">
                <Page1 />
              </div>
              <div className="section page2">
                <Page2 />
              </div>
              <div className="section page3">
                <Page3 />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Home;
