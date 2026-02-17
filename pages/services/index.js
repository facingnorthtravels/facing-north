import FourthHomePageSection from "../../components/servicesScreen/fourthHomePageSection";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import SecondHomePageSection from "../../components/servicesScreen/secondHomePageSection";
import styles from "./services.module.css";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

export default function ServicesDetails() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.services);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <div>
        <HeroBanner
          heading={"Curated Adventures"}
          subheading1={
            "Our tour packages offer hand-picked experiences for every traveler."
          }
          backgroundImg={"/assets/IMAGES/cruated-main/banner.jpg"}
          height={500}
        />
      </div>
      <div style={{ scrollMarginTop: "90px" }}>
        <SecondHomePageSection />
      </div>

      <FourthHomePageSection />
    </div>
  );
}
