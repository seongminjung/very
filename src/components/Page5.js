import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/page5.css";
import logobiggray from "img/logo/logo-big-gray.png";
import yonseiventuremark from "img/picture/yonseiventuremark.png";

const Page5 = () => {
  const [president, setPresident] = useState([]);
  const [gen, setGen] = useState([]);
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    dbService.collection("clubofficers").onSnapshot((snapshot) => {
      const row = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      row[0]["officers"].forEach((element) => {
        if (element.position === "회장") {
          setPresident(element);
        }
      });
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
  useEffect(() => {
    dbService.collection("partners").onSnapshot((snapshot) => {
      const partnerArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPartners(partnerArray);
    });
  }, []);
  return (
    <div className="container">
      <div className="p5-contactus">
        <p className="p5-contactus__title">Contact Us</p>
        <div className="p5-contactus__bar">
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
        <div className="p5-detail__grid">
          <div className="p5-detail__image">
            <img src={logobiggray} alt="logobiggray" />
            <div>
              <p>VERY</p>
              <p>
                {gen}기 회장 {president.name}
              </p>
            </div>
          </div>
          <div className="p5-detail__text">
            <p className="p5-detail__text-left">Email.</p>
            <p className="p5-detail__text-right">very.official.kr@gmail.com</p>
            <p className="p5-detail__text-left">Address.</p>
            <p className="p5-detail__text-right">
              서울특별시 서대문구 연세로 50
              <br />
              (연세대학교 신촌캠퍼스 제1공학관), 공A119
            </p>
            <p className="p5-detail__text-left">Phone.</p>
            <p className="p5-detail__text-right">{president.contact}</p>
            <p className="p5-detail__text-left">Email.</p>
            <p className="p5-detail__text-right">{president.email}</p>
          </div>
        </div>
      </div>
      <div className="p5-cooperates">
        <p className="p5-cooperates__title">협력</p>
        <div className="p5-cooperates__bar">
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
        <div className="p5-cooperates__grid">
          {partners.map((partner) => (
            <div className="p5-cooperates__item" key={partner.name}>
              <a href={partner.url} target="_blank" rel="noreferrer">
                <img
                  className="p5-cooperates__img"
                  src={yonseiventuremark}
                  alt="logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page5;
