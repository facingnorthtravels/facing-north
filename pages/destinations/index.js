import React, { useEffect } from "react";
import classes from "./destinations.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import TopDestinationCards from "../../components/common/Experience";
import ThirdToursDetailSection from "../../components/packageTourScreen/thirdservicedetailSection";
import FourthHomePageSection from "../../components/packageTourDetailScreen/fourthHomePageSection";
import TestimonialSection from "../../components/testimonialSection";
import { useWindowSize } from "../../utils";
import { CATEGORIES } from "../../data/tours-pakages";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

function Destinations() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.destinations);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const width = useWindowSize();
  return (
    <div className={classes.container}>
      <SEOHead metadata={metadata} />
      <HeroBanner
        backgroundImg={"/assets/IMAGES/destination/banner.jpg"}
        heading={"Discover your world"}
        height={"500px"}
      />
      <div className={classes.content_container}>
        {" "}
        <TopDestinationCards />
      </div>
      {/* <div
        style={{
          background: "#eaeeef",
          width: "100%",
          height: "440px",
          paddingBottom: "100px",
          marginBottom: "-500px",
          display: width < 768 ? "none" : "unset",
        }}
      /> */}
      <ThirdToursDetailSection title={"Explore our Top Itineraries"} type={CATEGORIES.home}  />
      <TestimonialSection />
      <FourthHomePageSection />
    </div>
  );
}

export default Destinations;
