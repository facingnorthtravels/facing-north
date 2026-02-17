import React, { useState, useEffect } from "react";
import classes from "./facingNorthDifference.module.css";

import pic1 from "../../../public/assets/about_us_cards/one.jpeg";
import pic2 from "../../../public/assets/about_us_cards/2.jpg";
import pic3 from "../../../public/assets/about_us_cards/3.jpeg";
import pic4 from "../../../public/assets/about_us_cards/4.jpeg";
import pic5 from "../../../public/assets/about_us_cards/5.jpg";

import PlacesCards from "../components/placesCards";

import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PlacesCards2 from "./placesCards2";

function FacingNorthDifference({ info }) {
  const [location, setLocation] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // console.log("ARR: ", info);

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

  const responsiveBestPlaceCards = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 2,
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
  const placesData = [
    {
      id: 1,
      img: pic1,
      head: "Best Facilities and Services",
      text: "We are committed to providing the best facilities and services, ensuring that your visit to northern Pakistan is nothing short of amazing.",
    },
    {
      id: 2,
      img: pic2,
      head: "Long-lasting Partnerships",
      text: "We aim to create long-lasting partnerships with travel companies all over the world, providing your clients with unique and enriching travel experiences in northern Pakistan.",
    },
    {
      id: 3,
      img: pic3,
      head: "Expertise and Personalized Approach",
      text: "With over 7 years of experience in the industry and 1000+ satisfied groups of domestic and international tourists, we have the expertise to provide a personalized and unforgettable experience for each traveler.",
    },
    {
      id: 4,
      img: pic4,
      head: "Wide Range of Tours",
      text: "We offer a wide range of tours, from landscape photography excursions to wellness retreats, catering to the specific interests and needs of each traveler.",
    },
    {
      id: 5,
      img: pic5,
      head: "Experienced Guides and Support Staff",
      text: "Our team of experienced guides and support staff are dedicated to providing the best possible experience, ensuring that your visit to northern Pakistan is safe and memorable.",
    },
    {
      id: 6,
      img: pic3,
      head: "Sustainable Tourism",
      text: "We believe in sustainable tourism and strive to minimize our impact on the environment and support local communities.",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.sliding_cards_container}>
        <h2 className={classes.title}>
          {/* Why Choose Facing North Travel & Tours */}
          The Facing North Difference
        </h2>
        {/* <h2 className={classes.title}>The Facing North Difference</h2> */}
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
            {placesData.map((e, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <PlacesCards2 pic={e.img} head={e.head} text={e.text} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FacingNorthDifference;
