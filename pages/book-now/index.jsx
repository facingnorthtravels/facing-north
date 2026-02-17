import React, { useEffect, useState } from "react";
import classes from "./bookNow.module.css";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import card_img from "/public/assets/book-now/card_img.png";
import { Country, City } from "country-state-city";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { TOUR_PAKAGE } from "../../data/tours-pakages";
import Head from "next/head";
import { getCohostedProfileById } from "../../data/cohosted-profiles";
import { applyCoupon, formatPrice, parsePrice } from "../../data/coupons";

const BookNow = () => {
  const [formData, setFormData] = useState({
    numberOfTravellers: "",
    fullName: "",
    passportNumber: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
    /////Trip Options/////////////
    additionalInfo: "",
    room: "Single Room not Required",
    flight: "Not flight quote required",
    conditions: false,
    itinerary: false,
    trip_names: false,
    travelAdvice: false,
    newsSubscription: false,
    /////Confirmation/////////////
    confirmName: "",
    confirmEmail: "",
    confirmPhone: "",
  });

  // Coupon state
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // Payment state
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      setCouponResult(null);
      return;
    }

    setIsApplyingCoupon(true);
    setCouponError("");

    setTimeout(() => {
      const result = applyCoupon(couponCode, tourDetailData);
      
      if (result.isValid) {
        setCouponResult(result);
        setCouponError("");
        toast.success(`Coupon applied! You save ${formatPrice(result.discountAmount)}`);
      } else {
        setCouponError(result.error);
        setCouponResult(null);
      }
      setIsApplyingCoupon(false);
    }, 300);
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponResult(null);
    setCouponError("");
    toast.success("Coupon removed");
  };

  const getDisplayPrice = () => {
    if (couponResult && couponResult.isValid) {
      return formatPrice(couponResult.finalPrice);
    }
    return tourDetailData?.price;
  };

  const PassengerNext = () => {
    const requiredFields = [
      "numberOfTravellers",
      "fullName",
      "passportNumber",
      "gender",
      "dateOfBirth",
      "phone",
      "email",
      "country",
      "city",
      "address",
    ];
    const isValid = requiredFields.every(
      (field) => formData[field] && formData[field].toString().trim() !== ""
    );
    if (isValid) {
      setTabBg(2);
    } else {
      toast.error("Please fill in all required fields");
    }
  };
  const TripNext = () => {
    const requiredFields = [
      "conditions",
      "itinerary",
      "trip_names",
      "travelAdvice",
    ];
    const isValid = requiredFields.every((field) => formData[field] === true);
    if (isValid) {
      setTabBg(3);
    } else {
      toast.error("Please accept all required terms and conditions");
    }
  };
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [host, setHost] = useState();
  const divStyle = {
    backgroundImage: `url(/assets/book-now/banner.png)`,
    backgroundPosition: "bottom",
    opacity: 1,
    height: "500px",
  };
  const [tabBg, setTabBg] = useState(1);
  const [tourDetailData, setTourDetailData] = useState();

  // Session storage key for preserving form state
  const FORM_STATE_KEY = 'booking_form_state';

  // Restore form state from sessionStorage on mount (for back button navigation)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = sessionStorage.getItem(FORM_STATE_KEY);
      if (savedState) {
        try {
          const parsed = JSON.parse(savedState);
          if (parsed.formData) setFormData(parsed.formData);
          if (parsed.tabBg) setTabBg(parsed.tabBg);
          if (parsed.couponCode) setCouponCode(parsed.couponCode);
          if (parsed.couponResult) setCouponResult(parsed.couponResult);
          if (parsed.selectedCountry) setSelectedCountry(parsed.selectedCountry);
          if (parsed.selectedCity) setSelectedCity(parsed.selectedCity);
          // Clear the saved state after restoring
          sessionStorage.removeItem(FORM_STATE_KEY);
          // toast.success('Your booking details have been restored');
        } catch (e) {
          console.error('Error restoring form state:', e);
          sessionStorage.removeItem(FORM_STATE_KEY);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (router?.query?.tour) {
      TOUR_PAKAGE?.map((tour, index) => {
        if (tour.id === router?.query?.tour) {
          setTourDetailData(tour);
        }
      });
    }
    if (router?.query?.host) {
      const hostProfile = getCohostedProfileById(router?.query?.host);
      setHost(hostProfile);
    }
    // Apply coupon from URL if present
    if (router?.query?.coupon) {
      setCouponCode(router.query.coupon.toUpperCase());
    }
  }, [router?.query]);

  // Auto-apply coupon when both tourDetailData and couponCode are available
  useEffect(() => {
    if (tourDetailData && couponCode && !couponResult) {
      const result = applyCoupon(couponCode, tourDetailData);
      if (result.isValid) {
        setCouponResult(result);
      }
    }
  }, [tourDetailData, couponCode]);

  const confrim_svg = [
    <svg
      key="confirm-svg"
      width="30%"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5139 24.766L32.1102 32.7132C33.4712 33.734 35.3889 33.5334 36.5091 32.2531L57.2891 8.50458"
        stroke={tabBg === 3 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
        strokeLinecap="round"
      />
      <path
        d="M60.5412 31.2706C60.5412 37.3865 58.6255 43.3488 55.0631 48.3201C51.5007 53.2914 46.4707 57.0219 40.6793 58.9878C34.888 60.9537 28.6263 61.0562 22.7738 59.2808C16.9212 57.5055 11.7718 53.9415 8.04867 49.0894C4.32555 44.2373 2.21578 38.3409 2.01567 32.2283C1.81557 26.1157 3.53517 20.0939 6.93299 15.0087C10.3308 9.92354 15.2361 6.0304 20.96 3.87607C26.6839 1.72175 32.9389 1.41446 38.8464 2.99737"
        stroke={tabBg === 3 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
        strokeLinecap="round"
      />
    </svg>,
  ];
  const trip_svg = [
    <svg
      key="trip-svg"
      width="40%"
      viewBox="0 0 78 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14.5372C2 10.1025 2 7.8852 2.87672 6.19744C3.61552 4.77518 4.77518 3.61552 6.19744 2.87672C7.8852 2 10.1025 2 14.5372 2H63.0075C67.4422 2 69.6595 2 71.3472 2.87672C72.7695 3.61552 73.9292 4.77518 74.668 6.19744C75.5447 7.8852 75.5447 10.1025 75.5447 14.5372V41.3767C75.5447 45.8114 75.5447 48.0287 74.668 49.7165C73.9292 51.1387 72.7695 52.2984 71.3472 53.0372C69.6595 53.9139 67.4422 53.9139 63.0075 53.9139H14.5372C10.1025 53.9139 7.8852 53.9139 6.19744 53.0372C4.77518 52.2984 3.61552 51.1387 2.87672 49.7165C2 48.0287 2 45.8114 2 41.3767V14.5372Z"
        stroke={tabBg === 2 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
      />
      <path
        d="M2 19.3047L75.5447 19.3047"
        stroke={tabBg === 2 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
        strokeLinecap="round"
      />
      <circle cx="14.9785" cy="40.9354" r="2.16308" fill="#D9D9D9" />
    </svg>,
  ];
  const passenger_svg = [
    <svg
      key="passenger-svg"
      width="30%"
      viewBox="0 0 68 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="33.682"
        cy="12.9785"
        r="11.1376"
        stroke={tabBg === 1 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
        strokeLinecap="round"
      />
      <path
        d="M41.0513 6.32816C41.9388 4.79098 43.2622 3.55149 44.8541 2.76643C46.4461 1.98138 48.2351 1.68601 49.9949 1.9177C51.7547 2.14938 53.4062 2.8977 54.7407 4.06803C56.0752 5.23836 57.0327 6.77813 57.4921 8.49263C57.9515 10.2071 57.8922 12.0194 57.3217 13.7001C56.7511 15.3809 55.695 16.8548 54.2868 17.9353C52.8786 19.0159 51.1816 19.6546 49.4104 19.7707C47.6392 19.8867 45.8734 19.475 44.3362 18.5875"
        stroke={tabBg === 1 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
      />
      <path
        d="M26.3126 6.32816C25.4251 4.79098 24.1017 3.55149 22.5097 2.76643C20.9178 1.98138 19.1288 1.68601 17.369 1.9177C15.6092 2.14938 13.9577 2.8977 12.6232 4.06803C11.2887 5.23836 10.3312 6.77813 9.87176 8.49263C9.41236 10.2071 9.47169 12.0194 10.0422 13.7001C10.6128 15.3809 11.6689 16.8548 13.0771 17.9353C14.4853 19.0159 16.1823 19.6546 17.9535 19.7707C19.7247 19.8867 21.4905 19.475 23.0277 18.5875"
        stroke={tabBg === 1 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
      />
      <path
        d="M33.6819 32.4462C51.3337 32.4462 55.8903 46.7318 57.0665 54.1072C57.4428 56.4666 55.5389 58.4031 53.1496 58.4031H14.2142C11.8249 58.4031 9.92105 56.4666 10.2973 54.1072C11.4736 46.7318 16.0302 32.4462 33.6819 32.4462Z"
        stroke={tabBg === 1 ? "white" : "#A6A6A6"}
        strokeWidth="3.68184"
        strokeLinecap="round"
      />
      <path
        d="M65.2479 45.0623L63.4621 45.5095L65.2479 45.0623ZM38.3849 32.8178L37.0254 31.5766L34.7411 34.0785L38.0831 34.6338L38.3849 32.8178ZM56.0971 49.7508L54.3287 50.2624L54.7133 51.5917H56.0971V49.7508ZM48.8235 29.9609C53.396 29.9609 56.6058 32.2056 58.9375 35.3111C61.3081 38.4683 62.6915 42.4323 63.4621 45.5095L67.0337 44.6151C66.2113 41.3311 64.6776 36.8239 61.8817 33.1004C59.047 29.325 54.841 26.2791 48.8235 26.2791V29.9609ZM39.7444 34.0591C41.9591 31.6334 44.8705 29.9609 48.8235 29.9609V26.2791C43.6632 26.2791 39.812 28.5245 37.0254 31.5766L39.7444 34.0591ZM38.0831 34.6338C48.2124 36.3172 52.487 43.8966 54.3287 50.2624L57.8655 49.2392C55.8431 42.249 50.8388 33.0213 38.6867 31.0018L38.0831 34.6338ZM61.3477 47.9099H56.0971V51.5917H61.3477V47.9099ZM63.4621 45.5095C63.7528 46.6704 62.8795 47.9099 61.3477 47.9099V51.5917C64.9348 51.5917 67.9865 48.4198 67.0337 44.6151L63.4621 45.5095Z"
        fill={tabBg === 1 ? "white" : "#A6A6A6"}
      />
      <path
        d="M28.9789 32.8178L29.2807 34.6339L32.6227 34.0785L30.3384 31.5766L28.9789 32.8178ZM2.11579 45.0623L0.33002 44.6151H0.33002L2.11579 45.0623ZM11.2667 49.7508V51.5917H12.6505L13.0351 50.2624L11.2667 49.7508ZM18.5403 29.9609C22.4933 29.9609 25.4047 31.6334 27.6194 34.0591L30.3384 31.5766C27.5518 28.5245 23.7006 26.2791 18.5403 26.2791V29.9609ZM3.90157 45.5095C4.67219 42.4322 6.05564 38.4683 8.4263 35.311C10.758 32.2056 13.9678 29.9609 18.5403 29.9609V26.2791C12.5228 26.2791 8.31679 29.325 5.48203 33.1003C2.6862 36.8239 1.15242 41.3311 0.33002 44.6151L3.90157 45.5095ZM6.01603 47.9099C4.48424 47.9099 3.61086 46.6704 3.90157 45.5095L0.33002 44.6151C-0.622782 48.4198 2.42892 51.5917 6.01603 51.5917V47.9099ZM11.2667 47.9099H6.01603V51.5917H11.2667V47.9099ZM13.0351 50.2624C14.8768 43.8966 19.1514 36.3172 29.2807 34.6339L28.6771 31.0018C16.5249 33.0213 11.5207 42.249 9.49833 49.2392L13.0351 50.2624Z"
        fill={tabBg === 1 ? "white" : "#A6A6A6"}
      />
    </svg>,
  ];

  const handleChange = (field, value) => {
    setFormData((prevData) => {
      const newValue = value === undefined ? !prevData[field] : value;

      return {
        ...prevData,
        [field]: newValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SendMail();
  };
  const allCountries = Country?.getAllCountries();
  const states =
    selectedCountry !== "" ? City.getCitiesOfCountry(selectedCountry) : [];
  const [isSendingEnquiry, setIsSendingEnquiry] = useState(false);

  const SendMail = async () => {
    const hostItinerary = getHostItinerary();
    
    // Validate confirmation fields
    if (!formData.confirmName || !formData.confirmEmail || !formData.confirmPhone) {
      toast.error("Please fill in all confirmation details");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.confirmEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSendingEnquiry(true);
    
    const Data = {
      // Passenger Details
      numberOfTravellers: formData.numberOfTravellers,
      fullName: formData.fullName,
      passportNumber: formData.passportNumber,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      phone: formData.phone,
      email: formData.email,
      country: formData.country,
      city: formData.city,
      postalCode: formData.postalCode,
      address: formData.address,
      // Trip Options
      room: formData.room,
      flight: formData.flight,
      additionalInfo: formData.additionalInfo,
      conditions: formData.conditions ? "Accepted" : "Not Accepted",
      itinerary: formData.itinerary ? "Read" : "Not Read",
      trip_names: formData.trip_names ? "Confirmed" : "Not Confirmed",
      travelAdvice: formData.travelAdvice ? "Read" : "Not Read",
      newsSubscription: formData.newsSubscription ? "Yes" : "No",
      // Confirmation
      confirmName: formData.confirmName,
      confirmEmail: formData.confirmEmail,
      confirmPhone: formData.confirmPhone,
      // Tour Details
      tourName: tourDetailData?.title || "N/A",
      tourPrice: tourDetailData?.price || "N/A",
      tourDuration: tourDetailData?.days || "N/A",
      // Host Details (if applicable)
      hostName: host?.name || "N/A",
      hostDate: hostItinerary?.date || "N/A",
      // Coupon Details
      couponCode: couponResult?.isValid ? couponCode : "N/A",
      couponDiscount: couponResult?.isValid ? formatPrice(couponResult.discountAmount) : "N/A",
      discountPercentage: couponResult?.isValid ? `${couponResult.discountPercentage}%` : "N/A",
      originalPrice: tourDetailData?.price || "N/A",
      finalPrice: couponResult?.isValid ? formatPrice(couponResult.finalPrice) : (tourDetailData?.price || "N/A"),
    };

    try {
      const response = await fetch("/api/booking/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry");
      }
      
      toast.success("Booking Request Sent Successfully!");
      // Reset form
      setFormData({
        numberOfTravellers: "",
        fullName: "",
        passportNumber: "",
        gender: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        postalCode: "",
        address: "",
        additionalInfo: "",
        room: "Single Room not Required",
        flight: "Not flight quote required",
        conditions: false,
        itinerary: false,
        trip_names: false,
        travelAdvice: false,
        newsSubscription: false,
        confirmName: "",
        confirmEmail: "",
        confirmPhone: "",
      });
      // Reset coupon
      setCouponCode("");
      setCouponResult(null);
      setCouponError("");
      setTabBg(1);
      router.push("/");
    } catch (error) {
      console.error("Error sending enquiry:", error);
      toast.error(error.message || "Booking couldn't be sent. Please try again.");
    } finally {
      setIsSendingEnquiry(false);
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('booking_form_state');
      }
    }
  };

  const getHostItinerary = () => {
    if (!host?.upcomingItineraries?.length || !tourDetailData?.id) return null;
    const allHostItineraries = host.upcomingItineraries.flatMap(
      (section) => section.itineraries || []
    );
    if (allHostItineraries.length > 0) {
      const hostItinerary = allHostItineraries.find(
        (itinerary) => itinerary.itineraryId === tourDetailData.id
      );
      return hostItinerary || null;
    }
    return null;
  };

  /**
   * Handle payment initiation
   * Creates Revolut order and redirects to hosted checkout
   */
  const handlePayment = async () => {
    // Validate confirmation fields
    if (!formData.confirmName || !formData.confirmEmail || !formData.confirmPhone) {
      toast.error("Please fill in all confirmation details");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.confirmEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsProcessingPayment(true);
    setPaymentError("");

    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourId: tourDetailData.id,
          couponCode: couponResult?.isValid ? couponCode : null,
          email: formData.confirmEmail,
          fullName: formData.confirmName,
          phone: formData.confirmPhone,
          hostId: host?.id || null,
          numberOfTravellers: parseInt(formData.numberOfTravellers, 10) || 1,
          tourDuration: tourDetailData?.days || '',
          hostDate: getHostItinerary()?.date || '',
          formData: {
            // Passenger details
            passengerFullName: formData.fullName,
            passengerEmail: formData.email,
            passengerPhone: formData.phone,
            passportNumber: formData.passportNumber,
            gender: formData.gender,
            dateOfBirth: formData.dateOfBirth,
            country: formData.country,
            city: formData.city,
            postalCode: formData.postalCode,
            address: formData.address,
            // Trip options
            room: formData.room,
            flight: formData.flight,
            additionalInfo: formData.additionalInfo,
            // Agreements
            termsAccepted: formData.conditions ? 'Accepted' : 'Not Accepted',
            itineraryAgreed: formData.itinerary ? 'Read' : 'Not Read',
            tripNamesListed: formData.trip_names ? 'Confirmed' : 'Not Confirmed',
            travelAdvice: formData.travelAdvice ? 'Read' : 'Not Read',
            newsletter: formData.newsSubscription ? 'Yes' : 'No',
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || "Failed to create payment");
      }

      if (data.orderId && data.orderToken) {
        // Save form state to sessionStorage before navigating (for back button restoration)
        if (typeof window !== 'undefined') {
          const stateToSave = {
            formData,
            tabBg,
            couponCode,
            couponResult,
            selectedCountry,
            selectedCity,
            tourId: tourDetailData?.id,
            hostId: host?.id,
          };
          sessionStorage.setItem(FORM_STATE_KEY, JSON.stringify(stateToSave));
        }
        // Pass both orderId (for verification) and orderToken (for SDK)
        router.push(`/payment/checkout?order_id=${data.orderId}&token=${data.orderToken}`);
      } else {
        throw new Error("Failed to create order");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentError(error.message);
      toast.error(error.message || "Payment failed. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className={classes.book_now_container}>
      <Head>
        <title>Book Your Northern Pakistan Adventure | Facing North</title>
        <meta
          name="description"
          content="Secure your spot for an unforgettable Northern Pakistan journey. Easy booking, flexible options, and expert-guided tours await."
        />
      </Head>
      <HeroBanner style={divStyle} />
      {tourDetailData && (
        <div className={classes.card_container}>
          <img
            src={tourDetailData?.service_img.src || card_img.src}
            alt={tourDetailData?.title || "Tour package"}
            className={classes.img}
          />
          <div className={classes.card_text}>
            <div>
              <span className="text-one-line">{tourDetailData?.title}</span>
              {/* <p>Tour Code PAK2</p> */}
            </div>
            <div>
              {/* {host?.id && ( */}
                <>
                  {couponResult?.isValid ? (
                    <div className={classes.price_display}>
                      <p className={classes.original_price_text}>
                        <span className={classes.strike_through}>{tourDetailData?.price}</span> 
                      </p>
                      <span>/</span>
                      <p className={classes.discounted_price}>
                        {getDisplayPrice()} per person
                        <span className={classes.discount_badge}>
                          {couponResult.discountPercentage}% OFF
                        </span>
                      </p>
                    </div>
                  ) : (
                    <p>Price {tourDetailData?.price} per person</p>
                  )}
                </>
              {/* )} */}
              {host && (<p>Hosted by: {host?.name}</p>)}
              <p>{host ? (<>Date: {getHostItinerary()?.date}</>) : `Duration: ${tourDetailData?.days || 10} Days`}</p>
              <p className="text-two-line">
                Description: {tourDetailData?.description}
              </p>
              {/* <p>Starts: 14 Jun 2024 | Finishes: 28 Jun 2024</p> */}
            </div>
          </div>
        </div>
      )}

      {/* Coupon Code Section */}
      {tourDetailData && (
        <div className={classes.coupon_container}>
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
                  disabled={isApplyingCoupon}
                >
                  {isApplyingCoupon ? "Applying..." : "Apply"}
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
        </div>
      )}

      <div className={classes.form_container}>
        <div className={classes.tabs_container}>
          <div
            className={tabBg === 1 ? `${classes.active_tab}` : `${classes.tab}`}
            // onClick={() => setTabBg(1)}
          >
            {passenger_svg}
            PASSENGER DETAILS
          </div>
          <div
            className={tabBg === 2 ? `${classes.active_tab}` : `${classes.tab}`}
            // onClick={() => setTabBg(2)}
          >
            {trip_svg}
            TRIP OPTIONS
          </div>
          <div
            className={tabBg === 3 ? `${classes.active_tab}` : `${classes.tab}`}
            // onClick={() => setTabBg(3)}
          >
            {confrim_svg}
            CONFIRMATION
          </div>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          {tabBg === 1 && (
            <>
              <h4>Passenger Details</h4>
              <p className={classes.form_description}>
                Please ensure all details match your passport(s) exactly as they appear.
              </p>

              <div className={classes.flex_fields}>
                {/* Number of Travellers */}
                <div className={classes.input_field_container}>
                  <label>
                    Number of Travellers <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.numberOfTravellers}
                    onChange={(e) =>
                      handleChange("numberOfTravellers", e.target.value)
                    }
                    placeholder="e.g., 2"
                    required
                  />
                </div>

                {/* Full Name */}
                <div className={classes.input_field_container}>
                  <label>
                    Full Name <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Passport Number */}
                <div className={classes.input_field_container}>
                  <label>
                    Passport Number <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.passportNumber}
                    onChange={(e) => handleChange("passportNumber", e.target.value)}
                    placeholder="AB1234567"
                    required
                  />
                </div>

                {/* Gender */}
                <div className={classes.input_field_container}>
                  <label>
                    Gender <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div className={classes.input_field_container}>
                  <label>
                    Date of Birth <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    max={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                {/* Phone */}
                <div className={classes.input_field_container}>
                  <label>
                    Phone <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+92 300 1234567"
                    required
                  />
                </div>

                {/* Email */}
                <div className={classes.input_field_container}>
                  <label>
                    Email <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                {/* Country */}
                <div className={classes.input_field_container}>
                  <label>
                    Country <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => {
                      const countryCode = e.target.value;
                      const country = allCountries.find(c => c.isoCode === countryCode);
                      setSelectedCountry(countryCode);
                      handleChange("country", country?.name || "");
                      setSelectedCity("");
                      handleChange("city", "");
                    }}
                    required
                  >
                    <option value="">Select Country</option>
                    {allCountries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div className={classes.input_field_container}>
                  <label>
                    City <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      handleChange("city", e.target.value);
                    }}
                    required
                    disabled={!selectedCountry}
                  >
                    <option value="">Select City</option>
                    {states.map((city, index) => (
                      <option key={`${city.name}-${index}`} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Postal Code */}
                <div className={classes.input_field_container}>
                  <label>Postal Code</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleChange("postalCode", e.target.value)}
                    placeholder="12345"
                  />
                </div>
              </div>

              {/* Address - Full Width */}
              <div className={classes.textarea_field_container}>
                <label>
                  Address <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Enter your complete address"
                  required
                />
              </div>

              <p className={classes.note_text}>
                <strong>Note:</strong> You can book up to 4 places online. For larger groups, 
                please contact us directly.
              </p>

              <div className={classes.divider} />
              <button 
                type="button"
                className={classes.continue_btn} 
                onClick={PassengerNext}
              >
                Continue
              </button>
            </>
          )}
          {tabBg === 2 && (
            <>
              <h4>Trip Details</h4>
              
              {/* Rooming */}
              <div className={classes.trip_section}>
                <h5>Rooming Preferences</h5>
                <p className={classes.section_description}>
                  Please select your rooming requirements below.
                </p>
                <div className={classes.flex_input_field_container}>
                  <select
                    value={formData.room}
                    onChange={(e) => handleChange("room", e.target.value)}
                  >
                    <option value="Single Room not Required">Single Room not Required</option>
                    <option value="Single Room Required" disabled>Single Room Required</option>
                  </select>
                </div>
                <p className={classes.info_text}>
                  <strong>Note:</strong> A single room cannot necessarily be guaranteed
                  for every night. Please refer to the trip itinerary for details.
                </p>
              </div>

              {/* Flight Quote */}
              <div className={classes.trip_section}>
                <h5>Flight Quote</h5>
                <p className={classes.section_description}>
                  We can provide obligation-free flight quotes from the UK and Europe
                  in economy class on suggested group flights.
                </p>
                <div className={classes.flex_input_field_container}>
                  <select
                    value={formData.flight}
                    onChange={(e) => handleChange("flight", e.target.value)}
                  >
                    <option value="Not flight quote required">Not flight quote required</option>
                    <option value="Flight quote required" disabled>Flight quote required</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className={classes.textarea_field_container}>
                <label>Additional Information</label>
                <textarea
                  value={formData.additionalInfo}
                  placeholder="Please tell us about any dietary requirements, rooming preferences, or additional services you'd like to request."
                  onChange={(e) => handleChange("additionalInfo", e.target.value)}
                  rows="4"
                />
              </div>

              {/* Terms & Conditions */}
              <div className={classes.checkbox_section}>
                <p>
                  <input
                    type="checkbox"
                    id="conditions"
                    onChange={() => handleChange("conditions", !formData.conditions)}
                    checked={formData.conditions}
                  />
                  <label htmlFor="conditions">
                    I have read Facing North's Booking Conditions <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    id="itinerary"
                    onChange={() => handleChange("itinerary", !formData.itinerary)}
                    checked={formData.itinerary}
                  />
                  <label htmlFor="itinerary">
                    I have read the latest version of the trip itinerary <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    id="trip_names"
                    onChange={() => handleChange("trip_names", !formData.trip_names)}
                    checked={formData.trip_names}
                  />
                  <label htmlFor="trip_names">
                    I confirm that the names provided match my passport exactly <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    id="travelAdvice"
                    onChange={() => handleChange("travelAdvice", !formData.travelAdvice)}
                    checked={formData.travelAdvice}
                  />
                  <label htmlFor="travelAdvice">
                    I have read and understand the Governmental Travel Advice <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                </p>
                <p>
                  <input
                    type="checkbox"
                    id="newsSubscription"
                    onChange={() => handleChange("newsSubscription", !formData.newsSubscription)}
                    checked={formData.newsSubscription}
                  />
                  <label htmlFor="newsSubscription">
                    Keep me updated with the latest Facing North news by email
                  </label>
                </p>
              </div>

              <div className={classes.divider} />
              <div className={classes.NextBtns}>
                <button 
                  type="button"
                  className={classes.continue_btn} 
                  onClick={TripNext}
                >
                  Continue
                </button>
                <button
                  type="button"
                  className={classes.continue_btn}
                  onClick={() => setTabBg(1)}
                >
                  Back
                </button>
              </div>
            </>
          )}
          {tabBg === 3 && (
            <>
              <h4>Booking Confirmation</h4>
              <p className={classes.confirmation_intro}>
                Thank you for choosing Facing North for your adventure!
              </p>
              <p className={classes.confirmation_text}>
                We are processing your booking and will contact you shortly. 
                Please do not arrange any services until we confirm your place on the trip.
              </p>

              <h5 style={{ marginTop: "30px", marginBottom: "20px" }}>Confirm Your Contact Details</h5>
              <div className={classes.flex_fields}>
                <div className={classes.input_field_container}>
                  <label>
                    Full Name <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.confirmName}
                    onChange={(e) => handleChange("confirmName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={classes.input_field_container}>
                  <label>
                    Email <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.confirmEmail}
                    onChange={(e) => handleChange("confirmEmail", e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className={classes.input_field_container}>
                  <label>
                    Phone <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.confirmPhone}
                    onChange={(e) => handleChange("confirmPhone", e.target.value)}
                    placeholder="+92 300 1234567"
                    required
                  />
                </div>
              </div>

              {/* Booking Summary */}
              {tourDetailData && (
                <div className={classes.booking_summary}>
                  <h5>Booking Summary</h5>
                  <div className={classes.summary_item}>
                    <span>Tour:</span>
                    <strong>{tourDetailData.title}</strong>
                  </div>
                  <div className={classes.summary_item}>
                    <span>Duration:</span>
                    <strong>{tourDetailData.days} Days</strong>
                  </div>
                  <div className={classes.summary_item}>
                    <span>Original Price per Person:</span>
                    <strong className={couponResult?.isValid ? classes.summary_strike : ''}>
                      {tourDetailData.price}
                    </strong>
                  </div>
                  {couponResult?.isValid && (
                    <>
                      <div className={classes.summary_item}>
                        <span>Coupon Applied:</span>
                        <strong className={classes.coupon_code_display}>{couponCode}</strong>
                      </div>
                      <div className={classes.summary_item}>
                        <span>Discount:</span>
                        <strong className={classes.discount_amount}>
                          -{formatPrice(couponResult.discountAmount)} ({couponResult.discountPercentage}%)
                        </strong>
                      </div>
                      <div className={`${classes.summary_item} ${classes.summary_total}`}>
                        <span>Final Price per Person:</span>
                        <strong className={classes.final_price}>
                          {formatPrice(couponResult.finalPrice)}
                        </strong>
                      </div>
                    </>
                  )}
                  {host && (
                    <>
                      <div className={classes.summary_item}>
                        <span>Hosted by:</span>
                        <strong>{host.name}</strong>
                      </div>
                      <div className={classes.summary_item}>
                        <span>Date:</span>
                        <strong>{getHostItinerary()?.date || "TBA"}</strong>
                      </div>
                    </>
                  )}
                  <div className={classes.summary_item}>
                    <span>Travelers:</span>
                    <strong>{formData.numberOfTravellers || "1"}</strong>
                  </div>
                </div>
              )}

              {/* Payment Buttons */}
              <div className={classes.payment_actions}>
                {/* Primary: Pay Now with Revolut (available for all tours with price) */}
                {tourDetailData?.price && (
                  <button
                    type="button"
                    className={classes.pay_now_btn}
                    onClick={handlePayment}
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className={classes.spinner}></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Pay Now - {couponResult?.isValid 
                          ? formatPrice(couponResult.finalPrice * (parseInt(formData.numberOfTravellers, 10) || 1))
                          : `${tourDetailData?.price} × ${formData.numberOfTravellers || 1}`
                        }
                      </>
                    )}
                  </button>
                )}

                {/* Secondary: Enquiry Only (no payment) */}
                <button 
                  className={classes.send_btn} 
                  type="submit"
                  disabled={isSendingEnquiry}
                >
                  {isSendingEnquiry ? (
                    <>
                      <span className={classes.spinner_small}></span>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry Only"
                  )}
                </button>
              </div>

              {/* Payment Error Display */}
              {paymentError && (
                <div className={classes.payment_error}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{paymentError}</span>
                </div>
              )}

              {/* Payment Security Note */}
              {tourDetailData?.price && (
                <div className={classes.payment_security}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Secure payment powered by Revolut. Your payment details are encrypted and protected.</span>
                </div>
              )}
              
              <div className={classes.next_steps}>
                <h5>What Happens Next?</h5>
                <p>
                  <strong>If you pay now:</strong> Your booking will be confirmed immediately and 
                  you'll receive a confirmation email with all trip details.
                </p>
                <p>
                  <strong>If you send an enquiry:</strong> Our team will review your booking and 
                  contact you to discuss details and payment options.
                </p>
                <p>
                  If you have any questions, please don't hesitate to contact us.
                  <a href="mailto: info@facingnorthtravels.com" className={classes.contact_link}>
                    info@facingnorthtravels.com
                  </a>
                </p>
                <p className={classes.signature}>
                  Best regards, <br />
                  <strong>Team Facing North</strong>
                </p>
              </div>

              <button
                type="button"
                className={classes.continue_btn}
                onClick={() => setTabBg(2)}
                style={{ marginTop: "20px" }}
              >
                Back
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookNow;
