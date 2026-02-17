import React from "react";
import classes from "./testimonialCard.module.css";
import girl_pic from "../../../../public/assets/destination_detail_assets/girl_placeholder.png";

function TestimonialCard() {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img src={girl_pic.src} />
      </div>
      <div className={classes.content_container}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac.
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
