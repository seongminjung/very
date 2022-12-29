import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
// import search from "img/asset/search.png";
import AwardTile from "components/AwardTile";
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
      {/* <div className="a2-search__wrapper">
        <div className="a2-search__flex">
          <p className="a2-search__text">Search</p>
          <img className="a2-search__btn" src={search} alt="search" />
        </div>
      </div> */}
      <p className="a2-result__title">Awards</p>
      <div className="a2-result__bar" />
      <div className="a2-result__grid">
        {awards.map((award) => (
          <AwardTile award={award} key={award.createdAt} />
        ))}
      </div>
    </div>
  );
};

export default Awards2;
