import React from "react";
import Link from "next/link";
import classes from "./bookNowCta.module.css";
import { formatPrice } from "../../../data/coupons";

function BookNowCta({
  id,
  host,
  price,
  hostItineraryDate,
  couponCode,
  couponResult,
}) {
  const href = `/book-now?tour=${id}${
    host?.bookingHost ? `&host=${host.bookingHost}` : ""
  }${couponResult?.isValid ? `&coupon=${couponCode}` : ""}`;

  return (
    <section className={classes.section} id="join-lukas">
      <div className={classes.inner}>
        <p className={classes.eyebrow}>Ready for the Karakoram?</p>
        <h2 className={classes.title}>Join Lukas in April 2027</h2>
        {hostItineraryDate && (
          <p className={classes.date}>{hostItineraryDate}</p>
        )}
        <div className={classes.priceRow}>
          {couponResult?.isValid ? (
            <>
              <span className={classes.originalPrice}>
                <s>{price}</s>
              </span>
              <span className={classes.price}>
                {formatPrice(couponResult.finalPrice)}
              </span>
            </>
          ) : (
            <span className={classes.price}>{price}</span>
          )}
          <span className={classes.perPerson}>per person</span>
        </div>
        <Link href={href} className={classes.button}>
          Book Now
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <p className={classes.note}>
          50% deposit to secure your place · flexible booking terms
        </p>
      </div>
    </section>
  );
}

export default BookNowCta;
