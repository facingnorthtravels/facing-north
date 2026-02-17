import React from "react";
import classes from "./placesCards.module.css";

function BestPlacesCards({
  description,
  isNotHoverable,
  isLeftAligned,
  pic,
  title,
}) {
  return (
    <div
      style={{ borderBottom: isLeftAligned && "none" }}
      className={
        isNotHoverable ? classes.card_body_non_hover : classes.card_body
      }
    >
      <div className={classes.img_container}>
        <img src={pic?.src ? pic?.src : null} className={classes.img} />
      </div>
      <div className={classes.description_container}>
        <div
          style={{ alignItems: isLeftAligned && "flex-start" }}
          className={classes.description_container_inner}
        >
          <h2
            className={classes.heading}
            style={{ textAlign: isLeftAligned && "left" }}
          >
            {title}
          </h2>
          <h3 style={{ textAlign: isLeftAligned && "left" }}>
            {/* Gilgit, Baltistan */}
          </h3>
          <p style={{ textAlign: isLeftAligned && "left" }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BestPlacesCards;
