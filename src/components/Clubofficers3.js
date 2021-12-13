import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "css/clubofficers3.css";
import coprofile from "img/sub/coprofile.png";
import leftarrow from "img/sub/leftarrow.png";
import rightarrow from "img/sub/rightarrow.png";

const ClubOfficers3 = () => {
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 회장 <span>임채현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br /> 임채현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={coprofile}
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
          </Carousel>
        </div>
        <div className="co3-gen__extend-button">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="5"
            />
          </svg>
        </div>
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 회장 <span>임채현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br /> 임채현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={coprofile}
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
          </Carousel>
        </div>
        <div className="co3-gen__extend-button">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      <div className="co3-gen">
        <p className="co3-gen__number">32기</p>
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
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
                src={coprofile}
                alt="profile"
              />
              <p className="co3-gen__officer-name">
                34기 회장 <span>임채현</span>
              </p>
              <p className="co3-gen__officer-detail">
                반갑습니다.
                <br /> 임채현입니다.
              </p>
            </div>
            <div className="co3-gen__officer">
              <img
                className="co3-gen__officer-profile"
                src={coprofile}
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
          </Carousel>
        </div>
        <div className="co3-gen__extend-button">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      <div className="co3-pagenumber">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>다음 &gt;</p>
      </div>
    </div>
  );
};

export default ClubOfficers3;
