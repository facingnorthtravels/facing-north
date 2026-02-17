import React from "react";
import classes from "./info.module.css";
import email from "/public/assets/contact_us_assets/email.svg";
import phone from "/public/assets/contact_us_assets/phone.svg";
import Image from "next/image";
const Contact_info = () => {
  return (
    <div className={classes.contact_info_section}>
      <h3>Start planning your trip With Us</h3>
      <div className={classes.contact_us_row}>
        <p className={classes.contact_us_text}>
          Ready to explore Pakistan? Let us help you plan the perfect trip.
          Contact us now for personalized travel recommendations and itinerary
          planning.
        </p>
        <div className={classes.btn}>
          <p>Contact Us</p>
        </div>
      </div>
      <div className={classes.contact_info_row}>
        <div className={classes.single_info_row}>
          <Image src={phone.src} width={34} height={34} alt="Phone" />
          <p className={classes.contact_text}>03115596785</p>
        </div>
        <div className={classes.single_info_row}>
          <Image src={email.src} width={34} height={34} alt="Email" />
          <p className={classes.contact_text}>info@abcd.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact_info;
