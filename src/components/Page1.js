import React from "react";
import Navigation from "components/Navigation";
import "css/page1.css";
import img0 from "img/main/img0.png";
import blog from "img/main/blog.png";
import facebook from "img/main/facebook.png";
import instagram from "img/main/instagram.png";
import youtube from "img/main/youtube.png";

const Page1 = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="p1-hero">
        <img className="p1-hero__img" src={img0} alt="img0" />
        <p className="p1-hero__1">VERY</p>
        <p className="p1-hero__2">Experience</p>
        <p className="p1-hero__2">is open to every</p>
        <p className="p1-hero__2">one.</p>
        <p className="p1-hero__3 p1h3first">
          VERY는 팀프로젝트를 통해 실전 창업 경험을
        </p>
        <p className="p1-hero__3">
          제공하고 창업가로 성장하실 여러분의 발판을 마련합니다.
        </p>
      </div>
      <div className="p1-social">
        <img className="p1-social__img" src={facebook} alt="blog" />
        <img className="p1-social__img" src={instagram} alt="blog" />
        <img className="p1-social__img" src={blog} alt="blog" />
        <img className="p1-social__img" src={youtube} alt="blog" />
      </div>
    </div>
  );
};

export default Page1;
