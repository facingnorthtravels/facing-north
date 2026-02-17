import React, { useEffect } from "react";
import classes from "./thirdDetailPageSection.module.css";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TOUR_PAKAGE } from "../../../data/tours-pakages";
import PlacesCards from "../../homescreen/components/placesCards";

function ThirdToursDetailSection({ title, type, hosted }) {

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
      <div className={classes.title_section}>
        <div className={classes.head_section}>
          <div>
            <h2 data-aos="fade-down" className={classes.title}>
              {title || "Start Your Journey"}
            </h2>
            {/* <p data-aos="fade-down" className={classes.description}>
              {description ||
                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies lectus."}
            </p> */}
          </div>
          {/* <div className={classes.tours_btns}>
            <button
              onClick={() => settourbtn(0)}
              className={tourbtn === 0 ? `${classes.btnActive}` : ""}
            >
              GROUP TOURS
            </button>
            <button
              onClick={() => settourbtn(1)}
              className={tourbtn === 1 ? `${classes.btnActive}` : ""}
            >
              TAILOR MADE
            </button>
          </div> */}
        </div>
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
            {TOUR_PAKAGE.filter((p) => p?.category?.includes(type) && hosted ? p?.hosted : (!p?.hosted || p?.hosted === false)).map((p, index) => (
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

export default ThirdToursDetailSection;
