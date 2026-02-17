import React, { useState, useEffect, useRef } from "react";
import classes from "./tooltip.module.css";
import logo from "../../public/assets/toolbar/logo_white.svg";
import consultant from "../../public/assets/toolbar/consultant.svg";
import expert from "../../public/assets/toolbar/expert.svg";

function Tooltip({ refArray }) {
  const [height, setHeight] = useState("82px");
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    const tooltipBody = tooltipRef.current.querySelector(
      `.${classes.icons_body}`
    );
    const height = tooltipBody.getBoundingClientRect().height + 20 + 85; // add 20 for padding
    const windowHeight = window.innerHeight - 140;
    const updatedHeight = height > windowHeight ? windowHeight : height;
    setHeight(`${updatedHeight}px`);
  };

  const handleMouseLeave = () => {
    setHeight("82px");
  };

  return (
    <div
      className={classes.tooltip_container}
      style={{ height: height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={tooltipRef}
    >
      <div className={classes.tooltip_body}>
        <img src={logo.src} />
      </div>
      <div className={classes.icons_body_wrapper}>
        <div className={classes.icons_body}>
          {refArray?.map((singleRef, index) => (
            <div
              onClick={() => {
                singleRef.ref.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
              className={classes.single_icon_container}
            >
              <img src={consultant.src} />
              <p>{singleRef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
