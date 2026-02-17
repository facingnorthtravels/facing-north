import React from "react";
import classes from "./placesCards.module.css";

function BestPlacesCards({ description, title, pic, provinceCoverd }) {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img src={pic.src} className={classes.img} />
      </div>
      <div className={classes.description_container}>
        <div className={classes.description_container_inner}>
          <h2>{title}</h2>
          <h3>{provinceCoverd}</h3>
          <p>
            {" "}
            {description.split(" ").length > 20
              ? description.split(" ").slice(0, 20).join(" ") + "..."
              : description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestPlacesCards;
