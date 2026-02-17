import React from "react";
import classes from "./reviews.module.css";
import Image from "next/image";
import c1_img from "/public/assets/reviews/c1_img.png";
import { Carousel } from "react-responsive-carousel";
import right_arrow from "/public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "/public/assets/services_details_assets/left_arrow.svg";
import { REVIEWS_CONTENT } from "../../data/reviews";
import { Rating } from "react-simple-star-rating";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Reviews_section = ({ bgColor, mgTop }) => {
  return (
    <div
      className={classes.reviews_container}
      style={
        bgColor
          ? { background: `${bgColor}`, marginTop: `${mgTop}` }
          : { background: `white` }
      }
    >
      <h2>Reviews</h2>
      <Carousel
        autoPlay={true}
        className="second-page-carousel"
        renderArrowNext={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <img
              src={left_arrow.src}
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                zIndex: "2",
                right: "15%",
                bottom: "5vw",
                cursor: "pointer",
                pointerEvents: "auto",
              }}
              //   className={"second-page-carousel__arrow--left"}
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
                width: "40px",
                height: "40px",
                position: "absolute",
                zIndex: "10",
                right: "10%",
                bottom: "5vw",
                cursor: "pointer",
                pointerEvents: "auto",
              }}
              onClick={onClickHandler}
            />
          )
        }
        infiniteLoop
        showArrows={true}
      >
        {REVIEWS_CONTENT.map((e) => {
          return (
            <div className={classes.content_container} key={e.id}>
              <Image src={e.img} alt="img" className={classes.review_img} />
              <div className={classes.text_content}>
                <h3>{e.name}</h3>
                <Rating
                  initialValue={e.rating}
                  readonly
                  fillColor="#286675"
                  size={20}
                />
                <p>{e.para}</p>
                <button>READ MORE</button>
              </div>
            </div>
          );
        })}
        {/* <div className={classes.content_container}>
          <Image src={c1_img} alt="img" className={classes.review_img} />
          <div className={classes.text_content}>
            <h3>Bella Mollen</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <button>READ MORE</button>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default Reviews_section;
