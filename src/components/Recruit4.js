import React from "react";
import "css/recruit4.css";
import dooropen from "img/asset/door-open.png";

const Recruit4 = () => {
  return (
    <div className="container">
      <p className="r4-title">Apply</p>
      <div className="r4-door">
        <img src={dooropen} alt="dooropen" />
        <div className="r4-clickhere">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.138"
            height="10.46"
            viewBox="0 0 30.138 10.46"
          >
            <path
              id="패스_164"
              data-name="패스 164"
              d="M-5665.667,2625.42l9.629,8.538v-29.027"
              transform="translate(2635.07 5665.998) rotate(90)"
              fill="#fff"
              stroke="#000"
              strokeWidth="1"
            />
          </svg>
          <p>Click here</p>
        </div>
      </div>
      <p className="r4-detail">VERY 35기 모집중입니다.</p>
    </div>
  );
};

export default Recruit4;
