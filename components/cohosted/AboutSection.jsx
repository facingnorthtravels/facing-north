import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";

const AboutSection = () => (
  <section className={classes.aboutSection}>
    <div className={classes.sectionContent}>
      <div className={classes.sectionHeader}>
        <h2>What Are Community Trips?</h2>
        <div className={classes.sectionDescription}>
          <p>
            Community trips are collaborative, creator-led journeys through Pakistan designed for fans, 
            followers, storytellers, and explorers. Each trip is:
          </p>
        </div>
      </div>
      <div className={classes.featuresGrid}>
        <div className={classes.featuresColumn}>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <img 
                src="/assets/cohosted/icons/star.svg" 
                alt="Star icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.featureContent}>
              <h3>Hosted by a handpicked influencer or creator</h3>
              <p>
                Travel alongside content creators you admire – learn from their experiences,
                and get insights into their creative process.
              </p>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <img 
                src="/assets/cohosted/icons/palette.svg" 
                alt="Palette icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.featureContent}>
              <h3>Tailored to be immersive, creative, and community-focused</h3>
              <p>
                Experience Pakistan's culture and beauty while capturing stunning content.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.featuresColumn}>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <img 
                src="/assets/cohosted/icons/verified.svg" 
                alt="Verified icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.featureContent}>
              <h3>Fully organized and operated by Facing North Travels</h3>
              <p>
                Benefit from our local expertise and meticulous planning for a seamless travel
                experience.
              </p>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <img 
                src="/assets/cohosted/icons/groups.svg" 
                alt="Groups icon" 
                className={classes.icon}
              />
            </div>
            <div className={classes.featureContent}>
              <h3>Limited to 12-16 travelers for an intimate experience</h3>
              <p>
                Build meaningful connections in a small group setting with like-minded travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sectionFooter}>
        <p>
          This is your chance to explore the mountains, valleys, culture and cuisine of Pakistan —
          while connecting with your favorite creators on a real-world adventure.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
