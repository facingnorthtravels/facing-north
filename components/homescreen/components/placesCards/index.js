import React from "react";
import classes from "./placesCards.module.css";
import calendar from "../../../../public/assets/places_card/calendar.svg";
import time from "../../../../public/assets/places_card/time.svg";
import globe from "../../../../public/assets/homepage/globe.png";
import sun from "../../../../public/assets/homepage/sun.svg";
import { useRouter } from "next/router";

function PlacesCards({ p, className, fitParent }) {
  const router = useRouter();
  const handleClick = () => {
    if (p?.id) router.push(`/package-tour/${p.id}`);
  };
  const inlineStyle = {
    ...(fitParent
      ? { width: "100%", height: "100%", minHeight: 0 }
      : {}),
    ...(!p?.id ? { cursor: "default" } : {}),
  };
  return (
    <div
      onClick={handleClick}
      className={`${classes.card_body} ${className || ""}`}
      style={inlineStyle}
    >
      <div className={classes.overlay} />
      <div className={classes.info_container}>
        <p className={classes.city_name}>{p?.title}</p>
        <div className={classes.indicators}>
          {p?.country && (
            <div className={classes.single_indicator}>
              <img className={classes.indicator_img} src={globe.src} />
              <p>{p.country}</p>
            </div>
          )}
          {p?.days && (
            <div
              className={`${classes.single_indicator} ${classes.single_indicator_2}`}
            >
              <img className={classes.indicator_img} src={time.src} />
              <p>{p?.days} days</p>
            </div>
          )}
          {p?.overview?.bestTime && (
            <div className={classes.single_indicator}>
              <img className={classes.indicator_img} src={calendar.src} />
              <p>{p?.overview?.bestTime}</p>
            </div>
          )}
          {p?.weather && (
            <div className={classes.single_indicator}>
              <img className={classes.indicator_img} src={sun.src} />
              <p>{p.weather}</p>
            </div>
          )}
        </div>
      </div>
      <div className={classes.info_section}></div>
      <img className={classes.bg_img} src={p?.service_img?.src ? p.service_img?.src : p.service_img} />
    </div>
  );
}

export default PlacesCards;
