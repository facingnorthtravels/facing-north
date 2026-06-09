import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./specialistItineraries.module.css";

const DIFFICULTY_DOT = {
  Easy: "#4b8a52",
  Moderate: "#b97a2b",
  Strenuous: "#a44a3f",
};

function StarRow({ rating }) {
  return (
    <div className={classes.stars}>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src={
            index < Math.floor(rating)
              ? "/assets/cohosted_profile/svgs/star_filled.svg"
              : "/assets/cohosted_profile/svgs/star_empty.svg"
          }
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className={classes.star}
        />
      ))}
    </div>
  );
}

function SpecialistItineraries({ profile }) {
  const itineraries = profile?.itineraries || [];
  if (!itineraries.length) return null;

  const firstName = profile?.specialist_name?.split(" ")[0] || "your specialist";
  const visible = itineraries.slice(0, 4);
  const hasMore = itineraries.length > 4;

  return (
    <section className={classes.itineraries_section} id="itineraries">
      <div className={classes.container}>
        <h2>Itineraries with {firstName}</h2>

        <div className={classes.itineraries_grid}>
          {visible.map((it) => {
            const showReviews =
              typeof it.itinerary_review_count === "number" &&
              it.itinerary_review_count > 0;
            const dotColor =
              DIFFICULTY_DOT[it.itinerary_difficulty] || "#9ca3af";
            const linkHref =
              it.itinerary_href ||
              `/package-tour/${it.itinerary_slug}?specialist=${
                profile?.specialist_slug || profile?.id
              }`;

            return (
              <div key={it.id} className={classes.itinerary_card}>
                <div className={classes.card_image}>
                  <Image
                    src={it.itinerary_image}
                    alt={it.itinerary_title}
                    width={520}
                    height={260}
                    className={classes.image}
                  />
                </div>

                <div className={classes.card_content}>
                  {it.itinerary_country && (
                    <p className={classes.country_line}>
                      {it.itinerary_country}
                    </p>
                  )}

                  <h3>{it.itinerary_title}</h3>

                  <div className={classes.details}>
                    <div className={classes.detail_item}>
                      <Image
                        src="/assets/cohosted_profile/svgs/Vector-3.svg"
                        alt=""
                        width={12}
                        height={14}
                        aria-hidden="true"
                        className={classes.detail_icon}
                      />
                      <span>
                        {it.itinerary_dates}
                        {it.itinerary_duration
                          ? ` · ${it.itinerary_duration}`
                          : ""}
                      </span>
                    </div>

                    <div className={classes.detail_item}>
                      <Image
                        src="/assets/cohosted_profile/svgs/Vector-4.svg"
                        alt=""
                        width={16}
                        height={14}
                        aria-hidden="true"
                        className={classes.detail_icon}
                      />
                      <span>{it.itinerary_group_size}</span>
                    </div>

                    {it.itinerary_difficulty && (
                      <div className={classes.detail_item}>
                        <span
                          className={classes.diff_dot}
                          style={{ backgroundColor: dotColor }}
                          aria-hidden="true"
                        />
                        <span>{it.itinerary_difficulty}</span>
                      </div>
                    )}
                  </div>

                  {showReviews && (
                    <div className={classes.rating_item}>
                      <StarRow rating={it.itinerary_rating} />
                      <span className={classes.rating_text}>
                        {it.itinerary_rating} ({it.itinerary_review_count}{" "}
                        reviews)
                      </span>
                    </div>
                  )}

                  {it.itinerary_price_from && (
                    <p className={classes.price}>
                      From {it.itinerary_price_from} per person
                      <span className={classes.price_note}> (ex-flights)</span>
                    </p>
                  )}

                  <Link href={linkHref} className={classes.view_button}>
                    View Itinerary
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className={classes.view_all_wrapper}>
            <span className={classes.view_all}>
              View all {firstName}&rsquo;s itineraries →
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default SpecialistItineraries;
