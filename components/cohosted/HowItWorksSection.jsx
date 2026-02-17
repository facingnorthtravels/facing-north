import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import Link from "next/link";

const HowItWorksSection = () => (
  <section id="how-it-works" className={classes.howItWorksSection}>
    <div className={classes.sectionContent}>
      <div className={classes.sectionHeader}>
        <h2>How <span className={classes.highlight}>It</span> Work's!</h2>
        <div className={classes.sectionDescription}>
          <p>
            Planning your journey with Facing North is easy and exciting. From finding a creator-led trip that inspires you to connecting with fellow travelers before takeoff, every step is designed to be smooth and transparent.
          </p>
        </div>
      </div>
      <div className={classes.stepsContainer}>
        <div className={classes.stepsColumn + " " + classes.leftColumn  }>
          <div className={classes.step}>
            <div className={classes.stepNumber}>
              <img 
                src="/assets/cohosted/how_its_work_step1.svg" 
                alt="Step 1" 
                className={classes.stepSvg}
              />
            </div>
            <h3>Book your trip with your favorite creator</h3>
            <p>Browse creator-led trips and find one that excites you</p>
          </div>
          
          <div className={classes.step}>
            <div className={classes.stepNumber}>
              <img 
                src="/assets/cohosted/how_its_work_step2.svg" 
                alt="Step 2" 
                className={classes.stepSvg}
              />
            </div>
            <h3>Confirm Your Spot</h3>
            <p>Click "Reserve Your Spot" to view details and secure your place</p>
          </div>
        </div>
        <div className={classes.middlediv}>
          
          <img 
            src="/assets/cohosted/how_it_works_img.png"
            alt="Pakistan landscape"
            className={classes.centerImage1}
          />
        </div>
        <div className={classes.stepsColumn}>
        <div className={classes.step}>
            <div className={classes.stepNumber}>
              <img 
                src="/assets/cohosted/how_its_work_step3.svg" 
                alt="Step 3" 
                className={classes.stepSvg}
              />
            </div>
            <h3>Pre-trip preparation</h3>
            <p>Pay your deposit and receive trip confirmation.</p>
          </div>
          <div className={classes.step}>
            <div className={classes.stepNumber}>
              <img 
                src="/assets/cohosted/how_its_work_step4.svg" 
                alt="Step 4" 
                className={classes.stepSvg}
              />
            </div>
            <h3>Join us abroad and travel</h3>
            <p>Join a private group chat with your creator host and fellow travelers</p>
          </div>
        </div>
      </div>
      <div className={classes.bookingButtons} style={{ marginTop: '4rem' }}>
        <Link href="/book-now"  className={classes.primaryButton}>
          Reserve Your Spot
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
