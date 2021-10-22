import React from "react";
import Navigation from "components/Navigation";
import img0 from "img/sub/img1.png";
import "css/al1.css";

const Al1 = () => {
  return (
    <>
      <div className="page-wrapper">
        <Navigation />
        <div className="al1-hero">
          <img className="al1-hero__img" src={img0} alt="img0" />
          <p className="al1-hero__1">Alumni Members</p>
          <p className="al1-hero__2">Are Parts</p>
          <p className="al1-hero__2 al1h2last">Of Ourselves.</p>
          <p className="al1-hero__3">VERY는 실전 프로젝트 참여를 통해</p>
          <p className="al1-hero__3">
            기업들과 협업하고 주목할 만한 성공 사례로 이끌어냅니다.
          </p>
        </div>
      </div>
      <div className="al1-stripe">
        <div>
          <p className="al1-stripe__text">알럼나이 기업 수</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="7"
            viewBox="0 0 23 7"
          >
            <rect
              id="사각형_318"
              data-name="사각형 318"
              width="23"
              height="7"
              fill="#d3d3d3"
            />
          </svg>
        </div>
        <p className="al1-stripe__number">36</p>
      </div>
    </>
  );
};

export default Al1;
