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
    <div className="container-fluid ab4-relative">
      <div className="container">
        <div className="ab4-nav">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="2"
              viewBox="0 0 23 2"
            >
              <line
                id="선_108"
                data-name="선 108"
                x2="23"
                transform="translate(0 1)"
                fill="none"
                stroke="#7c7c7c"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>
            <p className="ab4-pagenumber">02.</p>
          </div>
        </div>
        <p className="ab4-title">Core Value</p>
        <div className="ab4-background__wrapper">
          <img
            src={ab4background}
            alt="background"
            className="ab4-background"
          />
        </div>
        <div className="ab4-values__flex">
          <div className="ab4-value">
            <div className="ab4-icon__wrapper">
              <img className="ab4-icon" src={icon1} alt="icon1" />
            </div>
            <div className="ab4-detail">
              <p className="ab4-detail__title">Knowledge</p>
              <p className="ab4_detail__description">
                실전에서 활용할 수 있는 각종 지식들을 다양한 Case들을 활용하여
                습득합니다. 이로써 창업가로서 경험할 수 있는 범위를 확장합니다.
              </p>
            </div>
          </div>
          <div className="ab4-value">
            <div className="ab4-icon__wrapper">
              <img className="ab4-icon" src={icon2} alt="icon2" />
            </div>
            <div className="ab4-detail">
              <p className="ab4-detail__title ab4dcenter">Experience</p>
              <p className="ab4_detail__description ab4dcenter">
                여러 프로젝트들을 통해서 실전 창업을 실제로 경험하고, 이러한
                경험들을 공유하며 성장합니다. 이는 VERY가 추구하는 가장 주된
                가치입니다.
              </p>
            </div>
          </div>
          <div className="ab4-value">
            <div className="ab4-icon__wrapper">
              <img className="ab4-icon" src={icon3} alt="icon3" />
            </div>
            <div className="ab4-detail">
              <p className="ab4-detail__title">Network</p>
              <p className="ab4_detail__description">
                다양한 분야의 사람들이 모여 상호 발전적 관계를 이루고 선후배
                간의 지원 방식을 통하여 창업 네트워크를 형성합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
