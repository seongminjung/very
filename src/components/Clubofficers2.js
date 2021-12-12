import React from "react";
import "css/clubofficers2.css";
import coprofile from "img/sub/coprofile.png";
import leftleaves from "img/sub/leftleaves.png";
import rightleaves from "img/sub/rightleaves.png";

const ClubOfficers2 = () => {
  return (
    <div className="container">
      <div className="co2-headofficer__wrapper">
        <div className="co2-officer">
          <img className="co2-officer__profile" src={coprofile} alt="profile" />
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
        <div>
          <img className="co2-leftleaves" src={leftleaves} alt="leftleaves" />
        </div>
        <div className="co2-officer">
          <img className="co2-officer__profile" src={coprofile} alt="profile" />
          <p className="co2-officer__name">
            34기 회장 <span>임채현</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            임채현입니다.
          </p>
        </div>
        <div className="co2-officer">
          <img className="co2-officer__profile" src={coprofile} alt="profile" />
          <p className="co2-officer__name">
            34기 회장 <span>임채현</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            임채현입니다.
          </p>
        </div>
        <div className="co2-officer">
          <img className="co2-officer__profile" src={coprofile} alt="profile" />
          <p className="co2-officer__name">
            34기 회장 <span>임채현</span>
          </p>
          <p className="co2-officer__detail">
            반갑습니다.
            <br />
            임채현입니다.
          </p>
        </div>
        <div>
          <img
            className="co2-rightleaves"
            src={rightleaves}
            alt="rightleaves"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubOfficers2;
