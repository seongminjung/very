import React from "react";
import ClubofficerTile from "components/ClubofficerTile";
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
        <ClubofficerTile
          gen="36"
          name="임채현"
          contact="010-4129-3273"
          email="natebear9936@gmail.com"
          profileImg={profile1}
        />
      </div>
      <div className="co2-viceofficer__wrapper">
        <ClubofficerTile
          gen="36"
          name="임채현"
          contact="010-4129-3273"
          email="natebear9936@gmail.com"
          profileImg={profile1}
        />
        <ClubofficerTile
          gen="36"
          name="임채현"
          contact="010-4129-3273"
          email="natebear9936@gmail.com"
          profileImg={profile1}
        />
        <ClubofficerTile
          gen="36"
          name="임채현"
          contact="010-4129-3273"
          email="natebear9936@gmail.com"
          profileImg={profile1}
        />
      </div>
    </div>
  );
};

export default ClubOfficers2;
