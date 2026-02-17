import React, { useEffect } from "react";
import classes from "./fourthHomePageSection.module.css";
import story_bg from "/public/assets/IMAGES/Home/about/our-story.jpg";
import vision_bg from "../../../public/assets/IMAGES/Home/about/our-vision.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthHomePageSection({
  info,
}) {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className={classes.container}>
      <div
        style={{ scrollMarginTop: "180px" }}
        className={classes.second_section}
      >
        <h3>{info.statement}</h3>
      </div>
      <div
        style={{ scrollMarginTop: "50px" }}
        className={classes.feedback_section}
      >
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img
              data-aos="fade-right"
              src={story_bg.src}
              className={classes.img}
              alt="story_bg"
            />
            <div
              data-aos="fade-left"
              className={classes.review_container_centered}
            >
              <h3>Our Story</h3>

              <p>{info.story}</p>
            </div>
          </div>
        </div>
      </div>


      <div
        style={{ scrollMarginTop: "50px" }}
        className={classes.feedback_section}
      >
        <div
          className={`${classes.vision_img_container} ${classes.img_container_right}`}
        >
          <div className={classes.img_wrapper_right}>
            <img
              data-aos="fade-left"
              style={{ marginBottom: "-3px" }}
              src={vision_bg.src}
              alt="vision_bg"
              className={`${classes.img} ${classes.img_vision}`}
            />
            <div
              data-aos="fade-right"
              className={`${classes.review_container_right} ${classes.review_container_vision}`}
            >
              <h3>Our Vision</h3>

              <p>{info.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
