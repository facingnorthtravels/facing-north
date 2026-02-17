import React from "react";
import classes from "./toursplacesCards.module.css";
import hunza from "/public/assets/destination_cards/hunza.jpg";
import Link from "next/link";
function ToursCards({
  description,
  title,
  pic,
  link,
  location,
  id,
  hideLink,
  showPara,
}) {
  return (
    <div className={classes.card_body} 
    style={showPara && { minHeight: "100%" }}
    >
      {hideLink && showPara ? (
        <div className={classes.card_content}>
          <div className={classes.img_container} style={{ height: "250px" }}>
            <img
              src={pic?.src || hunza.src}
              style={{ height: "auto" }}
              className={classes.img}
            />
          </div>
          <div className={classes.description_container}>
            <div className={classes.description_container_inner}>
              <h2 className={classes.showHead}>{title}</h2>
              {location ? <h3>{location}</h3> : ""}
              <p className={classes.showspara}>{description}</p>
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={link || `/destinations/${id}-${title}`}
          className={classes.card_content}
        >
          <div className={classes.img_container}>
            <img src={pic?.src || hunza.src} className={classes.img} />
          </div>
          <div className={classes.description_container}>
            <div className={classes.description_container_inner}>
              <h2>{title}</h2>
              {location ? <h3>{location}</h3> : ""}
              <p>
                {" "}
                {description?.length > 0 && description?.split(" ")?.length > 20
                  ? description.split(" ").slice(0, 20).join(" ") + "..."
                  : description}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ToursCards;
