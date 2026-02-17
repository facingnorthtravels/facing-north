import React, { useEffect, useState } from "react";
import classes from "./secondservicesPageSection.module.css";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import right_arrow from "../../../public/assets/services_assets/right-arrow-white.png";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SERVICEPAGE_FIRST_SLIDER } from "../../../data/servicepage";

function SecondServicePageSection() {
  const [activeSlide, setActiveSlide] = useState(0);
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
        <div className={classes.carousel_container}>
          <div className={classes.left_panel}>
            <h2 data-aos="fade-down" className="animate-text">
              {SERVICEPAGE_FIRST_SLIDER[activeSlide].title}
            </h2>
            <p data-aos="fade-down" className="animate-text">
              {SERVICEPAGE_FIRST_SLIDER[activeSlide].detailed_description}
            </p>
          </div>
          <div className={classes.right_panel}>
            <div className={classes.right_panel_container}>
              <Carousel
                autoPlay={true}
                className="second-page-carousel"
                renderArrowNext={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <img
                      src={left_arrow.src}
                      style={{
                        width: "60px",
                        height: "60px",
                        position: "absolute",
                        left: "0px",
                        zIndex: "10",
                        pointerEvents: "auto",
                      }}
                      className={"service-page-carousel__arrow--left"}
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
                      className={"service-page-carousel__arrow--right"}
                      onClick={onClickHandler}
                    />
                  )
                }
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                onChange={(i) => handleSlideChange(i)}
              >
                {SERVICEPAGE_FIRST_SLIDER?.map((slide, index) => (
                  <div key={index} className={classes.img_container}>
                    <img
                      data-aos="zoom-in"
                      className={classes.img1}
                      src={second_section_pic1.src}
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

export default SecondServicePageSection;
