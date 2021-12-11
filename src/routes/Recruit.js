import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import subpagenumbar from "img/main/subpagenumbar-white.png";
import videoimg from "img/main/img2.png";
import page2detail from "img/main/page2detail.png";

const Recruit = () => {
  return (
    <div className="container">
      <p className="p2-detail">
        VERY는 1997년 창립된 동아리로 교수님들과 중소기업진흥청의 지원을 받아
        제1공학관 A119호에서 시작되었습니다. 매주 정기 세션과 팀 프로젝트를 통해
        실전 창업 경험을 제공하고 창업가로 성장하실 여러분의 발판을 마련해
        드리는 것이 과거로부터 지금까지 이어져 온 VERY의 목표입니다.
      </p>
      <img className="p2-detail__img" src={page2detail} alt="page2 detail" />
    </div>
  );
};

export default Recruit;
