import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";

const PartnerSection = () => (
  <section className={classes.partnerSection}>
    <div 
      className={classes.partnerBackground}
      style={{
        backgroundImage: `url('/assets/cohosted/travel_with_us_bg.jpg')`
      }}
    />
    <div className={classes.partnerOverlay} />
    <div className={classes.partnerContent}>
      <div className={classes.partnerText}>
        <h2>
          <span className={classes.partnerTitle}>PARTNER</span>
          <span className={classes.partnerSubtitle}>WITH US</span>
        </h2>
        <p>
          Are you a content creator, coach, or community leader who wants to host a trip 
          to Pakistan? Let's create something unforgettable together.
        </p>
        <button className={classes.primaryButton}>
          Become a Partner
        </button>
      </div>
    </div>
  </section>
);

export default PartnerSection;
