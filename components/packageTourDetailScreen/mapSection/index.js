import React from "react";
import classes from "./mapSection.module.css";
import map from "../../../public/assets/package_tour_assets/map.png";

function MapSection({ mapImage }) {
  return (
    <div className={classes.container} id="map-&-itinery">
      <h1 className={classes.title}>Map and Itinerary</h1>
      {/* <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus urna.
        In ut justo quis metus rhoncus cursus quis vitae magna. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Cras et finibus urna. In ut
        justo quis metus rhoncus cursus quis vitae magna
      </p> */}
      <img src={mapImage || map.src} alt="Tour route map" />
    </div>
  );
}

export default MapSection;
