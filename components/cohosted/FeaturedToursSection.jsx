import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import Link from "next/link";
import { getAllCohostedProfiles } from "../../data/cohosted-profiles";

const FeaturedToursSection = () => {
  const profiles = getAllCohostedProfiles();
  
  const tours = profiles.map(profile => ({
    image: profile.heroImage,
    status: profile.tour.status,
    host: {
      name: profile.name,
      image: profile.profileImage
    },
    destinations: profile.tour.destinations,
    dates: profile.tour.dates,
    statusClass: classes[profile.tour.buttonClass] || classes.preLaunch,
    link: `/cohosted-profile/${profile.id}`,
    button: profile.tour.button,
    buttonClass: profile.tour.buttonClass === 'openNow' ? classes.primaryTourButton : ""
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
                  <p><strong>Destinations:</strong> {tour.destinations}</p>
                  <p><strong>Dates:</strong> {tour.dates}</p>
                  <p><strong>Status:</strong> <span>{tour.status}</span></p>
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
