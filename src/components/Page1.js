import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "fb_info";
import Navigation from "components/Navigation";
import "css/page1.css";
import activitybg from "img/picture/activitybg.jpg";
import notion from "img/asset/notion.png";
import instagram from "img/asset/instagram.png";

const Page1 = () => {
  const [images, setImages] = useState();
  const [officialNotion, setOfficialNotion] = useState();
  const [officialInstagram, setOfficialInstagram] = useState();
  useEffect(() => {
    dbService.collection("info").onSnapshot((snapshot) => {
      const info = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setOfficialNotion(info[0].officialNotion);
      setOfficialInstagram(info[0].officialInstagram);
    });
  }, []);
  useEffect(() => {
    dbService.collection("activity").onSnapshot((snapshot) => {
      const activityArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      if (activityArray.length > 2) {
        setImages(activityArray.slice(-2).reverse());
      } else {
        setImages(activityArray.reverse());
      }
    });
  }, []);
  const sliceString = (str) => {
    if (str.length > 24) {
      return str.slice(0, 24) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="container-fluid p1-relative">
      <img className="p1-background" src={activitybg} alt="background" />
      <div className="container">
        <Navigation />
        <div className="p1-wrapper">
          <div className="p1-img">
            <div className="p1-img__left">
              <img
                className="p1-img__left-top"
                src={images && images[0].url}
                alt="activity1"
              />
              <div className="p1-img__left-bottom">
                <p>{images && images[0].name}</p>
                <p>{images && sliceString(images[0].detail)}</p>
              </div>
            </div>
            <div className="p1-img__right">
              <img
                className="p1-img__right-top"
                src={images && images[1].url}
                alt="activity2"
              />
              <p className="p1-img__right-bottom">...</p>
            </div>
          </div>
          <div className="p1-hero">
            <p className="p1-hero__txt">
              창업에 열망이 있는 모든 연세대학생들에게
              <br />
              <span>미래</span>를 열어주는 벤처창업동아리
            </p>
            <Link to="/recruit" className="p1-applybtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="45"
                viewBox="0 0 150 45"
              >
                <g
                  id="그룹_455"
                  data-name="그룹 455"
                  transform="translate(-420 -3074)"
                >
                  <text
                    id="지원하기"
                    transform="translate(483.066 3083.799)"
                    fill="#fff"
                    fontSize="15"
                    fontFamily="SourceHanSansK-Regular, Source Han Sans K"
                  >
                    <tspan x="0" y="17">
                      지원하기
                    </tspan>
                  </text>
                  <g
                    id="사각형_231"
                    data-name="사각형 231"
                    transform="translate(420 3074)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <rect width="150" height="45" stroke="none" />
                    <rect x="0.5" y="0.5" width="149" height="44" fill="none" />
                  </g>
                  <path
                    id="패스_115"
                    data-name="패스 115"
                    d="M275.074,3094.209h21.462l-5.31-5.025"
                    transform="translate(164.695 2.088)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="p1-bottom">
          <div className="p1-social">
            <a href={officialNotion} target="_blank" rel="noreferrer">
              <img className="p1-social__img" src={notion} alt="notion" />
            </a>
            <a href={officialInstagram} target="_blank" rel="noreferrer">
              <img className="p1-social__img" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
