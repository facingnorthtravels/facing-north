import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner() {
  return (
    <div className={classes.hero_banner_container}>
      <div className={classes.overlay} />
      <h2>Services</h2>
      <p>
        Experience the ultimate adventure in Pakistan with our custom
        itineraries blending trekking, yoga retreats, and outdoor activities.
        Explore the Karakoram mountains and Neelum River for an unforgettable
        journey.
      </p>
    </div>
  );
}

export default HeroBanner;
