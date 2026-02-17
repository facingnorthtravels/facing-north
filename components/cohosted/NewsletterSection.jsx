import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";

const NewsletterSection = () => (
  <section className={classes.newsletterSection}>
    <div className={classes.sectionContent}>
      <div className={classes.sectionHeader}>
        <h2>Get Notified About New Trips</h2>
        <div className={classes.sectionDescription}>
          <p>
            📬 Leave your email and we'll keep you updated about upcoming tours, creator collabs,
            and exclusive early-bird access.
          </p>
        </div>
        <button className={classes.primaryButton}>
          Sign Up for Trip Alerts
        </button>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
