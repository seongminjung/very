import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import ClubofficerTile from "components/ClubofficerTile";
import "css/clubofficers2.css";
import profile1 from "img/profile/임채현.png";

const ClubOfficers2 = () => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [gen, setGen] = useState([]);
  useEffect(() => {
    dbService.collection("clubofficers").onSnapshot((snapshot) => {
      const row = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setRow1(row[0]["officers"]);
      setRow2(row[1]["officers"]);
    });
  }, []);
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setGen(info[0].currentGen);
    });
  }, []);
  return (
    <div className="container">
      <p className="co2-title">{gen}기</p>
      <p className="co2-subtitle">
        {Math.floor((gen + 1) / 2) + 4}-{gen % 2 ? 1 : 2}학기
      </p>
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
        {row1.length !== 0 &&
          row1.map((item) => (
            <ClubofficerTile
              key={item.contact}
              gen={gen}
              name={item.name}
              pos={item.position}
              contact={item.contact}
              email={item.email}
              profileImg={profile1}
            />
          ))}
      </div>
      <div className="co2-viceofficer__wrapper">
        {row2.length !== 0 &&
          row2.map((item) => (
            <ClubofficerTile
              key={item.contact}
              gen={gen}
              name={item.name}
              pos={item.position}
              contact={item.contact}
              email={item.email}
              profileImg={profile1}
            />
          ))}
      </div>
    </div>
  );
};

export default ClubOfficers2;
