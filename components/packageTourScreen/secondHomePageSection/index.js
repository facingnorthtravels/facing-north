import React, { useEffect } from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_pic1 from "../../../public/assets/IMAGES/bespoke/about-pak.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function SecondHomePageSection() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          {/* <h2 data-aos="fade-right">Overview of Pakistan</h2> */}
          <h2 data-aos="fade-right">About Pakistan</h2>

          <p data-aos="fade-right">
            Welcome to Pakistan, a magical place where history, culture, and
            breathtaking scenery all coexist harmoniously. Pakistan welcomes
            adventurous travelers to set off on a voyage of exploration where
            spectacular natural beauty coexists with remnants of old
            civilizations. Pakistan provides a unique experience, ranging from
            the towering peaks of the Karakoram Range to the serene lakes and
            lush valleys of the north..
          </p>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img
              data-aos="fade-left"
              className={classes.img1}
              src={second_section_pic1.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
