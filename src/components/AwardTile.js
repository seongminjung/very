import React from "react";
import defaultAward from "img/picture/defaultAward.png";

const AwardTile = ({ award }) => {
  return (
    <div className="a2-result__award" key={award.createdAt}>
      <div className="a2-result__logo-background">
        <img
          className="a2-result__logo"
          src={award.imgUrl ? award.imgUrl : defaultAward}
          alt="defaultAward"
        />
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
          일시: {award.year}년 {award.month}월
          <br />
          수상 종류: {award.result}
          <br />
          대회명: {award.contestname}
          <br />
          주최: {award.host}
          <br />
          인원: {award.contestname}
          <br />
          기수: {award.gen}기
        </p>
      </div>
    </div>
  );
};

export default AwardTile;
