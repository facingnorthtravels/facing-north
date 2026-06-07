import React from "react";
import classes from "./specialistHighlights.module.css";

function SpecialistHighlights({ profile }) {
  const items = [
    {
      label: "Destinations",
      value: profile?.highlight_destinations,
    },
    {
      label: "Years on the Ground",
      value: profile?.highlight_years
        ? `${profile.highlight_years} years`
        : "",
    },
    {
      label: "Languages",
      value: profile?.highlight_languages,
    },
    {
      label: "Certifications",
      value: profile?.highlight_certifications,
    },
    {
      label: "Specialisation",
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
