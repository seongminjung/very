import React from "react";
import "css/about3.css";
import ab3background from "img/asset/ab3background.png";
import yonseimark from "img/picture/yonseimark.png";

const About3 = () => {
  return (
    <div className="container-fluid ab3-relative">
      <img src={ab3background} alt="background" className="ab3-background" />
      <div className="container ab3-relative">
        <div className="ab3-nav">
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
            <p className="ab3-pagenumber">01.</p>
          </div>
        </div>
        <p className="ab3-title">History</p>
        <div className="ab3-hashtag">
          <p># 중소기업청 후원</p>
          <p># 연세벤쳐창업연구회</p>
          <p># VERY의 뿌리</p>
        </div>
        <div className="ab3-flex">
          <img src={yonseimark} alt="yonseimark" />
          <p className="ab3-text">
            VERY는 1997년 창립된 연세대학교 공과대학 동아리로 교수님들과
            중소기업진흥청˙중소기업진흥공단의 후원을 받아 "연세벤쳐창업연구회"
            로 발족하였습니다. 이때부터 지금까지 VERY는 제1공학관 A119호에서
            <br />
            변하지 않고 창업가로 성장하실 여러분의 발판을 마련해 드리고자
            '지식', '경험', '네트워크'의 세 가지 가치를 제공하고자 최선을 다하고
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About3;
