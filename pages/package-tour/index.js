import HeroBanner from "../../components/sharedComponents/heroBanner/index";
import SecondHomePageSection from "../../components/packageTourScreen/secondHomePageSection";
import styles from "./destination_detail.module.css";
import TestimonialSection from "../../components/testimonialSection/index";
import TopDestinations from "../../components/packageTourScreen/topDestinations";
import plannerImage from "../../public/assets/homepage/bookNowImg.jpg";
import plannerImage2 from "../../public/assets/homepage/bookNowImg2.jpg";
import Link from "next/link";
import { PopupButton } from "@typeform/embed-react";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

export default function PackageTour() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.packageTours);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <div>
        <HeroBanner
          backgroundImg={"/assets/IMAGES/bespoke/banner.jpg"}
          heading={"Plan My Trip"}
          subheading1={
            "Forge your path, one step at a time. Our custom itineraries will tailor your travel to your imagination, whether you’re looking to trek or indulge in a yoga retreat."
          }
          height={"500px"}
        />
      </div>

      <div>
        <SecondHomePageSection />
      </div>
      <div className={styles.tour_planner_container}>
        <h2>Plan Your Trip</h2>
        <p className={styles.trip_text}>
          Looking for an adventure in Pakistan? Look no further. Take some
          inspiration from our fan favourite itineraries and plan your trip with
          us. Whether you want an exhilarating trekking and camping adventure or
          you want to schedule some downtime with your loved ones at a wellness
          retreat, we have it all. All you need to do is let us know what you
          have in mind and we will curate an itinerary Just For You.
        </p>
        <div className={styles.tour_planner}>
          <div className={styles.planner_card}>
            <img src={plannerImage.src} width={130} height={180} />
            <div className={styles.card_text}>
              <div>
                <p>NEED HELP DECIDING?</p>
                <h3>Plan my Trip</h3>
              </div>
              <PopupButton id="z2As8nY3" className={styles.book_btn}>
                Plan Trip
              </PopupButton>
            </div>
          </div>
          <div className={styles.planner_card}>
            <img src={plannerImage2.src} width={130} height={180} />
            <div className={styles.card_text}>
              <p>Embark on unforgettable adventures!</p>
              <h3>Book now to secure your spot</h3>
              <Link href={"/book-now"} className={styles.book_btn}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ scrollMarginTop: "50px", paddingBottom: "50px" }}
      >
        <TopDestinations title="Client Favourite Itineraries" description="Get inspired by our client favourite itineraries as you plan your own adventure. A selection of client favourite itineraries for you to be inspired by while planning your own adventure." />
      </div>
      <div style={{ scrollMarginTop: "70px" }}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
  );
}
