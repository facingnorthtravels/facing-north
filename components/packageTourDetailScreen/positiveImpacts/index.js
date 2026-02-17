import React from "react";
import classes from "./fourthHomePageSection.module.css";
import lifestyle from "../../../public/assets/homepage/lifestyle_img.png";
import experience from "../../../public/assets/homepage/experience_img.png";
import wellness from "../../../public/assets/homepage/wellness_img.png";
import right_arrow from "../../../public/assets/homepage/right-arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PositiveImpacts() {
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
    <div className={classes.main_container}>
      <div className={classes.top_section}>
        <h1 className={classes.title}>Positive Impacts of this Trip</h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna
        </p>
      </div>

      <div className="facilities_container">
        <Carousel infinite={true} autoPlay={true} responsive={responsive}>
          <div className={classes.single_tab}>
            <div className={classes.overlay}>
              <p>Experiences</p>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>
            <img src={experience.src} className={classes.bg_img} />
          </div>
          <div className={classes.single_tab}>
            <div className={classes.overlay}>
              <p>Lifestyle</p>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>

            <img src={lifestyle.src} className={classes.bg_img} />
          </div>
          <div className={classes.single_tab}>
            <div className={classes.overlay}>
              <p>Wellness</p>
              <div className={classes.icon_container}>
                <img src={right_arrow.src} style={{ width: "25px" }} />
              </div>
            </div>
            <img src={wellness.src} className={classes.bg_img} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default PositiveImpacts;
