import FaqContent from "../../components/faqScreen/faqContent";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import styles from "./faq.module.css";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

export default function FAQ() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.faq);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <HeroBanner
        backgroundImg={"/assets/faq/banner.png"}
        heading={"Frequently Asked Questions"}
      />
      <FaqContent />
    </div>
  );
}
