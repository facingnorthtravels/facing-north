import React from "react";
import Image from "next/image";
import classes from "./hostHighlights.module.css";

function HostHighlights({ profile }) {
  const highlights = profile?.highlights || [];

  return (
    <div className={classes.highlights_section}>
      <div className={classes.container}>
        <h2>Host Highlights</h2>
        
        {highlights.length === 0 ? (
          <p>No highlights available.</p>
        ) : (
          <div className={classes.highlights_grid}>
            {highlights.map((highlight, index) => (
            <div key={index} className={classes.highlight_card}>
              <div className={classes.card_header}>
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  width={46}
                  height={32}
                  className={classes.highlight_icon}
                />
                <h3>{highlight.title}</h3>
              </div>
              <p className={classes.highlight_description}>
                {highlight.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < highlight.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HostHighlights;
