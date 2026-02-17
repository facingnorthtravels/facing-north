import React from "react";
import classes from "./toursplacesCards.module.css";
import { Router } from "next/router";

function ToursCards({ description, title, pic, link, provinces }) {
  return (
    <div className={classes.card_body}>
      <a href={link} className={classes.card_content}>
        <div className={classes.img_container}>
          {pic ? pic?.src ? <img src={pic.src} className={classes.img} /> : <img src={pic} className={classes.img} /> : ""}
        </div>
        <div className={classes.description_container}>
          <div className={classes.description_container_inner}>
            <h2 className="text-two-line">{title}</h2>
            <h3>{provinces ? provinces : ""}</h3>
            <p>
              {" "}
              {description?.length > 0 && description?.split(" ")?.length > 20
                ? description.split(" ").slice(0, 20).join(" ") + "..."
                : description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ToursCards;
