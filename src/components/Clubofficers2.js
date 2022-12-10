import React from "react";
import "css/clubofficers2.css";
import profile1 from "img/profile/임채현.png";
import profile2 from "img/profile/김태윤.png";
import profile3 from "img/profile/정유진.jpg";
import profile4 from "img/profile/장지원.jpg";

const ClubOfficers2 = () => {
  return (
    <div className="container">
      <p className="co2-title">36기</p>
      <p className="co2-subtitle">22-2학기</p>
      <div className="co2-bar">
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
      <div className="co2-headofficer__wrapper">
        <div className="co2-officer">
          <img className="co2-officer__profile" src={profile1} alt="profile" />
          <p className="co2-officer__name">
            34기 회장 <span>임채현</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            임채현입니다.
          </p>
        </div>
      </div>
      <div className="co2-viceofficer__wrapper">
        <div className="co2-officer">
          <img className="co2-officer__profile" src={profile2} alt="profile" />
          <p className="co2-officer__name">
            34기 부회장 <span>김태윤</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            김태윤입니다.
          </p>
        </div>
        <div className="co2-officer">
          <img className="co2-officer__profile" src={profile3} alt="profile" />
          <p className="co2-officer__name">
            34기 기획부장 <span>정유진</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            정유진입니다.
          </p>
        </div>
        <div className="co2-officer">
          <img className="co2-officer__profile" src={profile4} alt="profile" />
          <p className="co2-officer__name">
            34기 총무 <span>장지원</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            장지원입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubOfficers2;
