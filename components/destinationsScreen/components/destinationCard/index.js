import Link from "next/link";
import React from "react";
import classes from "./destinationCard.module.css";

function DestinationCard({ location, id, title, pic, img }) {
  return (
    <Link href={`/destinations/${id}-${title}`}>
      <div className={classes.card_body}>
        <div className={classes.img_container}>
          <img src={img?.src ? img?.src : null} className={classes.img} />
        </div>
        <div className={classes.description_container}>
          <div className={classes.description_container_inner}>
            <h2>{title}</h2>
            <h3>{location}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;
