import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner({ title, h1, h2 }) {
  return (
    <div className={classes.hero_banner_container}>
      <div className={classes.overlay} />
      <h2>{title}</h2>
      <p>{h1 && h1}</p>
      <p>{h2 && h2}</p>
    </div>
  );
}

export default HeroBanner;
