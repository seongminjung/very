import React from "react";
import Navigation from "components/Navigation";
import cobackground from "img/picture/cobackground.png";
import "css/clubofficers1.css";

const ClubOfficers1 = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="co1-hero">
          <img
            className="co1-hero__img"
            src={cobackground}
            alt="cobackground"
          />
          <p className="co1-hero__1">Club Officers</p>
          <p className="co1-hero__2">역대 임원진</p>
          <p className="co1-hero__3">
            VERY의 모든 것들은 임원진의 손에서 시작됩니다.
            <br />
            Club을 위해 이바지한 이들의 헌신을 VERY는 잊지 않겠습니다.
          </p>
        </div>
      </div>
      <div className="co1-stripe">
        <div>
          <p className="co1-stripe__text">현재 VERY 기수</p>
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
        <p className="co1-stripe__number">34</p>
      </div>
    </>
  );
};

export default ClubOfficers1;
