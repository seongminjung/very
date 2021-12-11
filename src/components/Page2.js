import React from "react";
import { Link } from "react-router-dom";
import "css/page2.css";

const Page2 = () => {
  return (
    <div className="container">
      <div className="p2-sub__grid">
        <p className="p2-sub__grid-r1">창립 연도</p>
        <p className="p2-sub__grid-r1">공모전 입상 수</p>
        <p className="p2-sub__grid-r1">알럼나이 기업 수</p>
        <div>
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
        <div>
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
        <div>
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
        <div className="p2-sub__grid-r3">1997</div>
        <div className="p2-sub__grid-r3">106</div>
        <div className="p2-sub__grid-r3">36</div>
        <div className="p2-sub__grid-r4">
          <Link to="/about" className="p2-sub__btn-border">
            <div className="p2-sub__btn-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.19"
                height="5.523"
                viewBox="0 0 20.19 5.523"
              >
                <path
                  id="패스_115"
                  data-name="패스 115"
                  d="M275.074,3093.5h18.434l-4.561-4.316"
                  transform="translate(-274.574 -3088.477)"
                  fill="none"
                  stroke="#707070"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </svg>
            </div>
            <p className="p2-sub__btn-text">자세히 보기</p>
          </Link>
        </div>
        <div className="p2-sub__grid-r4">
          <Link to="/" className="p2-sub__btn-border">
            <div className="p2-sub__btn-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.19"
                height="5.523"
                viewBox="0 0 20.19 5.523"
              >
                <path
                  id="패스_115"
                  data-name="패스 115"
                  d="M275.074,3093.5h18.434l-4.561-4.316"
                  transform="translate(-274.574 -3088.477)"
                  fill="none"
                  stroke="#707070"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </svg>
            </div>
            <p className="p2-sub__btn-text">자세히 보기</p>
          </Link>
        </div>
        <div className="p2-sub__grid-r4">
          <Link to="/alumni" className="p2-sub__btn-border">
            <div className="p2-sub__btn-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.19"
                height="5.523"
                viewBox="0 0 20.19 5.523"
              >
                <path
                  id="패스_115"
                  data-name="패스 115"
                  d="M275.074,3093.5h18.434l-4.561-4.316"
                  transform="translate(-274.574 -3088.477)"
                  fill="none"
                  stroke="#707070"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </svg>
            </div>
            <p className="p2-sub__btn-text">자세히 보기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
