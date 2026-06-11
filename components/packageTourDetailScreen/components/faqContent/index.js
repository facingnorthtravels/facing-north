import React, { useState } from "react";
import classes from "./faqContent.module.css";

function ArrowIcon({ direction = "left" }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      <div className={classes.inner}>
        {/* ===== Day selector — rectangular cards, side by side ===== */}
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

        {/* ===== Content card: text left / image right, arrows overlaid ===== */}
        <div className={classes.day_card}>
          {/* Left text column */}
          <div className={classes.day_body}>
            <span className={classes.day_eyebrow}>
              Day {(current?.id ?? active) + 1} of {total}
            </span>
            {current?.title ? (
              <h3 className={classes.day_title}>{current.title}</h3>
            ) : null}

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

          {/* Right image column — portrait card */}
          <div className={classes.day_image_col}>
            <div className={classes.day_image_card}>
              <img
                src={current?.iternaries_img}
                alt={current?.title || "Itinerary day"}
                className={classes.day_image}
              />
              <span className={classes.day_counter}>
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Minimal overlaid arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className={`${classes.nav} ${classes.nav_left}`}
                aria-label="Previous day"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className={`${classes.nav} ${classes.nav_right}`}
                aria-label="Next day"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TourFaq;
