import React from "react";
import classes from "./placesCards.module.css";
import Link from "next/link";

function PlacesCards({ itineraryDetails, pic }) {
  return (
    <Link href={"/package-tour/" + itineraryDetails?.id}>
      <div className={classes.card_body}>
        <div className={classes.overlay} />
        <div className={classes.info_container}>
          <p className={classes.city_name}>{itineraryDetails?.title}</p>
          <p className={classes.province_name}>
            {itineraryDetails.product_code}
          </p>
        </div>
        <div className={classes.info_section}></div>
        <img className={classes.bg_img} src={pic.src} />
      </div>
    </Link>
  );
}

export default PlacesCards;
