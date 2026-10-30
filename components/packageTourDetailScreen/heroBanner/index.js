import React, { useEffect, useState, useRef } from "react";
import classes from "./heroBanner.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatPrice } from "../../../data/coupons";
import usePdfDownload from "../../../utils/usePdfDownload";

function HeroBanner({
  title,
  id,
  price,
  days,
  banner_img,
  bgPosition,
  host,
  pdfUrl,
  // Coupon props
  couponCode,
  couponResult,
  // Host itinerary date
  hostItineraryDate,
  // Host-journey variant: point nav at the itinerary anchor instead of the map
  itineraryHref = "#map-&-itinery",
  itineraryLabel = "map & itinery",
  datesHref = "#dates-and-prices",
  datesLabel = "dates and prices",
}) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef(null);
  const inquiryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Calculate threshold dynamically: banner height minus inquiry bar height
      const bannerHeight = bannerRef.current?.offsetHeight || 0;
      const inquiryHeight = inquiryRef.current?.offsetHeight || 0;
      const threshold = bannerHeight - inquiryHeight;

      if (offset > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Download with progress + confirmation (utils/usePdfDownload.js)
  const pdfDownload = usePdfDownload(pdfUrl);

  return (
    <div
      ref={bannerRef}
      className={classes.hero_banner_container}
      style={
        banner_img
          ? {
              backgroundImage: `url(${
                banner_img?.src ? banner_img.src : banner_img
              })`,
              backgroundPosition: bgPosition || "center",
            }
          : {}
      }
    >
      <div className={classes.overlay} />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={classes.headings_container}
      >
        <motion.li
          className={classes.heading}
          style={{ textAlign: "center" }}
          variants={item}
        >
          {title || `Extraordinary Vision unparallel results`}
        </motion.li>
        {/* <motion.li className={classes.subheading} variants={item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
          libero, ornare non libero vitae, vestibulum egestas tellus. Curabitur
          sodales eleifend sem laoreet varius.{" "}
        </motion.li> */}
      </motion.ul>
      <motion.div
        ref={inquiryRef}
        className={
          isSticky
            ? `${classes.inquiry} ${classes.sticky}`
            : `${classes.inquiry}`
        }
      >
        <div className={`${classes.nav_btns} ${classes.nav_host_view}`}>
        {/* <div className={`${classes.nav_btns} ${host?.id ? classes.nav_host_view : ""}`}> */}
          <a href="#overview" className={`${classes.nav_link} ${host?.id ? "" : classes.overview_link}`}>
            overview
          </a>
          <a href={itineraryHref} className={classes.nav_link}>
            {itineraryLabel}
          </a>
          <a href={datesHref} className={classes.nav_link}>
            {datesLabel}
          </a>
        </div>
        <div className={classes.starting_btns}>
          {/* {host?.id && ( */}
            <div className={classes.trip_info}>
              {hostItineraryDate && (
                <span className={classes.trip_date}>{hostItineraryDate}</span>
              )}
              {couponResult?.isValid ? (
                <div className={classes.price_with_discount}>
                  <span className={classes.original_price}><s>{price || "0"}</s></span>
                  <span className={classes.discounted_price}>{formatPrice(couponResult.finalPrice)}</span>
                </div>
              ) : (
                <span className={classes.trip_price}>
                  <span className={classes.price_prefix}>Starting from </span>
                  {price || "0"}
                </span>
              )}
            </div>
          {/* )} */}
          {pdfUrl ? (
            <button
              onClick={pdfDownload.download}
              className={`${classes.nav_contact_btn} ${pdfDownload.isDownloading ? classes.is_downloading : ""}`}
              aria-busy={pdfDownload.isDownloading}
              aria-live="polite"
            >
              {pdfDownload.isDownloading && <span className={classes.spinner} aria-hidden="true" />}
              {pdfDownload.label || "Download"}
            </button>
          ) : (
            <Link className={classes.nav_contact_btn} href={`/contact-form`}>
              Inquiry
            </Link>
          )}
          <Link
            className={`${classes.nav_contact_btn} ${classes.book_now_btn}`}
            href={`/book-now?tour=${id}${
              host?.bookingHost ? `&host=${host.bookingHost}` : ""
            }${couponResult?.isValid ? `&coupon=${couponCode}` : ""}`}
          >
            Book Now
          </Link>
        </div>
      </motion.div>
      {/* <div
        className={
          isSticky
            ? `${classes.inquiry} ${classes.sticky}`
            : `${classes.inquiry}`
        }
      >
        <h4>
          STARTING FROM {price || "0"}
        </h4>
        <div className={classes.starting_btns}>
          <Link href={`/contact-form`}>Make an inquiry</Link>
          <Link href={`/book-now?tour=${id}`}>Book Now</Link>
        </div>
      </div> */}
    </div>
  );
}

export default HeroBanner;
