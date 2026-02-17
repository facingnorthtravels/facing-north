import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import thumbnail from "../../../public/assets/services_details_assets/video_thumbnail.png";
import play from "../../../public/assets/services_details_assets/play.svg";
import "react-multi-carousel/lib/styles.css";

function ThirdHomePageSection() {
  return (
    <div className={classes.container}>
      <img className={classes.bg} src={thumbnail.src} />
      <div className={classes.top_gradient} />
      <div className={classes.bottom_gradient} />

      <div className={classes.button_container}>
        <img src={play.src} style={{ width: "30px", height: "30px" }} />
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
