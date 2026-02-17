import React from "react";
import classes from "./fourthHomePageSection.module.css";
import lifestyle from "../../../public/assets/homepage/lifestyle_img.png";
import experience from "../../../public/assets/homepage/experience_img.png";
import wellness from "../../../public/assets/homepage/wellness_img.png";
import right_arrow from "../../../public/assets/homepage/right-arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FourthHomePageSection() {
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

  return (
    <div className="facilities_container">
      <Carousel
        infinite={true}
        autoPlay={true}
        responsive={responsive}
        className="facilities-carousel"
      >
        <div className={classes.single_tab}>
          <div className={classes.overlay}>
            <p>Experiences</p>
            <div className={classes.arrow_container}>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>
          </div>
          <img src={experience.src} className={classes.bg_img} />
        </div>
        <div className={classes.single_tab}>
          <div className={classes.overlay}>
            <p>Lifestyle</p>
            <div className={classes.arrow_container}>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>
          </div>

          <img src={lifestyle.src} className={classes.bg_img} />
        </div>
        <div className={classes.single_tab}>
          <div className={classes.overlay}>
            <p>Wellness</p>
            <div className={classes.arrow_container}>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>
          </div>
          <img src={wellness.src} className={classes.bg_img} />
        </div>
      </Carousel>
    </div>
  );
}

export default FourthHomePageSection;
