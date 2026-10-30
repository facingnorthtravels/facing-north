import React from "react";
import classes from "./tripSnapshot.module.css";

const ICONS = {
  Duration: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 1.5" />
    </>
  ),
  Dates: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </>
  ),
  "Group size": (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 6.5a3 3 0 0 1 0 5.8M17 14c2.2.4 3.5 2 3.5 4.5" />
    </>
  ),
  "Fitness level": (
    <path d="M3 12h4l2-5 4 10 2-5h6" />
  ),
  Host: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
    </>
  ),
  Meals: (
    <>
      <path d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10" />
      <path d="M16 3c-1.8 2.2-2.5 4.4-2.5 7H17v11M17 10V3" />
    </>
  ),
  Hotels: (
    <>
      <path d="M3 20V9l9-5 9 5v11" />
      <path d="M3 20h18M8 20v-5h8v5M8 11h.01M16 11h.01" />
    </>
  ),
  "Main experiences": (
    <>
      <path d="M3 19l6-9 4 6 3-4 5 7H3z" />
      <circle cx="17.5" cy="6.5" r="1.8" />
    </>
  ),
  Price: (
    <>
      <path d="M20 13l-7 7-9-9V4h7l9 9z" />
      <circle cx="8.5" cy="8.5" r="1.4" />
    </>
  ),
};

function TripSnapshot({ items = [], title = "The trip in a nutshell" }) {
  if (!items?.length) return null;

  return (
    <section className={classes.section} id="trip-snapshot">
      <div className={classes.inner}>
        <div className={classes.header}>
          <div className={classes.headerCopy}>
            <span className={classes.eyebrow}>Trip overview</span>
            <h2 className={classes.title}>{title}</h2>
          </div>
          <p className={classes.headerNote}>
            Dates, places to stay, pace and the experiences that shape the
            journey — all at a glance.
          </p>
        </div>
        <div className={classes.grid}>
          {items.map((item) => (
            <article
              className={`${classes.card} ${
                classes[`span${item.span || 1}`] || ""
              } ${item.label === "Price" ? classes.priceCard : ""}`}
              key={item.label}
            >
              <span className={classes.icon} aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[item.label] || ICONS["Main experiences"]}
                </svg>
              </span>
              <div className={classes.body}>
                <p className={classes.label}>{item.label}</p>
                <p className={classes.value}>{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TripSnapshot;
