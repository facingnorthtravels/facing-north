import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/services_details_assets/right_arrow.svg";

function next(props) {
  const { className, style, onClick, bottom } = props;

  return (
    <div
      onClick={onClick}
      className={classes.right_btn}
      style={bottom ? { bottom: bottom } : {}}
    >
      <Image
        src={arrow}
        height={"50"}
        width={"50"}
        style={{ cursor: "pointer" }}
        alt="rightimg"
      />
    </div>
  );
}

export default next;
