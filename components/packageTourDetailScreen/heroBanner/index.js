import React, { useEffect, useState, useRef } from "react";
import classes from "./heroBanner.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatPrice } from "../../../data/coupons";

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

  const handleDownload = async () => {
    if (!pdfUrl) return;
    const downloadURL = `${process.env.NEXT_PUBLIC_SITE_URL}/${pdfUrl}`
    // console.log("Download Url: ", downloadURL)
    // window.open(downloadURL, "_blank");
    try {
      const response = await fetch(`${downloadURL}`, {
        method: "GET",
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const fileName = pdfUrl.split('/').pop() || 'trip.pdf';
      const link = document.createElement("a");
      link.href = url;
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(downloadURL, "_blank");
    }
  };

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
          <a href="#map-&-itinery" className={classes.nav_link}>
            map & itinery
          </a>
          <a href="#dates-and-prices" className={classes.nav_link}>
            dates and prices
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
                <span className={classes.trip_price}>{price || "0"}</span>
              )}
            </div>
          {/* )} */}
          {pdfUrl ? (
            <button
              onClick={handleDownload}
              className={classes.nav_contact_btn}
            >
              Download
            </button>
          ) : (
            <Link className={classes.nav_contact_btn} href={`/contact-form`}>
              Inquiry
            </Link>
          )}
          <Link
            className={`${classes.nav_contact_btn} ${classes.book_now_btn}`}
            href={`/book-now?tour=${id}${
              host ? `&host=${host?.id || ""}` : ""
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
