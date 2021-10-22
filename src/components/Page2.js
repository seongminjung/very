import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/page2.css";
import subpagenumbar from "img/main/subpagenumbar-white.png";
import videoimg from "img/main/img2.png";
import page2detail from "img/main/page2detail.png";

const Page2 = () => {
  return (
    <div className="page-wrapper">
      <div className="nav">
        <div>
          <img src={subpagenumbar} alt="bar" />
          <p className="p2-pagenumber">02.</p>
        </div>
        <FontAwesomeIcon icon="bars" className="nav-menu" />
      </div>
      <p className="p2-title">About Us</p>
      <div className="p2-flex">
        <div className="p2-video">
          <img src={videoimg} alt="videoimg" />
        </div>
        <div className="p2-text">
          <div className="p2-hashtag">
            <p># 팀프로젝트</p>
            <p># 실전 창업 경험</p>
            <p># 성장의 발판</p>
          </div>
          <p className="p2-detail">
            VERY는 1997년 창립된 동아리로 교수님들과 중소기업진흥청의 지원을
            받아 제1공학관 A119호에서 시작되었습니다. 매주 정기 세션과 팀
            프로젝트를 통해 실전 창업 경험을 제공하고 창업가로 성장하실 여러분의
            발판을 마련해 드리는 것이 과거로부터 지금까지 이어져 온 VERY의
            목표입니다.
          </p>
          <img
            className="p2-detail__img"
            src={page2detail}
            alt="page2 detail"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
