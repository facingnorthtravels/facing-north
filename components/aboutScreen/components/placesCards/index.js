import React from "react";
import classes from "./placesCards.module.css";

function PlacesCards({ title, description, pic }) {
  return (
    <div className={classes.card_body}>
      <div className={classes.overlay} />
      <div className={classes.info_container}>
        <p className={classes.city_name}>{title}</p>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.info_section}></div>
      <img className={classes.bg_img} src={pic?.src ? pic?.src : null} />
    </div>
  );
}

export default PlacesCards;
