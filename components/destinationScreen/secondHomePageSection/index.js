import React from "react";
import classes from "./secondHomePageSection.module.css";
import BestPlacesCards from "../components/bestPlacesCards";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.places_to_stay_container}>
        <h2 className={classes.title}>Our Experiences</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
        </p>
        <div className={classes.best_cards_container}>
          <BestPlacesCards pic={place_1} />
          <BestPlacesCards pic={place_2} />
          <BestPlacesCards pic={place_3} />
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
