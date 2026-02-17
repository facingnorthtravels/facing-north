import React from "react";
import classes from "./contact.module.css";
import right_arrow from "../../public/assets/contact_us_assets/right_arrow.svg";
import email from "../../public/assets/contact_us_assets/email.svg";
import phone from "../../public/assets/contact_us_assets/phone.svg";
import Link from "next/link";
import ContactNow from "../../components/common/contactNow";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

function Contact() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.contact);

  return (
    <div className={classes.container}>
      <SEOHead metadata={metadata} />
      <div className={classes.hero_banner_container}>
        <div className={classes.overlay} />
        <h2>Find an unforgettable experience in Pakistan</h2>
        <p>
          Looking for a memorable travel experience? Let us help you plan your
          next adventure in Pakistan. Contact us for personalized travel
          recommendations and itinerary planning.
        </p>
      </div>
      <div className={classes.second_section}>
        <h3>
          Don't miss out on your dream trip to Pakistan! Provide us with your
          information today, and one of our representatives will be in touch
          with personalized travel recommendations and itinerary planning to
          make your dream a reality.
        </h3>
      </div>
      <div className={classes.third_section}>
        <div
          style={{ backgroundColor: "transparent" }}
          className={classes.overlay}
        />
        <div className={classes.form_container}>
          <div className={classes.form_content}>
            <h2>Select the area</h2>
            <div className={classes.input_container}>
              <input
                type={"text"}
                placeholder={"Enter"}
                className={classes.input_field}
              />
              <Link href={"/contact-form"}>
                <img src={right_arrow.src} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactNow />
    </div>
  );
}

export default Contact;
