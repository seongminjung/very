import React from "react";
import "css/page3.css";
import logobiggray from "img/logo/logo-big-gray.png";

const Page3 = () => {
  return (
    <div className="container">
      <div className="p3-contactus">
        <p className="p3-contactus__title">Contact Us</p>
        <div className="p3-contactus__bar">
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
        <div className="p3-detail__grid">
          <div className="p3-detail__image">
            <img src={logobiggray} alt="logobiggray" />
            <div>
              <p>VERY</p>
              <p>34기 회장 임채현</p>
            </div>
          </div>
          <div className="p3-detail__text">
            <p className="p3-detail__text-left">Email.</p>
            <p className="p3-detail__text-right">very.official.kr@gmail.com</p>
            <p className="p3-detail__text-left">Address.</p>
            <p className="p3-detail__text-right">
              서울특별시 서대문구 연세로 50
              <br />
              (연세대학교 신촌캠퍼스 제1공학관), 공A119
            </p>
            <p className="p3-detail__text-left">Phone.</p>
            <p className="p3-detail__text-right">010-4129-3273</p>
            <p className="p3-detail__text-left">Email.</p>
            <p className="p3-detail__text-right">natebear9936@yonsei.ac.kr</p>
          </div>
        </div>
      </div>
      <div className="p3-cooperates">
        <p className="p3-cooperates__title">협력 기업</p>
        <div className="p3-cooperates__bar">
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
        <div className="p3-cooperates__grid">
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="p3-cooperates__item">
            <img
              className="p3-cooperates__img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
