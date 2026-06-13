import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import Link from "next/link";

const STEPS = [
  {
    title: "Book Your Trip",
    desc: "Browse creator-led journeys and find the one that inspires you.",
  },
  {
    title: "Confirm Your Spot",
    desc: "Reserve your place to unlock full details and secure your seat.",
  },
  {
    title: "Pre-Trip Preparation",
    desc: "Pay your deposit and receive your confirmation and trip notes.",
  },
  {
    title: "Join Us & Travel",
    desc: "Connect with your host and fellow travellers, then set off together.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className={classes.howItWorksSection}>
    <div className={classes.sectionContent}>
      <div className={classes.howHeader}>
        <span className={classes.howEyebrow}>The Journey</span>
        <h2 className={classes.howTitle}>How it works</h2>
        <p className={classes.howIntro}>
          From finding a creator-led trip that inspires you to connecting with
          fellow travellers before takeoff, every step is designed to feel
          smooth, personal and transparent.
        </p>
      </div>

      <div className={classes.stepsContainer}>
        {STEPS.map((step, i) => (
          <div className={classes.step} key={i}>
            <span className={classes.stepIndex}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={classes.stepTitle}>{step.title}</h3>
            <p className={classes.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className={classes.howCta}>
        <Link href="/book-now" className={classes.primaryButton}>
          Reserve Your Spot
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
