import React from "react";
import classes from "./secondHomePageSection.module.css";

function SecondHomePageSection({ data }) {
  return (
    <div className={classes.container}>
      {/* <img src={second_section_bg.src} className={classes.bg} /> */}
      <div className={classes.second_section}>
        <h3>{data?.statement[0]}</h3>
      </div>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>
            {data?.second_title ||
              "Perfect recreation in an unmatched location"}
          </h2>
          <p>{data?.detailed_description}</p>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img className={classes.img1} src={data?.exp_img?.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
