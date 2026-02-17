import React, { useEffect, useState } from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 540; // Same threshold as package tour

      if (offset > threshold) {
        setIsSticky(true);
        document.body.classList.add('sticky-nav-active');
      } else {
        setIsSticky(false);
        document.body.classList.remove('sticky-nav-active');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('sticky-nav-active');
    };
  }, []);

  return (
    <section className={classes.heroSection}>
      <div 
        className={classes.heroBackground}
          style={{
            backgroundImage: `url('/assets/cohosted/hero_section_bg.jpg')`
          }}
      />
      <div className={classes.heroOverlay} />
      <div className={classes.heroContent}>
        <div className={classes.heroText}>
          <div className={classes.heroTitle}>
            <h1>
              Explore Pakistan with<br />Your Favorite Influencer
            </h1>
          </div>
          <div className={classes.heroDescription}>
            <p>
              Join exclusive, small-group adventures community by world-renowned content 
              creators and influencers. Brought to life by Facing North's expert 
              planning and local experience.
            </p>
          </div>
          <div className={classes.heroButtons}>
            <button className={classes.primaryButton}>
              Watch the Journey
            </button>
            <Link href="/book-now" className={classes.secondaryButton}>
              Book Your Spot
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        className={
          isSticky
            ? `${classes.inquiry} ${classes.sticky}`
            : `${classes.inquiry}`
        }
      >
        <div className={classes.nav_btns}>
          <a href="#tours" className={classes.nav_link}>
            Featured Tours
          </a>
          <a href="#how-it-works" className={classes.nav_link}>
            How It Works
          </a>
          <a href="#booking" className={classes.nav_link}>
            Booking Info
          </a>
        </div>
        <div className={classes.starting_btns}>
          <Link href="/book-now" className={classes.nav_contact_btn}>
            Reserve Your Spot
          </Link>
          <Link href="/community-trips" className={classes.nav_contact_btn}>
            Apply to Host a Trip
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
