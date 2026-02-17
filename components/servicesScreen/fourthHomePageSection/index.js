import React, { useEffect } from "react";
import classes from "./fourthHomePageSection.module.css";
import Link from "next/link";
import { SERVICE_DETAILS } from "../../../data/services-details";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthHomePageSection() {
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
      {SERVICE_DETAILS?.map((service, index) => (
        <div
          key={index}
          className={classes.feedback_section}
          style={{ scrollMarginTop: "120px" }}
        >
          <div
            className={index === 4 ? `${classes.lg_imgs}` : `${classes.imgs}`}
          >
            <img src={service.service_img.src} className={classes.img} />
          </div>
          <div
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className={
              index % 2 === 0
                ? classes.review_container
                : classes.review_container_right
            }
          >
            <h3>{service.title}</h3>

            {service?.statement?.map((statement, index) => (
              <p key={index}>{statement}</p>
            ))}
            <Link href={`/services/${service.id}-${service.title}`}>
              <div className={classes.btn}>
                <p>EXPLORE</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FourthHomePageSection;
