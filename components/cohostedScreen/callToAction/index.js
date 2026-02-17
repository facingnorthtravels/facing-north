import React from "react";
import classes from "./callToAction.module.css";
import Link from "next/link";

function CallToAction({ profile }) {
  const handleViewAllTours = () => {
    // Navigation logic for viewing all tours
    console.log("View all tours");
  };

  const handleContactHost = () => {
    // Navigation logic for contacting the host
    console.log(`Contact ${profile?.name || "Ray"}`);
  };

  return (
    <div className={classes.cta_section}>
      <div className={classes.overlay} />
      <div className={classes.container}>
        <div className={classes.content}>
          <h2>Join {profile?.name || "Ray"} on His Next Adventure</h2>
          <p>
            Experience Pakistan's stunning landscapes and rich culture with {profile?.name || "Ray"}. Benefit from his photography<br className={classes.lineBreak} />
            mentorship. Limited spots available for upcoming tours.
          </p>
          <div className={classes.buttons}>
            {/* <button 
              className={classes.primary_button}
              onClick={handleViewAllTours}
            >
              View All Tours
            </button> */}
            <Link href={"/contact-form"} 
              className={classes.secondary_button}
              onClick={handleContactHost}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
