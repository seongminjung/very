import React from "react";
import "css/recruit2.css";

const Recruit2 = () => {
  return (
    <div className="container r2-relative">
      <div className="r2-nav">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="2"
            viewBox="0 0 23 2"
          >
            <line
              id="선_119"
              data-name="선 119"
              x2="23"
              transform="translate(0 1)"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
          <p className="r2-pagenumber">01.</p>
        </div>
      </div>
      <div className="r2-hashtag">
        <p># 협동과 협업 능력</p>
        <p># 창의적인 문제해결</p>
        <p># 성취에 대한 갈망</p>
        <p># 넘치는 호기심</p>
      </div>
      <div className="r2-flex">
        <p className="r2-title">
          We’re
          <br />
          looking for <br />
          people
          <br /> who:
        </p>
        <p className="r2-detail">But most of all...</p>
      </div>
      <p className="r2-hero"># Passion for the Business</p>
    </div>
  );
};

export default Recruit2;
