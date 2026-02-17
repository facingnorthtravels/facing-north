import React from "react";
import classes from "./heroBanner.module.css";

function CohostedHeroSection({ profile }) {
  return (
    <div className={classes.hero_banner_container} style={{backgroundImage:`url(${profile.heroImage})`}}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h1>2026 Community Trip Leaders</h1>
        {/* <h1>Meet the Hosts <br /> 2026 Community Trip Leaders</h1> */}
        {/* <h1>{profile?.name || "Cohosted Profile"}</h1> */}
        <p>
          {/* Join exclusive small-group adventures cohosted by {profile?.name || "world-renowned content"}<br className={classes.lineBreak} />
          creators and explore one-of-a-kind destinations from a unique local perspective. */}
          Meet the creators who will lead the 2026 Facing North Community Trips.
          Each of them has explored Pakistan through their lens, now it’s your turn to see it with them.
        </p>
      </div>
    </div>
  );
}

export default CohostedHeroSection;
