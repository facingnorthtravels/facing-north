import React from "react";
import classes from "./specialistHighlights.module.css";

function SpecialistHighlights({ profile }) {
  const labels = profile?.highlight_labels || {};

  const items = [
    {
      label: labels.destinations || "Destinations",
      value: profile?.highlight_destinations,
    },
    {
      label: labels.years || "Years on the Ground",
      value: profile?.highlight_years
        ? `${profile.highlight_years} years`
        : "",
    },
    {
      label: labels.languages || "Languages",
      value: profile?.highlight_languages,
    },
    {
      label: labels.certifications || "Certifications",
      value: profile?.highlight_certifications,
    },
    {
      label: labels.specialisation || "Specialisation",
      value: profile?.highlight_specialisation,
    },
  ].filter((item) => !!item.value);

  return (
    <section className={classes.highlights_section}>
      <div className={classes.container}>
        <div className={classes.highlights_list}>
          {items.map((item, index) => (
            <div key={index} className={classes.item}>
              <dt className={classes.label}>{item.label}</dt>
              <dd className={classes.value}>{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialistHighlights;
