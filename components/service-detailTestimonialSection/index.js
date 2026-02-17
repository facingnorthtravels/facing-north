import React from "react";
import classes from "./testimonialSection.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bg from "../../public/assets/blogs/banner.png";
import TestimonialCard from "../testimonialScreen/components/testimonialCard/index";
import { TESTIMONIALS } from "../../data/testimonials";
import comma from "../../public/assets/testimonial_card_assets/comma.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../testimonialArrows/next";
import Prev from "../testimonialArrows/prev";
import { useWindowSize } from "../../utils";

function TestimonialSection_service_detail({ isWhite, isOnlyFirstSection }) {
  const { width } = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <div
      style={{ backgroundColor: isWhite && "white" }}
      className={classes.container}
    >
      <div className={classes.top_section}>
        <h1 className={classes.title}>Travel Tales</h1>
        <div className={classes.card_section}>
          <Slider arrows={true} {...settings}>
            {TESTIMONIALS?.map((testimonial, index) => (
              <div
                style={{ backgroundColor: isWhite && "#eaeeef" }}
                key={index}
                className={classes.single_slide}
              >
                <img src={bg.src} />
                <div className={classes.slide_content_container}>
                  <img
                    style={{
                      height: "fit-content",
                      objectFit: "contain",
                      width: "12%",
                      display: width < 700 ? "none" : "block",
                    }}
                    className={classes.comma}
                    src={comma.src}
                  />
                  <p className={classes.testimonial}>{testimonial.text}</p>
                  <p className={classes.person_name}>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* {!isOnlyFirstSection && (
        <div className={classes.top_section}>
          <h1 className={classes.title}>Message from the Expert Guide</h1>
          <div className={classes.testimonial_container}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default TestimonialSection_service_detail;
