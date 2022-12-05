import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/page3.css";
import p3image from "img/picture/p3image.png";

const Page3 = () => {
  return (
    <div className="container">
      <p className="p3-title">Curriculum</p>
      <p className="p3-subtitle">활동 내용</p>
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
      <p className="p3-imgtitle">정규 세션 - 전문가 특강 및 네트워킹</p>
      <div className="p3-imgdot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="16"
          viewBox="0 0 140 16"
        >
          <circle
            id="타원_167"
            data-name="타원 167"
            cx="5"
            cy="5"
            r="5"
            transform="translate(31 3)"
            fill="#c3c3c3"
          />
          <circle
            id="타원_171"
            data-name="타원 171"
            cx="5"
            cy="5"
            r="5"
            transform="translate(130 3)"
            fill="#c3c3c3"
          />
          <circle
            id="타원_168"
            data-name="타원 168"
            cx="8"
            cy="8"
            r="8"
            transform="translate(62)"
            fill="#0074e8"
          />
          <circle
            id="타원_169"
            data-name="타원 169"
            cx="5"
            cy="5"
            r="5"
            transform="translate(0 3)"
            fill="#c3c3c3"
          />
          <circle
            id="타원_170"
            data-name="타원 170"
            cx="5"
            cy="5"
            r="5"
            transform="translate(99 3)"
            fill="#c3c3c3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page3;
