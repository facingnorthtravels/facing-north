import React from "react";
import classes from "./secondHomePageSection.module.css";

function SecondHomePageSection({ data, desc }) {
  return (
    <div className={classes.container} id="overview">

      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>
            Overview of the location
          </h2>

          <div className={classes.img_container_2}>
            <p>
              {desc ||
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu."}
            </p>
          </div>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img className={classes.img1} src={data?.overviewImg || "/assets/placeholder.webp"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
