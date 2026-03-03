import HeroBanner from "../../../components/packageTourDetailScreen/heroBanner";
import SecondHomePageSection from "../../../components/packageTourDetailScreen/secondHomePageSection";
import ThirdHomePageSection from "../../../components/packageTourDetailScreen/thirdHomePageSection";
import styles from "./destination_detail.module.css";
import MapSection from "../../../components/packageTourDetailScreen/mapSection";
import TestimonialSection from "../../../components/testimonialSection";
import { useRouter } from "next/router";
import { TOUR_PAKAGE } from "../../../data/tours-pakages";
import { useState, useEffect } from "react";
import TopDestinations from "../../../components/packageTourScreen/topDestinations";
import ContactNow from "../../../components/common/contactNow";
import WhatsIncluded from "../../../components/packageTourDetailScreen/whatsIncluded";
import { getCohostedProfileById } from "../../../data/cohosted-profiles";
import MeetYourHost from "../../../components/packageTourDetailScreen/meetYourHost";
import InternationalFlightSection from "../../../components/packageTourDetailScreen/internationalFlightSection";
import SEOHead from "../../../components/common/SEOHead";
import { getTourPackageMetadata } from "../../../utils/seo";

export default function PackageTour({ tourDetailData, hostData: initialHostData }) {
  const router = useRouter();
  
  // Coupon state - lifted to share between HeroBanner and ThirdHomePageSection
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState(null);
  
  // Host state - fetched from query params
  const [hostData, setHostData] = useState(initialHostData);

  // Fetch host data from query params
  useEffect(() => {
    if (router?.query?.host) {
      const hostProfile = getCohostedProfileById(router.query.host);
      setHostData(hostProfile);
    }
  }, [router?.query]);

  // Get host itinerary date
  const getHostItineraryDate = () => {
    if (!hostData?.upcomingItineraries?.length || !tourDetailData?.id) return null;
    const allHostItineraries = hostData.upcomingItineraries.flatMap(
      (section) => section.itineraries || []
    );
    if (allHostItineraries.length > 0) {
      const hostItinerary = allHostItineraries.find(
        (itinerary) => itinerary.itineraryId === tourDetailData.id
      );
      return hostItinerary?.date || null;
    }
    return null;
  };
  
  // Generate metadata from static props
  const metadata = getTourPackageMetadata(tourDetailData);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": tourDetailData?.title,
    "description": Array.isArray(tourDetailData?.description)
      ? tourDetailData.description.join(' ').substring(0, 300)
      : (tourDetailData?.description || '').substring(0, 300),
    "image": metadata.openGraph?.image,
    "url": `https://facingnorthtravels.com/package-tour/${tourDetailData?.id}`,
    "brand": { "@type": "Brand", "name": "Facing North Adventures" },
    "offers": {
      "@type": "Offer",
      "price": tourDetailData?.price?.replace(/[^0-9.]/g, '') || undefined,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://facingnorthtravels.com/package-tour/${tourDetailData?.id}`
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Duration", "value": `${tourDetailData?.days} days` },
      { "@type": "PropertyValue", "name": "Location", "value": tourDetailData?.overview?.location || tourDetailData?.provincesCovered }
    ]
  };

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} jsonLd={jsonLd} />
      <HeroBanner
        title={tourDetailData?.title}
        id={tourDetailData?.id}
        host={hostData}
        price={tourDetailData?.price}
        days={tourDetailData?.days}
        banner_img={tourDetailData?.service_img}
        bgPosition={tourDetailData?.bg_position}
        pdfUrl={tourDetailData?.pdf}
        couponCode={couponCode}
        couponResult={couponResult}
        hostItineraryDate={getHostItineraryDate()}
      />
      {/* Meet Your Host Section - Only shows if host exists */}
      {hostData && <MeetYourHost host={hostData} />}
      <SecondHomePageSection
        data={tourDetailData?.overview}
        desc={tourDetailData?.description}
      />
      {/* <Experience data={tourDetailData?.experiences} /> */}
      <TopDestinations
        description={true}
        title={"What you will experience"}
        isTourDetail
        CardData={tourDetailData?.experiences}
        bg={`rgb(240, 240, 240)`}
      />
      <WhatsIncluded
        itineraryData={tourDetailData}
        includeData={tourDetailData?.includes}
        notIncluded={tourDetailData?.notIncluded}
      />
      {/* <div style={{ marginTop: "100px" }} /> */}
      <MapSection />
      <ThirdHomePageSection
        host={hostData}
        itineraryData={tourDetailData}
        includeData={tourDetailData?.includes}
        id={tourDetailData?.id}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        couponResult={couponResult}
        setCouponResult={setCouponResult}
      />
      {/* International Flight Scheduled */}
      {tourDetailData?.internationalFlights && (
        <InternationalFlightSection flightData={tourDetailData.internationalFlights} />
      )}
      <ContactNow
        title={"Start planning your trip With Us"}
        para={
          "Looking for a memorable travel experience? Let us help you plan your next adventure in Pakistan. Contact us for personalized travel recommendations and itinerary planning."
        }
      />
      {/* <PositiveImpacts /> */}
      {/* <TemperatureGraph /> */}
      {/* <LargeBannerCarousel isWhite={true} /> */}
      {/* <TestimonialSection isWhite={true} isOnlyFirstSection={true} /> */}
      {/* <Contact_info /> */}
      <TestimonialSection />
    </div>
  );
}

// Generate paths for all tour packages at build time
export async function getStaticPaths() {
  const paths = TOUR_PAKAGE.map((tour) => ({
    params: { id: tour.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// Fetch tour data at build time
export async function getStaticProps({ params, query }) {
  const decodedId = decodeURIComponent(params.id || "");
  const tourDetailData = TOUR_PAKAGE.find((tour) => tour.id === decodedId);

  if (!tourDetailData) {
    return {
      notFound: true,
    };
  }

  // Note: Host data is fetched client-side from query params since it's optional
  return {
    props: {
      tourDetailData,
      hostData: null, // Will be populated client-side if ?host= param exists
    },
  };
}
