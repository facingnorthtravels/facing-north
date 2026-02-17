import React from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import Link from "next/link";
import { ADVANCE_PAYMENT_PERCENTAGE } from "../../utils/constants";

const BookingSection = () => (
  <section id="booking" className={classes.bookingSection}>
    <div className={classes.sectionContent}>
      <div className={classes.sectionHeader}>
        <h2>Booking & Payment Info</h2>
      </div>
      <div className={classes.bookingGrid}>
        <div className={classes.bookingColumn}>
          <div className={classes.bookingItem}>
            <div className={classes.bookingIcon}>
              <img
                src="/assets/cohosted/icons/Vector-4.svg"
                alt="Credit card icon"
                className={classes.icon}
              />
            </div>
            <div className={classes.bookingContent}>
              <h3>Secure Payment Options</h3>
              <p>
                Payments accepted via international bank transfer, Wise, or
                credit card (processing fees may apply)
              </p>
            </div>
          </div>
          <div className={classes.bookingItem}>
            <div className={classes.bookingIcon}>
              <img
                src="/assets/cohosted/icons/Vector-5.svg"
                alt="Piggy bank icon"
                className={classes.icon}
              />
            </div>
            <div className={classes.bookingContent}>
              <h3>Deposit & Payment Schedule</h3>
              <p>You can reserve your spot with a {ADVANCE_PAYMENT_PERCENTAGE} deposit</p>
            </div>
          </div>
        </div>
        <div className={classes.bookingColumn}>
          <div className={classes.bookingItem}>
            <div className={classes.bookingIcon}>
              <img
                src="/assets/cohosted/icons/Vector-5.svg"
                alt="Document icon"
                className={classes.icon}
              />
            </div>
            <div className={classes.bookingContent}>
              <h3>Flexible Policy</h3>
              <p>
                Remaining balance due 30 days before trip departure. Please
                review our{" "}
                <Link href="/terms-and-conditions" style={{ textDecoration: "underline"}}>
                  Terms & Conditions
                </Link>{" "}
                for more details.
              </p>
            </div>
          </div>
          <div className={classes.bookingItem}>
            <div className={classes.bookingIcon}>
              <img
                src="/assets/cohosted/icons/Vector-7.svg"
                alt="Suitcase icon"
                className={classes.icon}
              />
            </div>
            <div className={classes.bookingContent}>
              <h3>Travel Facilities</h3>
              <p>
                All trips include accommodation, domestic transport, activities,
                guides, and meals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bookingButtons}>
        <Link href="/book-now" className={classes.primaryButton}>
          Reserve Your Spot
        </Link>
        <Link href="/faq" className={classes.secondaryBookingButton}>
          View FAQs
        </Link>
      </div>
    </div>
  </section>
);

export default BookingSection;
