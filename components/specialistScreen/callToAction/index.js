import React from "react";
import Link from "next/link";
import classes from "./callToAction.module.css";

function autoGeneratePitch(profile) {
  const name = profile?.specialist_name?.split(" ")[0] || "Your specialist";
  const destinations = profile?.highlight_destinations || "Pakistan";
  const years = profile?.highlight_years;
  const max = profile?.max_group_size;
  const tripCount = (profile?.itineraries || []).length;

  const parts = [
    `${name} leads curated, immersive journeys across ${destinations}.`,
    tripCount ? `${tripCount} upcoming trips.` : null,
    years ? `${years} years of expertise.` : null,
    max ? `Limited to ${max} travelers per departure.` : null,
  ].filter(Boolean);

  return parts.join(" ");
}

function SpecialistCallToAction({ profile }) {
  const name = profile?.specialist_name;
  const slug = profile?.specialist_slug || profile?.id;
  const pitch = profile?.cta_pitch_text || autoGeneratePitch(profile);

  return (
    <section className={classes.cta_section} id="book">
      <div className={classes.overlay} />
      <div className={classes.container}>
        <div className={classes.content}>
          <h2>Travel with {name}</h2>
          <p>{pitch}</p>

          <div className={classes.buttons}>
            <a href="#itineraries" className={classes.ghost_button}>
              View Itineraries
            </a>
            <Link
              href={`/contact-form?specialist=${slug}`}
              className={classes.primary_button}
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistCallToAction;
