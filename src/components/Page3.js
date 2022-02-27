import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/page3.css";
import p3image from "img/picture/p3image.png";

const Page3 = () => {
  return (
    <div className="container">
      <p className="p3-title">Curriculum</p>
      <p className="p3-subtitle">주차별 커리큘럼</p>
      <div className="p3-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="7"
          viewBox="0 0 23 7"
        >
          <rect
            id="사각형_227"
            data-name="사각형 227"
            width="23"
            height="7"
            fill="#d3d3d3"
          />
        </svg>
      </div>
      <div className="p3-carousel">
        <div className="p3-carousel-ctrlbtn">
          <p>
            <FontAwesomeIcon icon="chevron-left" />
          </p>
        </div>
        <div className="p3-img">
          <img src={p3image} alt="p3mainimage" />
        </div>
        <div className="p3-carousel-ctrlbtn">
          <p>
            <FontAwesomeIcon icon="chevron-right" />
          </p>
        </div>
      </div>
      <p className="p3-imgtitle">
        1주차 - 2021 한, 우간다 혁신창업 컨퍼러스 & 비즈니스 상담회
      </p>
    </div>
  );
};

export default Page3;
