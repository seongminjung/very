import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import search from "img/asset/search.png";
import "css/companies2.css";

const Companies2 = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    dbService.collection("companies").onSnapshot((snapshot) => {
      const companyArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCompanies(companyArray);
    });
  }, []);
  return (
    <div className="container">
      <div className="c2-search__wrapper">
        <div className="c2-search__flex">
          <p className="c2-search__text">Search</p>
          <img className="c2-search__btn" src={search} alt="search" />
        </div>
      </div>
      <p className="c2-result__title">Alumni Companies</p>
      <div className="c2-result__bar" />
      <div className="c2-result__grid">
        {companies.map((company) => (
          <div className="c2-result__alumni">
            <a href={company.url} target="_blank" rel="noreferrer">
              <div className="c2-result__logo-background">
                <img
                  className="c2-result__logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                  alt="logo"
                />
              </div>
            </a>
            <div className="c2-result__text-background">
              <div className="c2-result__alumni-bar">
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
              <p className="c2-result__alumni-name">{company.name}</p>
              <p className="c2-result__alumni-detail">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies2;
