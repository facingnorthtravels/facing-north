import HeroBanner from "../../../components/servicesDetailsScreen/heroBanner";
import SecondHomePageSection from "../../../components/servicesDetailsScreen/secondHomePageSection";
import TopDestinations from "../../../components/servicesDetailsScreen/topDestinations";
import TestimonialSection from "../../../components/testimonialSection";
import styles from "./services_details.module.css";
import { SERVICE_DETAILS } from "../../../data/services-details";
import ThirdServiceDetailSection from "../../../components/servicesDetailsScreen/thirdservicedetailSection";
import SEOHead from "../../../components/common/SEOHead";
import { getServiceMetadata } from "../../../utils/seo";

export default function ServicesDetails({ serviceDetailData }) {
  // Generate metadata from static props
  const metadata = getServiceMetadata({
    ...serviceDetailData,
    description: serviceDetailData.h2 || serviceDetailData.h1,
    image: serviceDetailData.detail_banner_img
  });

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} />
      <HeroBanner
        h1={serviceDetailData?.h1}
        h2={serviceDetailData?.h2}
        title={serviceDetailData?.title}
        imgUrl={serviceDetailData?.detail_banner_img}
      />
      <SecondHomePageSection data={serviceDetailData} />
      <TopDestinations
        places={serviceDetailData?.top_places}
        destination_title={serviceDetailData?.destination_title}
      />
      <ThirdServiceDetailSection
        title={serviceDetailData?.itineraries_title || null}
        itineraries_ids={serviceDetailData?.itineraries_ids || null}
      />
      <TestimonialSection isWhite />
    </div>
  );
}

// Generate paths for all services at build time
export async function getStaticPaths() {
  const paths = SERVICE_DETAILS.map((service) => ({
    params: { 
      id: `${service.id}-${service.title?.toLowerCase().replace(/\s+/g, '-')}` 
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// Fetch service data at build time
export async function getStaticProps({ params }) {
  const decodedId = decodeURIComponent(params.id || "");
  const serviceId = parseInt(decodedId.split('-')[0]);
  const serviceDetailData = SERVICE_DETAILS.find(
    (service) => service.id === serviceId
  );

  if (!serviceDetailData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serviceDetailData,
    },
  };
}
