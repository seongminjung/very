import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "fb_info";
import "css/page4.css";
import p4image1 from "img/picture/p4image1.png";
import p4background from "img/picture/p4background.png";

const Page4 = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    dbService.collection("activity").onSnapshot((snapshot) => {
      const activityArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      const imageUrls = activityArray.reverse().map((activity) => activity.url);
      if (imageUrls.length < 3) {
        imageUrls.unshift(p4image1);
      }
      setImages(imageUrls);
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  // const ButtonGroup = ({ next, previous }) => {
  //   return (
  //     <div className="carousel-button-group">
  //       <div onclick={() => previous()} className="p3-carousel-ctrlbtn-left">
  //         <p>
  //           <FontAwesomeIcon icon="chevron-left" />
  //         </p>
  //       </div>
  //       <div onclick={() => next()} className="p3-carousel-ctrlbtn-right">
  //         <p>
  //           <FontAwesomeIcon icon="chevron-right" />
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="container-fluid p4-relative">
      <img className="p4-background" src={p4background} alt="background" />
      <div className="container">
        <p className="p4-title">Activity Record</p>
        <p className="p4-subtitle">활동 기록</p>
        <div className="p4-bar">
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
        <div className="p4-carousel">
          <div className="p4-img">
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
              {images.length !== 0 &&
                images.map((image) => (
                  <img key={image} src={image} alt="activity" />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
