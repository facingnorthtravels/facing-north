import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";

const WhyJoinSection = () => (
  <section className={classes.whyJoinSection}>
    <div className={classes.sectionContent}>
      <div className={classes.sectionHeader}>
        <h2>Why Join a Community Trip?</h2>
      </div>
      <div className={classes.benefitsGrid}>
        <div className={classes.benefitsColumn}>
          <div className={classes.benefit}>
            <div className={classes.benefitIcon}>
              <img 
                src="/assets/cohosted/icons/Vector-6.svg" 
                alt="Two people icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.benefitContent}>
              <h3>Travel with Like-Minded People</h3>
              <p>
                Connect with fellow travelers who share your passion for adventure,
                photography, and authentic cultural experiences.
              </p>
            </div>
          </div>
          <div className={classes.benefit}>
            <div className={classes.benefitIcon}>
              <img 
                src="/assets/cohosted/icons/Vector-2.svg" 
                alt="Camera icon"
                className={classes.icon}
              />
            </div>
            <div className={classes.benefitContent}>
              <h3>Photography Masterclass</h3>
              <p>
                Learn photography techniques from professional creators while
                capturing Pakistan's most stunning landscapes.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.benefitsColumn}>
          <div className={classes.benefit}>
            <div className={classes.benefitIcon}>
              <img 
                src="/assets/cohosted/icons/Vector.svg" 
                alt="Shield icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.benefitContent}>
              <h3>Safety and Security</h3>
              <p>
                Travel with confidence knowing our experienced guides ensure your
                safety throughout the journey in unfamiliar territories.
              </p>
            </div>
          </div>
          <div className={classes.benefit}>
            <div className={classes.benefitIcon}>
              <img 
                src="/assets/cohosted/icons/Vector-3.svg" 
                alt="Compass icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.benefitContent}>
              <h3>Hidden Gems Access</h3>
              <p>
                Discover off-the-beaten-path locations that only locals know about,
                providing unique experiences beyond typical tourist routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyJoinSection;
