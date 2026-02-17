import React from "react";
import classes from "./contactNow.module.css";
import email from "../../../public/assets/contact_us_assets/email.svg";
import phone from "../../../public/assets/contact_us_assets/phone.svg";
const ContactNow = ({ title, para, number, contact_email }) => {
  return (
    <div className={classes.contact_info_section}>
      <h3>{title ? title : "Discover our Homeland"}</h3>
      <div className={classes.contact_us_row}>
        <p className={classes.contact_us_text}>
          {para
            ? para
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisllibero, ornare non libero vitae, vestibulum egestas tellus. Curabitur sodales eleifend sem laoreet varius."}
        </p>
        <a href={"/contact-form"} className={classes.btn}>
          Contact Us
        </a>
      </div>
      <div className={classes.contact_info_row}>
        <div className={classes.single_info_row}>
          <img src={phone.src} />
          <a
            href={`tel:${number ? number : "+44 7435 782146"}`}
            className={classes.contact_text}
          >
            {number ? number : "+44 7435 782146"}
          </a>
        </div>
        <div className={classes.single_info_row}>
          <img src={email.src} />
          <a
            href={`mailto:${contact_email ? contact_email : "info@facingnorthtravels.com"}`}
            className={classes.contact_text}
          >
            {contact_email ? contact_email : "info@facingnorthtravels.com"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactNow;
