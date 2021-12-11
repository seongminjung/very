import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/about4.css";
import subpagenumbar from "img/main/subpagenumbar-black.png";
import ab4background from "img/main/ab4background.png";
import icon1 from "img/main/icon1.png";
import icon2 from "img/main/icon2.png";
import icon3 from "img/main/icon3.png";

const About4 = () => {
  return (
    <div className="container">
      <div className="nav">
        <div>
          <img src={subpagenumbar} alt="bar" />
          <p className="ab4-pagenumber">03.</p>
        </div>
        <FontAwesomeIcon icon="bars" className="nav-menu" />
      </div>
      <p className="ab4-title">Value</p>
      <div className="ab4-background__flex">
        <img className="ab4-background" src={ab4background} alt="background" />
        <div className="ab4-bars">
          <div className="ab4-bar1" />
          <div className="ab4-bar2" />
          <div className="ab4-bar3" />
        </div>
      </div>
      <div className="ab4-icons">
        <div className="ab4-icon__wrapper">
          <img className="ab4-icon1" src={icon1} alt="icon1" />
        </div>
        <div className="ab4-icon__wrapper">
          <img className="ab4-icon2" src={icon2} alt="icon2" />
        </div>
        <div className="ab4-icon__wrapper">
          <img className="ab4-icon3" src={icon3} alt="icon3" />
        </div>
      </div>
      <div className="ab4-details__flex">
        <div className="ab4-detail">
          <p className="ab4-detail__title">실무 지식</p>
          <p className="ab4_detail__description">
            창업을 시작 전 기본지식을 바탕으로 실전에서 활용할 수 있는 사례를
            분석하여 실무 관련 지식의 범위를 확장시킵니다.
          </p>
        </div>
        <div className="ab4-detail ab4dcenter">
          <p className="ab4-detail__title">실전 경험</p>
          <p className="ab4_detail__description">
            VERY가 추구하는 가장 이로운 가치는 실제로 창업 실전 프로젝트를
            경험하고, 이러한 경험들을 공유하며 성장하는 것입니다.
          </p>
        </div>
        <div className="ab4-detail">
          <p className="ab4-detail__title">네트워크 형성</p>
          <p className="ab4_detail__description">
            다양한 분야의 사람들이 모여 서로의 부족한 점을 보완하고 선후배간의
            지원방식을 통하여 창업 네트워크를 형성합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About4;
