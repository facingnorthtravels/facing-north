import React from "react";
import Image from "next/image";
import classes from "./guestReviews.module.css";

function GuestReviews({ profile }) {
  const reviews = profile?.reviews || [];

  return (
    <div className={classes.reviews_section}>
      <div className={classes.container}>
        <div className={classes.section_header}>
          <h2>Guest Reviews</h2>
          <div className={classes.overall_rating}>
            <div className={classes.stars}>
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  key={index}
                  src={index < 4 ? "/assets/cohosted_profile/svgs/star_filled.svg" : "/assets/cohosted_profile/svgs/star_empty.svg"}
                  alt="Star"
                  width={18}
                  height={16}
                  className={classes.star}
                />
              ))}
            </div>
            <span className={classes.rating_text}>{profile?.rating || 4.8} ({profile?.reviewCount || 24} reviews)</span>
          </div>
        </div>

        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          <div className={classes.reviews_grid}>
            {reviews.map((review) => (
            <div key={review.id} className={classes.review_card}>
              <div className={classes.reviewer_info}>
                <div 
                  className={classes.avatar}
                  style={{ backgroundImage: `url('${review.avatar}')` }}
                />
                <div className={classes.reviewer_details}>
                  <h4>{review.name}</h4>
                  <div className={classes.review_rating}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Image
                        key={index}
                        src={index < review.rating ? "/assets/cohosted_profile/svgs/star_filled.svg" : "/assets/cohosted_profile/svgs/star_empty.svg"}
                        alt="Star"
                        width={14}
                        height={14}
                        className={classes.star}
                      />
                    ))}
                  </div>
                  <p className={classes.tour_name}>{review.tour}</p>
                </div>
              </div>
              <p className={classes.review_text}>"{review.review}"</p>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GuestReviews;
