import React from "react";
import Image from "next/image";
import classes from "./specialistTestimonials.module.css";

function StarRow({ rating }) {
  return (
    <div className={classes.stars} aria-label={`${rating} out of 5 stars`}>
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
        />
      ))}
    </div>
  );
}

function SpecialistTestimonials({ profile }) {
  const reviews = profile?.reviews || [];
  const firstName =
    profile?.specialist_name?.split(" ")[0] || "your specialist";

  return (
    <section className={classes.testimonials_section} id="testimonials">
      <div className={classes.container}>
        <header className={classes.section_header}>
          <p className={classes.eyebrow}>Unedited. Unsolicited. Unrepeatable.</p>
          <h2>What travelers say about {firstName}</h2>
        </header>

        {reviews.length === 0 ? (
          <div className={classes.placeholder_card}>
            <p>
              First departures scheduled. Reviews from past travelers will
              appear here after the first trip. Be the first to travel with{" "}
              {firstName}.
            </p>
            <a href="#itineraries" className={classes.placeholder_cta}>
              Join the first trip →
            </a>
          </div>
        ) : (
          <div className={classes.review_grid}>
            {reviews.map((r) => (
              <article key={r.id} className={classes.review_card}>
                <StarRow rating={r.review_rating} />

                <blockquote className={classes.review_text}>
                  “{r.review_text}”
                </blockquote>

                <div className={classes.reviewer_meta}>
                  <div className={classes.reviewer_name}>
                    {r.reviewer_name}
                    {r.reviewer_location ? `, ${r.reviewer_location}` : ""}
                  </div>
                  {r.review_trip_name && (
                    <div className={classes.review_trip}>
                      {r.review_trip_name}
                    </div>
                  )}
                  {r.review_verified && (
                    <div className={classes.verified_line}>
                      Verified Booking
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SpecialistTestimonials;
