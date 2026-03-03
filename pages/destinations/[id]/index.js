import HeroBanner from "../../../components/sharedComponents/heroBanner/index";
import SecondHomePageSection from "../../../components/destinationDetailScreen/secondHomePageSection";
import TestimonialSection from "../../../components/testimonialSection";
import styles from "./destination_detail.module.css";
import ThirdToursDetailSection from "../../../components/packageTourScreen/thirdservicedetailSection";
import TopDestinationCards from "../../../components/common/Experience";
import Next from "../../../components/destinationDetailScreen/components/reactSlickButtons/next";
import Prev from "../../../components/destinationDetailScreen/components/reactSlickButtons/prev";
import BestPlacesCards from "../../../components/destinationDetailScreen/components/bestPlacesCards";
import Slider from "react-slick";
import SEOHead from "../../../components/common/SEOHead";
import { getDestinationMetadata } from "../../../utils/seo";
import { DESTIATIONS } from "../../../data/destinations";

export default function DestinationDetail({ destinationData }) {

  const settings = {
    className: "Service-detail-destinations destination-detail-slider",
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Generate metadata from static props
  const metadata = getDestinationMetadata(destinationData);

  const descriptionText = Array.isArray(destinationData?.detailed_description)
    ? destinationData.detailed_description.join(' ').substring(0, 300)
    : (destinationData?.detailed_description || '').substring(0, 300);

  const slug = `${destinationData?.id}-${destinationData?.title?.toLowerCase().replace(/\s+/g, '-')}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destinationData?.title,
    "description": descriptionText,
    "image": metadata.openGraph?.image,
    "url": `https://facingnorthtravels.com/destinations/${slug}`,
    "touristType": "Adventure Traveler",
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "PK"
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Pakistan"
    }
  };

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} jsonLd={jsonLd} />
      <div>
        <HeroBanner
          heading={destinationData?.title}
          subheading1={destinationData?.h1}
          subheading2={destinationData?.h2}
          backgroundImg={destinationData?.bgImg}
        />
      </div>

      <div>
        <SecondHomePageSection
          title={destinationData?.title}
          detail={destinationData?.detailed_description}
          img={destinationData?.explore_img}
        />
      </div>
      <div style={{ width: "90.5%", margin: "auto" }}>
        <TopDestinationCards
          cardData={destinationData?.places_to_visit}
          head={"Top places to visit"}
          showPara
        />
      </div>
      <div className={styles.best_places_container}>
        <div className={styles.best_places_text_container}>
          <h2 className={styles.best_places_title}>Best places to Stay</h2>
        </div>
        {destinationData?.places_to_stay?.length > 0 &&
          destinationData?.places_to_stay && (
            <div className={styles.best_places_cards_container}>
              <Slider
                {...settings}
                className="Service-detail-destinations"
                arrows={true}
              >
                {destinationData?.places_to_stay?.map((place, index) => (
                  <BestPlacesCards
                    description={place.description}
                    key={index}
                    title={place.title}
                    isNotHoverable={true}
                    isLeftAligned={true}
                    pic={place.img}
                  />
                ))}
              </Slider>
            </div>
          )}
      </div>
      <div
        style={{
          background: "#eaeeef",
          width: "100%",
          height: "440px",
          paddingBottom: "100px",
          marginBottom: "-1000px",
          marginTop: "500px",
        }}
      />

      <div className={styles.ThirdToursDetailSection_marginTop}>
        <ThirdToursDetailSection
          title={"Tours Featuring destination"}
          type={destinationData?.type}
          hosted={false}
        />
      </div>

      <div>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
  );
}

// Generate paths for all destinations at build time
export async function getStaticPaths() {
  const paths = DESTIATIONS.map((destination) => ({
    params: {
      id: `${destination.id}-${destination.title?.toLowerCase().replace(/\s+/g, '-')}`
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// Fetch destination data at build time
export async function getStaticProps({ params }) {
  const decodedId = decodeURIComponent(params.id || "");
  const destinationId = parseInt(decodedId.split('-')[0]);
  const destinationData = DESTIATIONS.find(
    (destination) => destination.id === destinationId
  );

  if (!destinationData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destinationData,
    },
  };
}
