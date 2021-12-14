import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "img/main/facebook.png";
import instagram from "img/main/instagram.png";
import youtube from "img/main/youtube.png";
import "css/footer.css";

const Footer = () => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((prev) => !prev);
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
            <div className="footer-link__item footer-ac" onClick={toggle}>
              <p>Alumni</p>
              <FontAwesomeIcon icon="caret-down" />
              {opened && (
                <div className="footer-ac__flex">
                  <Link to="/companies">
                    <p className="footer-ac__item">Companines</p>
                  </Link>
                  <Link to="/clubofficers">
                    <p className="footer-ac__item">Club Officers</p>
                  </Link>
                </div>
              )}
            </div>
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
            <img className="footer-social__img" src={facebook} alt="blog" />
            <img className="footer-social__img" src={instagram} alt="blog" />
            <img className="footer-social__img" src={youtube} alt="blog" />
          </div>
        </div>
        <div className="footer-middle__right">
          <p>회장 | 010-4129-3273</p>
          <p>&lt;natebear9936@yonsei.ac.kr&gt;</p>
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
