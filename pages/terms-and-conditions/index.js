import ContentSection from "../../components/termsAndConditions/contentSection";
import HeroBanner from "../../components/termsAndConditions/heroBanner";
import styles from "./terms_and_conditions.module.css";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

const TermsAndCondition = () => {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.terms);

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <HeroBanner />
      <ContentSection />
    </div>
  );
};
export default TermsAndCondition;
