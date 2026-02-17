import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner({ h1, h2, title, imgUrl }) {
  return (
    <div className={classes.hero_banner_container} style={{ backgroundImage: `url(${imgUrl || "/assets/placeholder.webp"})`}}>
      <div className={classes.overlay} />
      <h2>{title}</h2>
      <p>{h2}</p>
    </div>
  );
}

export default HeroBanner;
