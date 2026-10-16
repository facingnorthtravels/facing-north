import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import Link from "next/link";
import { getListedHosts } from "../../data/hosts";

const FeaturedToursSection = () => {
  // Every Community Trip host (cohosts + specialists) comes from data/hosts.js
  const tours = getListedHosts().map((host) => ({
    image: host.cardImage,
    status: host.listing.status,
    host: {
      name: host.name,
      image: host.cardImage,
    },
    destinations: host.listing.destinations,
    dates: host.listing.dates,
    statusClass: host.listing.open ? classes.openNow : classes.preLaunch,
    link: host.profileUrl,
    button: host.listing.button,
    buttonClass: host.listing.open ? classes.primaryTourButton : "",
  }));

  return (
    <section id="tours" className={classes.toursSection}>
      <div className={classes.sectionContent}>
        <div className={classes.sectionHeader}>
          <h2>Featured Community Tours</h2>
        </div>
        <div className={classes.toursGrid}>
          {tours.map((tour, idx) => (
            <div className={classes.tourCard} key={idx}>
              <div className={classes.tourImageContainer}>
                <img
                  src={tour.host.image}
                  alt={tour.host.name + " tour"}
                  className={classes.tourImage}
                  loading="lazy"
                  decoding="async"
                />
                <div className={`${classes.tourStatus} ${tour.statusClass}`}>
                  {tour.status}
                </div>
              </div>
              <div className={classes.tourContent}>
                <div className={classes.tourHost}>
                  {/* <img 
                    src={tour.host.image}
                    alt={tour.host.name}
                    className={classes.hostImage}
                  /> */}
                  <h3>{tour.host.name}</h3>
                </div>
                <div className={classes.tourDetails}>
                  <p><strong>Destinations</strong> <span>{tour.destinations}</span></p>
                  <p><strong>Dates</strong> <span>{tour.dates}</span></p>
                  <p><strong>Status</strong> <span>{tour.status}</span></p>
                </div>
                <Link href={tour.link} className={`${classes.tourButton} ${tour.buttonClass || ""}`}>
                  {tour.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedToursSection;
