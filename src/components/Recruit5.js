import React from "react";
import "css/recruit5.css";

const Recruit5 = () => {
  return (
    <div className="container">
      <div className="r5-grid">
        <p className="r5-grid__title">VERY 모집 기간</p>
        <p className="r5-grid__title">VERY 지원 자격</p>
        <p className="r5-grid__description">
          * 정기 모집 기간은 매 1학기와 2학기에 진행
          <br />* 상세한 내용은 모집 기간에 각종 채널로 공고 예정
        </p>
        <p className="r5-grid__description">
          * 연세대학교 동문(학부생, 졸업생) 중 창업에 관심이 있는 자
          <br />* 매주 진행되는 정규 세션에 참가할 수 있는 자
        </p>
      </div>
    </div>
  );
};

export default Recruit5;
