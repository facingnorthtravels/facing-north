import React from "react";
import classes from "./heroBanner.module.css";
import { motion } from "framer-motion";

function HeroBanner({
  heading,
  heading2,
  subheading1,
  subheading2,
  backgroundImg,
  height,
  style,
  video,
}) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // console.log(`url("${backgroundImg}")`);

  const divStyle = {
    backgroundImage: `url("${backgroundImg}")`,
    backgroundPosition: "center",
    opacity: 1,
    height: height,
    /* You can add more background properties here */
  };

  // console.log(`url("${backgroundImg}")`);
  return (
    <div
      style={style ? style : backgroundImg && divStyle}
      className={classes.hero_banner_container}
    >
      {video ? (
        <video
          autoPlay
          loop
          muted
          src={video}
          playsInline // important for iPhone
          preload="auto" // help Safari size video early
        />
      ) : (
        ""
      )}
      <div className={classes.overlay} />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={classes.headings_container}
      >
        <motion.li
          className={classes.heading}
          style={{ textAlign: "center" }}
          variants={item}
        >
          {heading}
          <br />
          {heading2}
        </motion.li>
        {(subheading1 || subheading2) && (
          <motion.li className={classes.subheading} variants={item}>
            {subheading1}
            <br />
            {subheading2}
          </motion.li>
        )}
      </motion.ul>
    </div>
  );
}

export default HeroBanner;
