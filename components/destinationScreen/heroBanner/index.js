import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner() {
  return (
    <div className={classes.hero_banner_container}>
      <div className={classes.overlay} />
      <h2>Deosai National Park</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
        libero, ornare non libero vitae, vestibulum egestas tellus. Curabitur
        sodales eleifend sem laoreet varius.{" "}
      </p>
    </div>
  );
}

export default HeroBanner;
