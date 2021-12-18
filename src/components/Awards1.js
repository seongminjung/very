import React from "react";
import Navigation from "components/Navigation";
import abackground from "img/picture/abackground.png";
import "css/awards1.css";

const Awards1 = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="a1-hero">
          <img className="a1-hero__img" src={abackground} alt="abackground" />
          <p className="a1-hero__1">Awards</p>
          <p className="a1-hero__2">공모전 입상</p>
          <p className="a1-hero__3">
            VERY는 다양한 무대의 주역에 자리해 왔습니다.
            <br />
            회원들의 빛났던 순간들을 이 자리에서 공개합니다.
          </p>
        </div>
      </div>
      <div className="a1-stripe">
        <div>
          <p className="a1-stripe__text">공모전 입상 수</p>
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
        <p className="a1-stripe__number">106</p>
      </div>
    </>
  );
};

export default Awards1;
