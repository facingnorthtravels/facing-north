import FourthHomePageSection from "../../components/aboutScreen/fourthHomePageSection";
import HeroBanner from "../../components/sharedComponents/heroBanner/index";
import OurTeamSection from "../../components/aboutScreen/ourTeamSection";
import TestimonialSection from "../../components/testimonialSection";
import { ABOUT_US_INFO } from "../../data/about";
import styles from "./services.module.css";
import TopDestinationCards from "../../components/common/Experience";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

export default function AboutUs() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.about);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <div>
        <HeroBanner
          backgroundImg={"/assets/about-page-assets/banner.jpg"}
          heading={"About Us"}
          height={"500px"}
        />
      </div>
      <FourthHomePageSection
        info={ABOUT_US_INFO}
      />
      <div style={{ width: "90.6%", margin: "auto" }}>
      <TopDestinationCards
        cardData={ABOUT_US_INFO?.why_choose}
        head={"The Facing North Difference"}
        showPara
      />
      </div>
      <div style={{ scrollMarginTop: "98px" }}>
        <OurTeamSection />
      </div>
      <div style={{ scrollMarginTop: "98px" }}>
        <TestimonialSection isWhite />
      </div>
    </div>
  );
}
