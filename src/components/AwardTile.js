import React from "react";
import ablockbackground from "img/picture/ablockbackground.png";

const AwardTile = ({ award }) => {
  return (
    <div className="a2-result__award" key={award.createdAt}>
      <div className="a2-result__logo-background">
        <img
          className="a2-result__logo"
          src={ablockbackground}
          alt="ablockbackground"
        />
        <p className="a2-result__logo-text">
          15기 김둘리
          <br />
          16기 김또치
          <br />
          <br />
          축하드립니다!
        </p>
      </div>
      <div className="a2-result__text-background">
        <div className="a2-result__award-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_257"
              data-name="사각형 257"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <p className="a2-result__award-teamname">{award.teamname}</p>
        <p className="a2-result__award-detail">
          일시: {award.createdAt}
          <br />
          대회명: {award.contestname}
          <br />
          상금액: {award.prizemoney}
          <br />
          수상: {award.prizetype}
          <br />
          인원: {award.participants}
        </p>
      </div>
    </div>
  );
};

export default AwardTile;
