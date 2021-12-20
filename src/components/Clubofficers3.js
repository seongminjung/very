import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "css/clubofficers3.css";
import profile1 from "img/profile/임채현.png";
import profile2 from "img/profile/김태윤.png";
import profile3 from "img/profile/정유진.jpg";
import profile4 from "img/profile/최현준.jpg";
import profile5 from "img/profile/이동현.jpg";
import profile6 from "img/profile/장덕민.jpg";
import profile7 from "img/profile/장지원.jpg";
import leftarrow from "img/asset/leftarrow.png";
import rightarrow from "img/asset/rightarrow.png";
import About2 from "components/About2";

// 지금은 하드코딩으로 34, 33, 32기 구분
// 나중에 각 기수별로 어떻게 선택해서 펼쳐지게 할지 고민
// 지금처럼 useState 써서 할지 아니면 그냥 일단 로딩은 해놓고 display: none으로 한 다음에 클릭하면 display만 바꿀지

const ClubOfficers3 = () => {
  const [opened34, setOpened34] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    // const {
    //   onMove,
    //   carouselState: { currentSlide, deviceType },
    // } = rest;
    return (
      <img
        src={leftarrow}
        alt="leftarrow"
        className="co3-gen__carousel-leftarrow"
        onClick={() => onClick()}
      />
    );
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    // const {
    //   onMove,
    //   carouselState: { currentSlide, deviceType },
    // } = rest;
    return (
      <img
        src={rightarrow}
        alt="rightarrow"
        className="co3-gen__carousel-rightarrow"
        onClick={() => onClick()}
      />
    );
  };
  const toggle34 = () => setOpened34((prev) => !prev);
  return (
    <div className="container">
      <p className="co3-title">Prior Club Officers</p>
      <div className="co3-title__bar" />
      <div className="co3-gen">
        <p className="co3-gen__number">34기</p>
        <div className="co3-gen__carousel-wrapper">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={false}
            showDots={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            // keyBoardControl={false}
            // ssr={true} // means to render carousel on server-side.
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile1}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 회장 <span>임채현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                임채현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile2}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 부회장 <span>김태윤</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                김태윤입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile3}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 회장 <span>정유진</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                정유진입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile7}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 총무 <span>장지원</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                장지원입니다.
              </p>
            </div>
          </Carousel>
        </div>
        {opened34 ? (
          <>
            <div className="about2">
              <About2 />
            </div>
            <div className="co3-gen__extend-button" onClick={toggle34}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.239"
                height="16.486"
                viewBox="0 0 28.239 16.486"
              >
                <path
                  id="패스_144"
                  data-name="패스 144"
                  d="M0,0,10.451,10.013,0,21.171"
                  transform="translate(3.535 12.951) rotate(-90)"
                  fill="none"
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </>
        ) : (
          <div className="co3-gen__extend-button" onClick={toggle34}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.239"
              height="16.487"
              viewBox="0 0 28.239 16.487"
            >
              <path
                id="패스_143"
                data-name="패스 143"
                d="M6610,6183.809l10.452-10.013L6610,6162.638"
                transform="translate(6187.343 -6606.465) rotate(90)"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="co3-gen">
        <p className="co3-gen__number">33기</p>
        <div className="co3-gen__carousel-wrapper">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={false}
            showDots={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            // keyBoardControl={false}
            // ssr={true} // means to render carousel on server-side.
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile1}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                33기 회장 <span>임채현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                임채현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile4}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                33기 부회장 <span>최현준</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                최현준입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile5}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                33기 부회장 <span>이동현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                이동현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={profile6}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 인사교류부장 <span>장덕민</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br />
                장덕민입니다.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="co3-pagenumber">
        <p>1</p>
      </div>
    </div>
  );
};

export default ClubOfficers3;
