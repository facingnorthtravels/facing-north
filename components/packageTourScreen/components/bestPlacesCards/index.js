import React from "react";
import classes from "./placesCards.module.css";

function BestPlacesCards({ pic }) {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img src={pic.src} className={classes.img} />
      </div>
      <div className={classes.description_container}>
        <div className={classes.description_container_inner}>
          <h2>Altit Fort</h2>
          <h3>Gilgit, Baltistan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestPlacesCards;
