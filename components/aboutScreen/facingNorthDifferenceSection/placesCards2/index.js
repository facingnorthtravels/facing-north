import React from "react";
import classes from "./placesCards2.module.css";
function PlacesCards2({ pic, className, head, text }) {
  return (
    <div className={`${classes.card_body} ${className}`}>
      <div className={classes.overlay} />
      <div className={classes.info_container}>
        <p className={classes.head}>{head}</p>
        <p className={classes.para}>{text}</p>
      </div>
      <div className={classes.info_section}></div>
      <img className={classes.bg_img} src={pic.src} />
      {/* <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna.
      </p> */}
    </div>
  );
}

export default PlacesCards2;
