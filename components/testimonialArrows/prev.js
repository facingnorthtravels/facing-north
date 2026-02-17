import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/testimonial_card_assets/left_arrow.png";
import bg from "../../public/assets/testimonial_card_assets/bg.png";
import { useWindowSize } from "../../utils";
import mobile_arrow from "../../public/assets/services_details_assets/left_arrow.svg";

function prev(props) {
  const { width } = useWindowSize();
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left:
          // (width < 700 && "30%") ||
          (width < 991 && "calc(50% - 65px)") ||
          (width < 1221 && "-135px") ||
          (width > 1220 && "-150px") ||
          "0",
        // bottom: width < 700 ? "-15%" : "0",
        bottom: width < 991 ? "-12%" : "0",
        display: "block",
        zIndex: "+10",
      }}
    >
      {/* {width > 700 ? ( */}
      {width > 991 ? (
        <div className={classes.arrow_container}>
          <div className={classes.overlay} />
          <Image
            src={arrow}
            height={"17"}
            width={"42"}
            style={{ cursor: "pointer", zIndex: "850" }}
            alt="img3"
          />
        </div>
      ) : (
        <div className={classes.arrow_container}>
          <Image
            src={arrow}
            height={"17"}
            width={"42"}
            style={{ cursor: "pointer", zIndex: "850" }}
            alt="img2"
          />
        </div>
      )}
    </div>
  );
}

export default prev;
