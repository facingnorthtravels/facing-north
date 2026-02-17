import React, { useState, useEffect } from "react";
import classes from "./thirdDetailPageSection.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TOUR_PAKAGE } from "../../../data/tours-pakages";
import PlacesCards from "../../homescreen/components/placesCards";

function ThirdServiceDetailSection({ title, itineraries_ids }) {
  const [location, setLocation] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1220, min: 830 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive_location_carousel = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1220, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <img
        src={right_arrow.src}
        style={{ width: "60px", height: "60px", position: "absolute" }}
        className={"react-multiple-carousel__arrow--right"}
        onClick={() => onClick()}
      />
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <img
        className={"react-multiple-carousel__arrow--left"}
        src={left_arrow.src}
        style={{ width: "60px", height: "60px", position: "absolute" }}
        onClick={() => onClick()}
      />
    );
  };

  const CustomRightArrowLocation = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          left: "95px",
          top: "40px",
        }}
        // className={classes}
      >
        <img
          src={right_arrow.src}
          className={`react-multiple-carousel__arrow--right`}
          onClick={() => {
            // console.log("right arrow clicked");
            onClick();
          }}
        />
      </div>
    );
  };

  const CustomLeftArrowLocation = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        style={{
          width: "40px",
          height: "40px",
          left: "35px",
          top: "40px",
          position: "absolute",
        }}
      >
        <img
          className={"react-multiple-carousel__arrow--left"}
          src={left_arrow.src}
          onClick={() => {
            // console.log("left arrow clicked");
            onClick();
          }}
        />
      </div>
    );
  };

  const placesData = [
    explore_pic_3,
    explore_pic_2,
    explore_pic_1,
    explore_pic_3,
    explore_pic_2,
    explore_pic_1,
  ];

  return (
    <div className={classes.container}>
      <div className={classes.title_section}>
        <h2 data-aos="fade-down" className={classes.title}>
          {/* Top Itineraries For Outdoor */}
          {title || "Top Itineraries For Outdoor"}
        </h2>
        {/* <p data-aos="fade-down" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p> */}
        <div className={classes.cards_container}>
          <Carousel
            infinite={true}
            autoPlay={true}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            className="third-start-slider"
          >
            {/* {placesData.map((pic, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <PlacesCards pic={pic} />
              </div>
            ))} */}
            {TOUR_PAKAGE.filter((i) => itineraries_ids?.length > 0 ? itineraries_ids.includes(i.id) : true).map((p, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <PlacesCards p={p} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ThirdServiceDetailSection;
