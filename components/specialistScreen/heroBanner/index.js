import React from "react";
import classes from "./heroBanner.module.css";

function SpecialistHeroSection({ profile }) {
  const bg = profile?.hero_image || profile?.specialist_photo;
  const name = profile?.specialist_name || "Facing North Travel Specialist";
  const tagline =
    profile?.specialisation_type
      ? `${profile.specialisation_type} Specialist`
      : "Travel Specialist";

  return (
    <div
      className={classes.hero_banner_container}
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h1>{name}</h1>
        <p className={classes.tagline}>{tagline}</p>
      </div>
    </div>
  );
}

export default SpecialistHeroSection;
