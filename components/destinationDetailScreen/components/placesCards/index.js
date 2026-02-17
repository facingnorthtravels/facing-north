import React from "react";
import classes from "./placesCards.module.css";
import compass from "../../../../public/assets/homepage/compass.svg";
import wind from "../../../../public/assets/homepage/wind.svg";
import sun from "../../../../public/assets/homepage/sun.svg";
function PlacesCards({ pic }) {
  return (
    <div className={classes.card_body}>
      <div className={classes.overlay} />
      <div className={classes.info_container}>
        <p className={classes.city_name}>Attabad Lake</p>
        <p className={classes.province_name}>Gligit, Baltistan</p>
        <div className={classes.indicators}>
          <div className={classes.single_indicator}>
            <img className={classes.indicator_img} src={compass.src} />
            <p>NNW</p>
          </div>
          <div className={classes.single_indicator}>
            <img className={classes.indicator_img} src={wind.src} />
            <p>3 mgh</p>
          </div>
          <div className={classes.single_indicator}>
            <img className={classes.indicator_img} src={sun.src} />
            <p>28 deg</p>
          </div>
        </div>
      </div>
      <div className={classes.info_section}></div>
      <img className={classes.bg_img} src={pic.src} />
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna.
      </p>
    </div>
  );
}

export default PlacesCards;
