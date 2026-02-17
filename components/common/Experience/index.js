import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { EXPERIENCE, TOUR_PAKAGE } from "../../../data/tours-pakages";
import ToursCards from "./tourBestPlacesCards";
import FacingNorthDifference from "../../aboutScreen/facingNorthDifferenceSection";
import { DESTIATIONS } from "../../../data/destinations";
import AboutCards from "./tourBestPlacesCards/AboutCard";

function TopDestinationCards({ cardData, head, para, showPara }) {
  const router = useRouter();
  const [location, setLocation] = useState(1);
  const [isPilgrim, setIsPilgrim] = useState(false);
  const [isCulinary, setIsCulinary] = useState(false);

  // useEffect(() => {
  //   if (router.query.id) {
  //     console.log(router.query.id);
  //     if (router.query.id.includes("Pilgrims")) {
  //       setIsPilgrim(true);
  //     } else if (router.query.id.includes("Culinary")) {
  //       setIsCulinary(true);
  //     }
  //   }
  // }, [router.query.id]);

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
      breakpoint: { max: 1220, min: 464 },
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
  const settings = {
    className: "Service-detail-destinations",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    // nextArrow: <Next />,
    // prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={classes.Experience_container}>
      <div className={classes.places_to_stay_container}>
        {cardData ? (
          <h2
            className={classes.title}
            style={{
              width: "100%",
              marginRight: "auto",
            }}
          >
            {head || "Our Destinations"}
          </h2>
        ) : (
          <>
            <h2 className={classes.title}>{head || "Our Destinations"}</h2>
            <p className={classes.description}>
              {para ||
                "Looking for an adventure in Pakistan? Look no further than the country's stunning trekking and camping destinations. From Nanga Parbat Base Camp to the picturesque Patundas Trek, there's something for every nature enthusiast."}
            </p>
          </>
        )}
        <div className={classes.experience_cards_container}>
          {/* <Slider {...settings} className="Service-detail-destinations"> */}
          {(cardData || DESTIATIONS).map((destination, index) =>
            showPara ? (
              <AboutCards
                id={destination?.id}
                key={`d-card-${index}-${destination?.id}`}
                description={
                  cardData ? destination?.description : destination?.statement
                }
                title={destination?.title}
                pic={destination?.img}
                location={destination?.location}
                hideLink
              />
            ) : (
              <ToursCards
                id={destination?.id}
                key={`d-card-${index}-${destination?.id}`}
                description={
                  cardData ? destination?.description : destination?.statement
                }
                title={destination?.title}
                pic={destination?.img}
                location={destination?.location}
                hideLink
                // showPara={showPara}
              />
            )
          )}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default TopDestinationCards;
