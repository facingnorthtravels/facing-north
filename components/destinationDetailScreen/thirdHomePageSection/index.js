import React from "react";
import classes from "./thirdHomePageSection.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";

import PlacesCards from "../components/placesCards";
import BestPlacesCards from "../components/bestPlacesCards";

import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopPlacesToVisit({
  placesRef,
  toursRef,
  bestPlaceRef,
  places,
  places_stay,
}) {

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
      breakpoint: { max: 769, min: 769 },
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

  return (
    <div className={classes.container}>
      <div ref={placesRef} className={classes.places_to_stay_container}>
        <h2 className={classes.title}>Top places to visit</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
        </p>
        <div className={classes.best_cards_container}>
          {places?.map((place, index) => (
            <BestPlacesCards
              description={place.description}
              key={index}
              title={place.title}
              pic={place?.img}
            />
          ))}
        </div>
      </div>

      <div ref={bestPlaceRef} className={classes.best_places_container}>
        <div className={classes.best_places_text_container}>
          <h2 className={classes.best_places_title}>Best places to Stay</h2>
          <p className={classes.best_places_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae
            magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
            ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus
            ultricies lectus. Nam elementum tempor arcu, ut faucibus ligula
            pharetra eu.
          </p>
        </div>

        {places_stay?.length > 0 && places_stay && (
          <div className={classes.best_places_cards_container}>
            <Carousel
              infinite={true}
              autoPlay={true}
              responsive={responsiveBestPlaceCards}
              swipeable={true}
              draggable={true}
              showDots={false}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {places_stay?.map((place, index) => (
                <BestPlacesCards
                  description={place.description}
                  key={index}
                  title={place.title}
                  isNotHoverable={true}
                  isLeftAligned={true}
                  pic={place_1}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>

      <div ref={toursRef} className={classes.sliding_cards_container}>
        <h2 className={classes.title}>
          Tours Featuring <br />
          Destination
        </h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
        <div className="cards_container">
          <Carousel
            infinite={true}
            autoPlay={true}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            <PlacesCards pic={explore_pic_3} />
            <PlacesCards pic={explore_pic_2} />
            <PlacesCards pic={explore_pic_1} />
            <PlacesCards pic={explore_pic_3} />
            <PlacesCards pic={explore_pic_2} />
            <PlacesCards pic={explore_pic_1} />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopPlacesToVisit;
