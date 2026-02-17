import React, { useEffect, useState } from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import { Carousel } from "react-responsive-carousel";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import { HOMEPAGE_FIRST_SLIDER } from "../../../data/homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useWindowSize } from "../../../utils";

function SecondHomePageSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowSize = useWindowSize()
  useEffect(() => {
    AOS.init({
      // Global settings for AOS, if required
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      // once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const handleSlideChange = (i) => {
    const element = document.querySelectorAll(".animate-text");
    if (element && element?.length > 0) {
      setTimeout(() => {
        setActiveSlide(i);
      }, 400);
      element.forEach((el) => {
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
        setTimeout(() => {
          el.classList.remove("fade-in");
          el.classList.add("fade-out");
        }, 600);
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.inner_container} box_container`}>
        {/* <img src={second_section_bg.src} className={classes.bg} /> */}

        <div className={classes.carousel_container}>
          <div className={classes.left_panel}>
            <h2 data-aos="fade-down" className="animate-text">
              {HOMEPAGE_FIRST_SLIDER[activeSlide].title}
            </h2>
            <p data-aos="fade-down" className="animate-text">
              {HOMEPAGE_FIRST_SLIDER[activeSlide].detailed_description}
            </p>
          </div>
          <div className={classes.right_panel}>
            <div className={classes.right_panel_container}>
              <Carousel
                autoPlay={windowSize.width > 991 ? true : false}
                className="second-page-carousel home-section-2-carousel"
                renderArrowNext={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <img
                      src={left_arrow.src}
                      style={{
                        width: "60px",
                        height: "60px",
                        position: "absolute",
                        zIndex: "10",
                        pointerEvents: "auto",
                      }}
                      className={"second-page-carousel__arrow--left"}
                      onClick={() => {
                        onClickHandler();
                        // console.log("Clicked");
                      }}
                    />
                  )
                }
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <img
                      src={right_arrow.src}
                      style={{
                        width: "60px",
                        height: "60px",
                        position: "absolute",
                        zIndex: "10",
                        pointerEvents: "auto",
                      }}
                      className={"second-page-carousel__arrow--right"}
                      onClick={onClickHandler}
                    />
                  )
                }
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                onChange={(i) => handleSlideChange(i)}
                interval={10000}
              >
                {HOMEPAGE_FIRST_SLIDER?.map((slide, index) => (
                  <div key={index} className={classes.img_container}>
                    <img
                      data-aos="zoom-in"
                      className={classes.img1}
                      src={slide?.img || second_section_pic1.src}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
