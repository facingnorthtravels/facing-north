import React, { useState } from "react";
import classes from "./faqContent.module.css";

function ArrowIcon({ direction = "left" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function TourFaq({ FaqData }) {
  const days = Array.isArray(FaqData) ? FaqData : [];
  const [active, setActive] = useState(0);

  if (!days.length) return null;

  const current = days[active] || days[0];
  const total = days.length;

  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  return (
    <div className={classes.container}>
      {/* Day selector tabs */}
      <div className={classes.day_tabs}>
        {days.map((d, i) => (
          <button
            key={d?.id ?? i}
            type="button"
            onClick={() => setActive(i)}
            className={`${classes.day_tab} ${i === active ? classes.day_tab_active : ""}`}
          >
            Day {(d?.id ?? i) + 1}
          </button>
        ))}
      </div>

      {/* Single day card */}
      <div className={classes.day_card}>
        <div className={classes.day_image_wrap}>
          <img
            src={current?.iternaries_img}
            alt={current?.title || "Itinerary day"}
            className={classes.day_image}
          />
          <div className={classes.day_fade} />

          {/* Nav arrows over the image */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className={`${classes.day_nav} ${classes.day_nav_left}`}
                aria-label="Previous day"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className={`${classes.day_nav} ${classes.day_nav_right}`}
                aria-label="Next day"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          )}
        </div>

        <div className={classes.day_body}>
          <div className={classes.day_header}>
            <span className={classes.day_eyebrow}>
              Day {(current?.id ?? active) + 1} of {total}
            </span>
            {current?.title ? (
              <h3 className={classes.day_title}>{current.title}</h3>
            ) : null}
          </div>

          <p className={classes.day_desc}>{current?.description}</p>

          <div className={classes.day_details}>
            {current?.hotel ? (
              <div className={classes.day_detail_row}>
                <span className={classes.day_detail_label}>Overnight</span>
                <span className={classes.day_detail_value}>{current.hotel}</span>
              </div>
            ) : null}
            {current?.premiumHotel ? (
              <div className={classes.day_detail_row}>
                <span className={classes.day_detail_label}>Premium Hotel</span>
                <span className={classes.day_detail_value}>{current.premiumHotel}</span>
              </div>
            ) : null}
            {current?.deluxeHotel ? (
              <div className={classes.day_detail_row}>
                <span className={classes.day_detail_label}>Deluxe Hotel</span>
                <span className={classes.day_detail_value}>{current.deluxeHotel}</span>
              </div>
            ) : null}
            {current?.activities ? (
              <div className={classes.day_detail_row}>
                <span className={classes.day_detail_label}>Activities</span>
                <span className={classes.day_detail_value}>{current.activities}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Counter + arrows below for mobile/clarity */}
      {total > 1 && (
        <div className={classes.day_footer}>
          <button type="button" onClick={goPrev} className={classes.footer_nav}>
            <ArrowIcon direction="left" /> Prev
          </button>
          <span className={classes.day_counter}>
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button type="button" onClick={goNext} className={classes.footer_nav}>
            Next <ArrowIcon direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TourFaq;
