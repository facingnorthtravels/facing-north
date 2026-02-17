import CohostedHeroSection from "../../components/cohostedScreen/heroBanner";
import ProfileCard from "../../components/cohostedScreen/profileCard";
import HostHighlights from "../../components/cohostedScreen/hostHighlights";
import UpcomingItineraries from "../../components/cohostedScreen/upcomingItineraries";
import HearFromHost from "../../components/cohostedScreen/hearFromHost";
import CallToAction from "../../components/cohostedScreen/callToAction";
import SEOHead from "../../components/common/SEOHead";
import { getCohostedProfileMetadata } from "../../utils/seo";

export default function CohostedProfilePage({ profile }) {
  // Generate metadata from static props
  const metadata = getCohostedProfileMetadata(profile);

  return (
    <div>
      <SEOHead metadata={metadata} />
      
      <CohostedHeroSection profile={profile} />
      <ProfileCard profile={profile} />
      <HostHighlights profile={profile} />
      <UpcomingItineraries profile={profile} />
      <HearFromHost profile={profile} />
      {/* <GuestReviews profile={profile} /> */}
      <CallToAction profile={profile} />
    </div>
  );
}

export async function getStaticPaths() {
  const { getAllCohostedProfiles } = await import("../../data/cohosted-profiles");
  const profiles = getAllCohostedProfiles();
  
  const paths = profiles.map((profile) => ({
    params: { id: profile.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { getCohostedProfileById } = await import("../../data/cohosted-profiles");
  const decodedId = decodeURIComponent(params.id || "");
  const profile = getCohostedProfileById(decodedId);

  return {
    props: {
      profile,
    },
  };
}
