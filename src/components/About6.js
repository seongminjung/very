import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/about6.css";

const About6 = () => {
  return (
    <div className="container">
      <div className="ab6-text">
        <p className="ab6-text__title">VERY SYMBOL의 점, 선, 면</p>
        <p className="ab6-text__detail">
          점: VERY 심벌에는 4개의 점이 있습니다. 이 점들은 선을 이루어 면을
          지탱하는, VERY의 임원진을 상징합니다.
          <br />
          <br />
          선: VERY 심벌의 선은 YONSEI의 Y를 형상화합니다. 모교인 연세대학교이자
          구성원들의 신분을 상징하기도 합니다.
          <br />
          <br />
          면: VERY 심벌에는 3개의 면이 있습니다. 이들은 VERY의 3가지 핵심
          가치이자, VERY의 회원들이 존재하는
          <br />
          형이상학적 공간입니다. 최상단의 면은 Knowledge를, 왼편의 면은
          Network를, 오른편의 면은 Experience를 상징합니다.
        </p>
      </div>
    </div>
  );
};

export default About6;
