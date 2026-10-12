import React, { useRef, useState } from "react";
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
  const containerRef = useRef(null);
  const touchStart = useRef(null);

  if (!days.length) return null;

  const current = days[active] || days[0];
  const total = days.length;

  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  // Swipe left / right on the image to change day (vertical drags still scroll the page)
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || total < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  // Mobile pager sits below the day text — after switching, bring the reader back to the top of the day
  const goToFromPager = (i) => {
    setActive(i);
    const top = containerRef.current?.getBoundingClientRect().top;
    if (top != null) {
      window.scrollTo({ top: window.scrollY + top - 100, behavior: "smooth" });
    }
  };

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        {/* ===== Mobile day selector — dropdown replaces the tab row =====
            The native select is laid invisibly over a styled face, so phones keep
            their own picker while the closed state can show a large day + two-line title. */}
        <div className={classes.day_select_wrap}>
          <select
            className={classes.day_select}
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            aria-label="Choose itinerary day"
          >
            {days.map((d, i) => (
              <option key={d?.id ?? i} value={i}>
                Day {(d?.id ?? i) + 1}
                {d?.title ? ` — ${d.title}` : ""}
              </option>
            ))}
          </select>
          <div className={classes.day_select_face} aria-hidden="true">
            <span className={classes.day_select_day}>
              Day {(current?.id ?? active) + 1}
            </span>
            {current?.title ? (
              <span className={classes.day_select_title}>{current.title}</span>
            ) : null}
          </div>
        </div>

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
            <div
              className={classes.day_image_card}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
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

        {/* ===== Mobile pager — previous / next below the day text ===== */}
        {total > 1 && (
          <div className={classes.day_pager}>
            <button
              type="button"
              className={classes.day_pager_btn}
              onClick={() => goToFromPager(active - 1)}
              disabled={active === 0}
            >
              <ArrowIcon direction="left" />
              {active === 0 ? "Previous" : `Day ${active}`}
            </button>
            <button
              type="button"
              className={`${classes.day_pager_btn} ${classes.day_pager_next}`}
              onClick={() => goToFromPager(active + 1)}
              disabled={active === total - 1}
            >
              {active === total - 1 ? "Next" : `Day ${active + 2}`}
              <ArrowIcon direction="right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TourFaq;
