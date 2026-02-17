import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/footer-assets/logo.svg";
import logo_text from "../../public/assets/footer-assets/logo-text.svg";
import facebook from "../../public/assets/footer-assets/facebook.svg";
import tiktok from "../../public/assets/footer-assets/ticktok.svg";
import linkedin from "../../public/assets/footer-assets/linkedin.svg";
import instagram from "../../public/assets/footer-assets/instagram.svg";
import email from "../../public/assets/footer-assets/email.svg";
import call from "../../public/assets/footer-assets/call.svg";
import whatsapp from "../../public/assets/footer-assets/whatsapp.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <img src={logo.src} className={classes.logo} alt="logo" />
            <img src={logo_text.src} className={classes.logo_text} alt="logo" />
          </div>
          {/* <p>
            Join us on an unforgettable journey of discovery as we explore the
            beauty and culture of Pakistan's northern regions. Let us take you
            to Gilgit, Hunza, Chitral, and Swat, and experience the best of this
            region with Facing North.
          </p> */}
          <p>
            From Hunza's hidden valleys to Chitral's ancient echoes, uncover
            Northern Pakistan's magic. Sustainable tours, unforgettable
            memories. Discover Facing North
            <span style={{ display: "block", fontWeight: "600"}}>DTS: 10751</span>
          </p>
          {/* <p className={classes.copyright_text}>
            FACING NORTH . 2022 . ALL RIGHTS RESERVED
          </p> */}
        </div>

        <div className={classes.col_2}>
          <h1>Links</h1>
          <Link href={"/about"}>
            <p>About Us</p>
          </Link>
          <Link href={"/contact-form"}>
            <p>Contact Us</p>
          </Link>
          <Link href={"/faq"}>
            <p>FAQ</p>
          </Link>
          <Link href={"/terms-and-conditions"}>
            <p>Terms & Conditions</p>
          </Link>
        </div>

        <div className={classes.col_2}>
          <h1>Get in Touch</h1>
          <a href="mailto: info@facingnorthtravels.com" className={classes.col_2_email}>
            <img src={email.src} />
            info@facingnorthtravels.com
          </a>
          <a href="tel: +447435782146" className={classes.number}>
            <img src={call.src} />
            +44 7435 782146
          </a>
          <a href="tel: +923367772152" className={classes.number}>
            <img src={whatsapp.src} />
            +92 3367772152
          </a>
          <div className={classes.social_logos_container}>
            <Link target={"_blank"} href={"https://www.facebook.com/share/1JQvN4gEb1/?mibextid=wwXIfr"}>
              <img
                src={facebook.src}
                className={classes.social_media_logo}
                alt="logo"
              />
            </Link>
            <Link target={"_blank"} href={"https://www.instagram.com/facingnorthtravels?igsh=MzduYTNiejB6NGt3"}>
              <img
                src={instagram.src}
                className={classes.social_media_logo}
                alt="logo"
              />
            </Link>
            <Link
              target={"_blank"}
              href={
                "https://www.linkedin.com/company/facing-north-travel-tours/"
              }
            >
              <img
                src={linkedin.src}
                className={classes.social_media_logo}
                alt="logo"
              />
            </Link>
            <Link target={"_blank"} href={"https://www.tiktok.com/@facingnorthpk?_t=ZN-8yq0CApWUuV&_r=1"}>
              <img
                src={tiktok.src}
                className={classes.social_media_logo}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className={classes.copy_write}>
        © FACING NORTH . 2022 . ALL THE RIGHTS ARE RESERVED
      </p>
    </div>
  );
}

export default Footer;
