import React from "react";
import classes from "./heroBanner.module.css";

function SpecialistHeroSection({ profile }) {
  const bg = profile?.hero_image || profile?.specialist_photo;

  return (
    <div
      className={classes.hero_banner_container}
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h1>Facing North Travel Specialists</h1>
        <p>
          Our Travel Specialists are destination experts, expedition leaders,
          and cultural insiders who have spent years building deep knowledge of
          their routes. They don&apos;t guide trips — they live them. Browse our
          specialists, choose yours, and travel with someone who truly knows
          the way.
        </p>
      </div>
    </div>
  );
}

export default SpecialistHeroSection;
