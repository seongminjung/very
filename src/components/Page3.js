import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "fb_info";
import "css/page3.css";

const Page3 = () => {
  const [curriculums, setCurriculums] = useState([]);
  useEffect(() => {
    dbService.collection("curriculum").onSnapshot((snapshot) => {
      const curriArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCurriculums(curriArray.reverse());
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <div onclick={() => previous()} className="p3-carousel-ctrlbtn-left">
          <p>
            <FontAwesomeIcon icon="chevron-left" />
          </p>
        </div>
        <div onclick={() => next()} className="p3-carousel-ctrlbtn-right">
          <p>
            <FontAwesomeIcon icon="chevron-right" />
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="container p3-relative">
      <p className="p3-title">Curriculum</p>
      <p className="p3-subtitle">활동 내용</p>
      <div className="p3-bar">
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
      <div className="p3-carousel">
        <div className="p3-img">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            // arrows={false}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            renderButtonGroupOutside={true}
            // customButtonGroup={<ButtonGroup />}
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
            // keyBoardControl={false}
            // ssr={true} // means to render carousel on server-side.
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            {curriculums.length !== 0 &&
              curriculums.map((curriculum) => (
                <div key={curriculum.createdAt}>
                  <img src={curriculum.url} alt="curriculum" />
                  <p className="p3-imgtitle">{curriculum.name}</p>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page3;
