import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner() {
  return (
    <div className={classes?.hero_banner_container}>
      <div className={classes?.overlay} />
      <h2>Travel Resources</h2>
    </div>
  );
}

export default HeroBanner;
