import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "fb_info";
import facebook from "img/asset/facebook.png";
import instagram from "img/asset/instagram.png";
import "css/footer.css";

const Footer = () => {
  const [president, setPresident] = useState([]);
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
  return (
    <div className="">
      <div className="container-fluid footer-borderline">
        <div className="container footer-top">
          <div className="footer-link">
            <Link to="/">
              <div className="footer-link__item">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/recruit">
              <div className="footer-link__item">
                <p>Recruit</p>
              </div>
            </Link>
            <Link to="/about">
              <div className="footer-link__item">
                <p>About Us</p>
              </div>
            </Link>
            <Link to="/awards">
              <div className="footer-link__item">
                <p>Awards</p>
              </div>
            </Link>
            <Link to="/clubofficers">
              <div className="footer-link__item">
                <p>Club Officers</p>
              </div>
            </Link>
            <Link to="/alumni">
              <div className="footer-link__item">
                <p>Alumni</p>
              </div>
            </Link>
          </div>
          <div>
            <p className="footer-top__description">
              Experience is open to everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="container footer-middle">
        <div className="footer-middle__left">
          <p>CONTACT</p>
          <p>very.official.kr@gmail.com</p>
          <p>&copy; 2021, VERY, ALL RIGHTS RESERVED.</p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/veryyonsei"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-social__img"
                src={facebook}
                alt="facebook"
              />
            </a>
            <a
              href="https://instagram.com/very_yonsei/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-social__img"
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="footer-middle__right">
          <p>회장 | {president.contact}</p>
          <p>&lt;{president.email}&gt;</p>
          <div className="footer-madeby">
            <Link to="/">
              <p>Director_임채현</p>
            </Link>
            <Link to="/">
              <p>Designer_유혜리</p>
            </Link>
            <Link to="/">
              <p>Developer_정성민</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
