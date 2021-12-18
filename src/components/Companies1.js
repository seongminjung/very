import React from "react";
import Navigation from "components/Navigation";
import cbackground from "img/picture/cbackground.png";
import "css/companies1.css";

const Companies1 = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="c1-hero">
          <img className="c1-hero__img" src={cbackground} alt="cbackground" />
          <p className="c1-hero__1">Companies</p>
          <p className="c1-hero__2">동문기업</p>
          <p className="c1-hero__3">
            VERY는 주목할 만한 기업들의 시작점이었습니다.
            <br />
            창업의 최전선에 있는 자랑스러운 VERY의 동문 기업을 소개합니다.
          </p>
        </div>
      </div>
      <div className="c1-stripe">
        <div>
          <p className="c1-stripe__text">알럼나이 기업 수</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_318"
              data-name="사각형 318"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <p className="c1-stripe__number">36</p>
      </div>
    </>
  );
};

export default Companies1;
