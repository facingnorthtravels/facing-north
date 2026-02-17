import React, { useEffect } from "react";
import classes from "./secondHomePageSection.module.css";
import pic from "../../../public/assets/about_us_cards/5.jpg";

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
          {/* <h2 data-aos="fade-left">Exclusive to your world</h2> */}
          <h2 data-aos="fade-left">Finding your true north</h2>
          {/* <p data-aos="fade-left">
            Experience the ultimate adventure in Pakistan with our custom
            itineraries that combine trekking, yoga, and outdoor adventures.
            From the Karakoram mountain range to the Neelum River, Pakistan has
            something for every traveler. Let us craft an unforgettable journey.
            Don't miss out on this opportunity to explore the very best that
            Pakistan has to offer.
          </p> */}
          <p data-aos="fade-left">
            Forget the map, forget the guidebook. In Pakistan, your journey is
            guided by the whispers of glaciers, the laughter of welcoming
            communities, and the thrill of exploring the unknown. We provide a
            unique experience, ranging from the towering peaks of the Karakoram
            Range to the serene lakes and lush valleys of the north
          </p>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img data-aos="fade-right" className={classes.img1} src={pic.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
