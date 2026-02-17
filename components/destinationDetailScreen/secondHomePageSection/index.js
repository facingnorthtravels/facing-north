import React from "react";
import classes from "./secondHomePageSection.module.css";
import Image from "next/image";

function SecondHomePageSection({ title, detail, img }) {
  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <Image src={img} className={classes.img} alt={title || "Destination"} />
      </div>
      <div className={classes.content_container}>
        <p className={classes.title}>{title}</p>
        {detail?.map((detail, index) => (
          <p key={index} className={classes.description}>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SecondHomePageSection;
