import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
// import search from "img/asset/search.png";
import AwardTile from "components/AwardTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/awards2.css";

const Awards2 = () => {
  const [awards, setAwards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const itemsPerPage = 16;
  useEffect(() => {
    dbService.collection("awards").onSnapshot((snapshot) => {
      const awardArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setAwards(awardArray.slice(0).reverse());
    });
  }, []);
  useEffect(() => {
    setPages(Math.ceil(awards.length / itemsPerPage));
    setCurrentImages(
      awards.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
      )
    );
  }, [awards, currentPage]);
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
        {currentImages.length !== 0 &&
          currentImages.map((award) => (
            <AwardTile award={award} key={award.createdAt} />
          ))}
      </div>
      {pages !== null && pages > 1 && (
        <div className="a2-pagination">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <span>
            {currentPage + 1} of {pages}
          </span>
          <button
            disabled={currentPage === pages - 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FontAwesomeIcon icon="chevron-right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Awards2;
