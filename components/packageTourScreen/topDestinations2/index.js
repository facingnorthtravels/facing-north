import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import "react-multi-carousel/lib/styles.css";

import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { TOUR_PAKAGE } from "../../../data/tours-pakages";
import ToursCards from "../topDestinations/tourBestPlacesCards";

function TopDestinations() {
  const router = useRouter();
  const [location, setLocation] = useState(1);
  const [isPilgrim, setIsPilgrim] = useState(false);
  const [isCulinary, setIsCulinary] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      // console.log(router.query.id);
      if (router.query.id.includes("Pilgrims")) {
        setIsPilgrim(true);
      } else if (router.query.id.includes("Culinary")) {
        setIsCulinary(true);
      }
    }
  }, [router.query.id]);

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
    <div className={classes.container}>
      <div className={classes.places_to_stay_container}>
        <h2 className={classes.title}>Best place to stay</h2>
        <p className={classes.description}>
          {isPilgrim
            ? "Pakistan is home to some of the most important religious sites in the world, attracting pilgrims from all over. From Nankana Sahib, the birthplace of Guru Nanak, to the historic city of Lahore and the holy shrine of Kartarpur, these destinations offer a unique spiritual experience."
            : isCulinary
            ? "Discover the flavors of Pakistan, a top culinary destination that boasts a vibrant and diverse cuisine. Indulge in delicious kebabs, curries, desserts, and more, and savor the country's unique blend of flavors and spices."
            : "Looking for an adventure in Pakistan? Look no further than the country's stunning trekking and camping destinations. From Nanga Parbat Base Camp to the picturesque Patundas Trek, there's something for every nature enthusiast."}
        </p>
        <div className={classes.best_cards_container}>
          <Slider {...settings} className="Service-detail-destinations">
            {TOUR_PAKAGE?.map((place, index) => (
              <ToursCards
                description={place?.description}
                title={place?.title}
                pic={place.service_img}
                link={place.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;
