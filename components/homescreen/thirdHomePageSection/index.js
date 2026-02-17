import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import globe from "../../../public/assets/homepage/globe.png";
import PlacesCards from "../components/placesCards";
import compass from "../../../public/assets/homepage/compass.svg";
import wind from "../../../public/assets/homepage/wind.svg";
import sun from "../../../public/assets/homepage/sun.svg";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LANDSCAPES_DESCRIPTIONS } from "../../../data/third_homePg";
import { CATEGORIES, TOUR_PAKAGE } from "../../../data/tours-pakages";

const itineraries_ids = [
  "swat-valley-pk-09",
  "pakistan-food-journey",
  "wonders-of-hindukush",
  "air-journey-to-silk-route-pk23-02",
  "hunza-fairy-meadows",
  "hunza-lahore-autumn",
  "journey-to-silk-route-pk23-01",
  "skardu-photography-excursion-pk23-05",
  "hunza-wellness-retreat-pk24-11",
  "chitral-wellness-retreat-pk24-10",
  "pk24-07-ultimate-peaks-escape",
  "br-around-karakoram-pk24-10"
]

function ThirdHomePageSection() {
  const [location, setLocation] = useState(LANDSCAPES_DESCRIPTIONS[0]);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

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
        className="react-multiple-carousel__arrow--right-cont"
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
        className="react-multiple-carousel__arrow--left-cont"
      >
        <img
          className={"react-multiple-carousel__arrow--left"}
          src={left_arrow.src}
          onClick={() => {
            console.log("left arrow clicked");
            onClick();
          }}
        />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.title_section}>
        <h2 data-aos="fade-down" className={classes.title}>
          Explore Our Top Itineraries
        </h2>
        <div className={classes.cards_container}>
          <Carousel
            infinite={true}
            autoPlay={false}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            className="third-start-slider"
          >
            {TOUR_PAKAGE.filter((i) =>  i?.category?.includes(CATEGORIES.home)).map((p, index) => (
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

      <div className={classes.last_section}>
        <div className={classes.last_section_text}>
          <h2 data-aos="fade-right" className={classes.title}>
            Find Your True North
          </h2>
          <div className={classes.row}>
            {LANDSCAPES_DESCRIPTIONS.map((e) => {
              return (
                <p
                  onClick={() => {
                    setLocation(e);
                  }}
                  key={e?.id}
                  style={{
                    borderBottom:
                      location?.id === e.id ? "2px solid black" : "none",
                  }}
                >
                  {e?.place_name}
                </p>
              );
            })}
          </div>
          <p data-aos="fade-right" className={`${classes.description}`}>
            {location?.desc}
          </p>
        </div>
        <div className={classes.last_section_glob}>
          <img
            data-aos="fade-right"
            src={globe.src}
            className={classes.globe}
          />
          <div data-aos="fade-left" className={classes.location_container}>
            <div className={classes.content_container}>
              <div className={classes.info_container}>
                <p className={classes.place_area_name}>{location.place_name}</p>
                <div className={classes.indicators}>
                  <div className={classes.single_indicator}>
                    <img className={classes.indicator_img} src={compass.src} />
                    <p>{location.direction}</p>
                  </div>
                  <div className={classes.single_indicator}>
                    <img className={classes.indicator_img} src={wind.src} />
                    <p>{location.wind}</p>
                  </div>
                  <div className={classes.single_indicator}>
                    <img className={classes.indicator_img} src={sun.src} />
                    <p>{location.temp}</p>
                  </div>
                </div>
              </div>

              <div className="homepage_location_pic_container">
                <Carousel
                  infinite={true}
                  autoPlay={false}
                  autoPlaySpeed={6000}
                  responsive={responsive_location_carousel}
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  customRightArrow={<CustomRightArrowLocation />}
                  customLeftArrow={<CustomLeftArrowLocation />}
                >
                  {location?.places.map((h, i) => {
                    return <img src={h.img.src} key={i} alt={i} />;
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
