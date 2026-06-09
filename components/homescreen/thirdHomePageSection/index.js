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

const HOME_ITINERARIES = [
  {
    title: "The Land of Infinite Meadows",
    country: "Kazakhstan",
    days: "10",
    weather: "Mild",
    overview: { bestTime: "Jun → Sep" },
    service_img:
      "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_7.jpg",
  },
  {
    title: "Journey Around the Karakorams",
    country: "Pakistan",
    days: "11",
    weather: "Cool",
    overview: { bestTime: "May → Oct" },
    service_img:
      "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/banner-2.jpg",
  },
  {
    title: "Enchanting Pamir Valleys",
    country: "Kyrgyzstan",
    days: "9",
    weather: "Cool",
    overview: { bestTime: "Jul → Sep" },
    service_img:
      "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-attabad.jpg",
  },
  {
    title: "The Heart of the Silk Route",
    country: "Uzbekistan",
    days: "8",
    weather: "Warm",
    overview: { bestTime: "Apr → Oct" },
    service_img:
      "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-heritage.jpg",
  },
];

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

function getItinerariesForCountry(countryName) {
  if (countryName === "Pakistan") {
    const featured = itineraries_ids
      .map((id) => TOUR_PAKAGE.find((t) => t.id === id))
      .filter(Boolean);
    if (featured.length > 0) return featured;
  }
  return HOME_ITINERARIES.filter((i) => i.country === countryName);
}

function ThirdHomePageSection() {
  const [location, setLocation] = useState(LANDSCAPES_DESCRIPTIONS[0]);
  const [itineraryIndex, setItineraryIndex] = useState(0);

  const countryItineraries = getItinerariesForCountry(location.place_name);
  const currentItinerary = countryItineraries[itineraryIndex] || null;

  const prevItinerary = () => {
    if (!countryItineraries.length) return;
    setItineraryIndex(
      (i) => (i - 1 + countryItineraries.length) % countryItineraries.length
    );
  };
  const nextItinerary = () => {
    if (!countryItineraries.length) return;
    setItineraryIndex((i) => (i + 1) % countryItineraries.length);
  };

  const handleCountryChange = (e) => {
    setLocation(e);
    setItineraryIndex(0);
  };

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
          Explore our handpicked itineraries
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
            {HOME_ITINERARIES.map((p, index) => (
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
        <div className={classes.unified_panel}>
          <div className={classes.unified_left}>
            <p className={classes.unified_eyebrow}>Destinations</p>
            <h2 data-aos="fade-right" className={classes.unified_title}>
              Find your true north
            </h2>

            <div className={classes.unified_tabs}>
              {LANDSCAPES_DESCRIPTIONS.map((e) => {
                const isActive = location?.id === e.id;
                return (
                  <button
                    type="button"
                    onClick={() => handleCountryChange(e)}
                    key={e?.id}
                    className={`${classes.unified_tab} ${isActive ? classes.unified_tab_active : ""}`}
                  >
                    <span className={classes.unified_tab_label}>{e?.place_name}</span>
                    {isActive && (
                      <>
                        <span className={classes.unified_tab_desc}>{e?.desc}</span>
                        <div className={classes.unified_tab_indicators}>
                          <div className={classes.single_indicator}>
                            <img className={classes.indicator_img} src={compass.src} />
                            <p>{e.direction}</p>
                          </div>
                          <div className={classes.single_indicator}>
                            <img className={classes.indicator_img} src={wind.src} />
                            <p>{e.wind}</p>
                          </div>
                          <div className={classes.single_indicator}>
                            <img className={classes.indicator_img} src={sun.src} />
                            <p>{e.temp}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={classes.unified_right}>
            <div
              className={classes.itinerary_slot}
              onClick={() => {
                if (currentItinerary?.id) {
                  window.location.href = `/package-tour/${currentItinerary.id}`;
                }
              }}
              style={{ cursor: currentItinerary?.id ? "pointer" : "default" }}
            >
                {currentItinerary ? (
                  <>
                    <img
                      className={classes.itinerary_bg}
                      src={
                        currentItinerary?.service_img?.src
                          ? currentItinerary.service_img.src
                          : currentItinerary.service_img
                      }
                      alt={currentItinerary?.title}
                    />
                    <div className={classes.itinerary_gradient} />
                    <div className={classes.itinerary_info}>
                      <p className={classes.itinerary_eyebrow}>Featured Itinerary</p>
                      <h3 className={classes.itinerary_title}>{currentItinerary?.title}</h3>
                      <div className={classes.itinerary_meta}>
                        {currentItinerary?.days && (
                          <span>{currentItinerary.days} days</span>
                        )}
                        {currentItinerary?.overview?.bestTime && (
                          <span>{currentItinerary.overview.bestTime}</span>
                        )}
                      </div>
                    </div>
                    {countryItineraries.length > 1 && (
                      <>
                        <div
                          className={classes.itinerary_nav_left}
                          onClick={(e) => {
                            e.stopPropagation();
                            prevItinerary();
                          }}
                        >
                          <img src={left_arrow.src} alt="Previous" />
                        </div>
                        <div
                          className={classes.itinerary_nav_right}
                          onClick={(e) => {
                            e.stopPropagation();
                            nextItinerary();
                          }}
                        >
                          <img src={right_arrow.src} alt="Next" />
                        </div>
                        <div className={classes.itinerary_counter}>
                          {String(itineraryIndex + 1).padStart(2, "0")} / {String(countryItineraries.length).padStart(2, "0")}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className={classes.itinerary_empty}>
                    More itineraries coming soon.
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
