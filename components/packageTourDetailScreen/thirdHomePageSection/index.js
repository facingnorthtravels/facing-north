import React, { useState } from "react";
import classes from "./thirdHomePageSection.module.css";
import TourFaq from "../components/faqContent";
import Link from "next/link";
import { applyCoupon, formatPrice, parsePrice } from "../../../data/coupons";
import { ADVANCE_PAYMENT_PERCENTAGE } from "../../../utils/constants";

function ThirdHomePageSection({ 
  itineraryData, 
  includeData, 
  id, 
  host,
  // Coupon props from parent
  couponCode,
  setCouponCode,
  couponResult,
  setCouponResult,
}) {
  const [couponError, setCouponError] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      setCouponResult(null);
      return;
    }

    setIsApplying(true);
    setCouponError("");

    // Simulate a brief delay for better UX
    setTimeout(() => {
      const result = applyCoupon(couponCode, itineraryData);
      
      if (result.isValid) {
        setCouponResult(result);
        setCouponError("");
      } else {
        setCouponError(result.error);
        setCouponResult(null);
      }
      setIsApplying(false);
    }, 300);
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponResult(null);
    setCouponError("");
  };

  const getDisplayPrice = () => {
    if (couponResult && couponResult.isValid) {
      return formatPrice(couponResult.finalPrice);
    }
    return itineraryData?.price;
  };

  const DATES_DATA = [
    // {
    //   id: 1,
    //   type: "sold out",
    //   title: "KALASH SPRING FESTIVAL",
    //   dates: "5th May 2024 - 19th May 2024",
    //   days: "7",
    //   price: "3,700",
    //   supplement: "+ £655",
    // },
    {
      id: 1,
      type: "available",
      title: itineraryData?.title,
      dates: itineraryData?.overview?.bestTime,
      days: itineraryData?.days,
      price: itineraryData?.price,
      supplement: itineraryData?.singleOccupancy
    },
  ];
  const pdfUrl = itineraryData?.pdf;

  const getHostItinerary = () => {
    if (!host?.upcomingItineraries?.length || host?.pastItineraries?.length < 1)
      return null;
    const allHostItineraries = host.upcomingItineraries.flatMap(
      (section) => section.itineraries || []
    );
    if (allHostItineraries.length > 0) {
      const hostItinerary = allHostItineraries.find(
        (itinerary) => itinerary.itineraryId === id
      );
      return hostItinerary || null;
    }
    return null;
  };

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
    <div className={classes.container}>
      <div className={classes.itinerary_section}>
        <div className={classes.itinerary_heading_container}>
          <div className={classes.heading_container}>
            <p>Itinerary Section</p>
          </div>
          <div className={classes.duration_container}>
            <p>
              {itineraryData?.days} DAYS {itineraryData?.days - 1} NIGHTS
            </p>
          </div>
        </div>
        <TourFaq
          FaqData={itineraryData?.iternaries}
          itineraryImg={itineraryData}
        />
      </div>
      <div className={classes.dates_section} id="dates-and-prices">
        <div
          className={classes.heading_container}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <p>Dates And Prices</p>
        </div>
        <h4>Pakistan: {itineraryData?.title}</h4>
        <p className={classes.date_text}>
          The prices below are based on two sharing and exclude international
          flights. A {ADVANCE_PAYMENT_PERCENTAGE} deposit of the tour price is required at time of
          booking.
        </p>

        {/* Coupon Code Section */}
        {/* {host?.id && ( */}
          <div className={classes.coupon_section}>
            <div className={classes.coupon_header}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5H3C2.45 5 2 5.45 2 6V10C3.1 10 4 10.9 4 12C4 13.1 3.1 14 2 14V18C2 18.55 2.45 19 3 19H21C21.55 19 22 18.55 22 18V14C20.9 14 20 13.1 20 12C20 10.9 20.9 10 22 10V6C22 5.45 21.55 5 21 5ZM21 8.54C19.81 9.23 19 10.53 19 12C19 13.47 19.81 14.77 21 15.46V17H3V15.46C4.19 14.77 5 13.47 5 12C5 10.52 4.2 9.23 3.01 8.54L3 7H21V8.54Z" fill="#286675"/>
                <path d="M9 9H15V11H9V9ZM9 13H15V15H9V13Z" fill="#286675"/>
              </svg>
              <span>Have a coupon code?</span>
            </div>
            <div className={classes.coupon_input_wrapper}>
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className={`${classes.coupon_input} ${couponError ? classes.coupon_input_error : ''} ${couponResult?.isValid ? classes.coupon_input_success : ''}`}
                disabled={couponResult?.isValid}
              />
              {couponResult?.isValid ? (
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className={classes.coupon_remove_btn}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className={classes.coupon_apply_btn}
                  disabled={isApplying}
                >
                  {isApplying ? "Applying..." : "Apply"}
                </button>
              )}
            </div>
            {couponError && (
              <p className={classes.coupon_error}>{couponError}</p>
            )}
            {couponResult?.isValid && (
              <div className={classes.coupon_success}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.59L19 8L10 17Z" fill="#22c55e"/>
                </svg>
                <span>Coupon applied! You save {formatPrice(couponResult.discountAmount)} ({couponResult.discountPercentage}% off)</span>
              </div>
            )}
          </div>
        {/* )} */}

        <div className={classes.date_lists}>
          {DATES_DATA?.map((e) => {
            return (
              <div className={classes.list} key={e.id}>
                <div className={classes.list_text}>
                  {e.type && (
                    <span
                      className={
                        e.type === "available" ? classes.available : ""
                      }
                    >
                      {e.type}
                    </span>
                  )}
                  {e.title && <h4>{e.title}</h4>}
                  {e.dates && !host && <p>{e.dates}</p>}
                  {host && <p>Hosted by: {host?.name}</p>}
                  <p>
                    {host ? (
                      <>{getHostItinerary()?.date}</>
                    ) : (
                      `(${e.days || 10} Days)`
                    )}
                  </p>
                </div>
                {/* {host?.id ? ( */}
                  <div className={classes.list_price}>
                    {couponResult?.isValid ? (
                      <div className={classes.price_block}>
                        <span className={classes.price_label}>Double occupancy</span>
                        <div className={classes.price_with_discount}>
                          <p className={classes.original_price_struck}>{e.price}</p>
                          <p className={classes.discounted_price}>{getDisplayPrice()} / PP</p>
                        </div>
                      </div>
                    ) : (
                      e.price && (
                        <div className={classes.price_block}>
                          <span className={classes.price_label}>Double occupancy</span>
                          <p className={classes.price_regular}>{e.price} / PP</p>
                        </div>
                      )
                    )}
                    {e.supplement && (
                      <span>Additional Single Occupancy: {e.supplement}</span>
                    )}
                  </div>
                {/* ): (
                  <div></div>
                )} */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <Link
                    href={`/book-now?tour=${id}${
                      host ? `&host=${host?.id || ""}` : ""
                    }${couponResult?.isValid ? `&coupon=${couponCode}` : ""}`}
                  >
                    BOOK NOW
                  </Link>
                  {pdfUrl ? (
                    <div className={classes.btn}
                      onClick={handleDownload}
                    >
                      DOWNLOAD TRIP
                    </div>
                  ) : (
                    <Link href={`/contact-form`}>CONTACT US</Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
