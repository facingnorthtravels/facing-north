import React from "react";
import classes from "./placesCards.module.css";
import calendar from "../../../../public/assets/places_card/calendar.svg";
import time from "../../../../public/assets/places_card/time.svg";
import { useRouter } from "next/router";

function PlacesCards({ p, className }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/package-tour/${p?.id}`)}
      className={`${classes.card_body} ${className}`}
    >
      <div className={classes.overlay} />
      <div className={classes.info_container}>
        <p className={`${classes.city_name} text-one-line`}>{p?.title}</p>
        {/* <p className={`${classes.province_name} text-one-line`}>
          {p?.overview?.location || p?.provincesCovered}
        </p> */}
        <div className={classes.indicators}>
          {/* {p?.provincesCovered && (
            <div className={classes.single_indicator}>
              <img className={classes.indicator_img} src={location.src} />
              <p>{p?.provincesCovered}</p>
            </div>
          )} */}
          {p?.days && (
            <div
              className={`${classes.single_indicator} ${classes.single_indicator_2}`}
            >
              <img className={classes.indicator_img} src={time.src} />
              <p>{p?.days} days</p>
            </div>
          )}
          {/* <div className={classes.single_indicator}>
            <img className={classes.indicator_img} src={wind.src} />
            <p>3 mgh</p>
          </div> */}
          <div className={classes.single_indicator}>
            <img className={classes.indicator_img} src={calendar.src} />
            <p>{p?.overview?.bestTime}</p>
          </div>
        </div>
      </div>
      <div className={classes.info_section}></div>
      <img className={classes.bg_img} src={p?.service_img?.src ? p.service_img?.src : p.service_img} />
      {/* <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna.
      </p> */}
    </div>
  );
}

export default PlacesCards;
