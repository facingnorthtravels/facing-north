import SecondHomePageSection from "../components/homescreen/secondHomePageSection";
import ThirdHomePageSection from "../components/homescreen/thirdHomePageSection";
import TravelWithExperienceSection from "../components/homescreen/travelWithExperienceSection";
import TestimonialSection from "../components/testimonialSection";
import styles from "../styles/Home.module.css";
import HeroBanner from "../components/sharedComponents/heroBanner";
import plannerImage from "../public/assets/homepage/bookNowImg.jpg";
import plannerImage2 from "../public/assets/homepage/bookNowImg2.jpg";
import Link from "next/link";
import { PopupButton } from "@typeform/embed-react";
import VisitorModal from "../components/sharedComponents/VisitorModal";
import { useState, useEffect } from "react";
import SEOHead from "../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../utils/seo";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("fn_has_visited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 16000); // 16 seconds after loader finishes

      return () => clearTimeout(timer);
    }
  }, []);

  const handlePermanentDismiss = () => {
    localStorage.setItem("fn_has_visited", "true");
    setShowModal(false);
  };

  const metadata = generateMetadata(STATIC_PAGES_METADATA.home);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <div>
        <HeroBanner
          backgroundImg={"/assets/placeholder.webp"}
          heading={"Where adventure finds its compass."}
          subheading1={
            "Discover Pakistan's Cultural and Natural Wonders in Style with Our Exclusive Tours"
          }
          subheading2={""}
          video={"/assets/Chitral/Chitral_banner.mp4"}
        />
      </div>
      <div style={{ scrollMarginTop: "98px" }}>
        <SecondHomePageSection />
      </div>
      <div style={{ scrollMarginTop: "98px" }}>
        <ThirdHomePageSection />
      </div>
      <div style={{ scrollMarginTop: "98px" }}>
        <TravelWithExperienceSection />
      </div>
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
      <div style={{ scrollMarginTop: "98px" }}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
      <VisitorModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onPermanentDismiss={handlePermanentDismiss}
      />
    </div>
  );
}
