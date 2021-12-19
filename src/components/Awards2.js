import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import ablockbackground from "img/picture/ablockbackground.png";
import search from "img/asset/search.png";
import "css/awards2.css";

const Awards2 = () => {
  const [awards, setAwards] = useState([]);
  useEffect(() => {
    dbService.collection("awards").onSnapshot((snapshot) => {
      const awardArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setAwards(awardArray);
    });
  }, []);
  return (
    <div className="container">
      <div className="a2-search__wrapper">
        <div className="a2-search__flex">
          <p className="a2-search__text">Search</p>
          <img className="a2-search__btn" src={search} alt="search" />
        </div>
      </div>
      <p className="a2-result__title">Awards</p>
      <div className="a2-result__bar" />
      <div className="a2-result__grid">
        {awards.map((award) => (
          <div className="a2-result__award" key={award.date}>
            <div className="a2-result__logo-background">
              <img
                className="a2-result__logo"
                src={ablockbackground}
                alt="ablockbackground"
              />
              <p className="a2-result__logo-text">
                15기 김둘리
                <br />
                16기 김또치
                <br />
                <br />
                축하드립니다!
              </p>
            </div>
            <div className="a2-result__text-background">
              <div className="a2-result__award-bar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="7"
                  viewBox="0 0 23 7"
                >
                  <rect
                    id="사각형_257"
                    data-name="사각형 257"
                    width="23"
                    height="7"
                    fill="#d3d3d3"
                  />
                </svg>
              </div>
              <p className="a2-result__award-name">{award.contestname}</p>
              <p className="a2-result__award-detail">
                일시: {award.date}
                <br />
                대회명: {award.contestname}
                <br />
                상금액: {award.prizemoney}
                <br />
                제목: {award.itemname}
                <br />
                인원: {award.participants}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards2;
