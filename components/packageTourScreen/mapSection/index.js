import React from "react";
import classes from "./mapSection.module.css";
import map from "../../../public/assets/package_tour_assets/map.png";

function MapSection() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Map and Itinerary</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus urna.
        In ut justo quis metus rhoncus cursus quis vitae magna. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Cras et finibus urna. In ut
        justo quis metus rhoncus cursus quis vitae magna
      </p>
      <img src={map.src} />
    </div>
  );
}

export default MapSection;
