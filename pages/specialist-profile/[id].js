import CohostedHeroSection from "../../components/cohostedScreen/heroBanner";
import ProfileCard from "../../components/cohostedScreen/profileCard";
import HostHighlights from "../../components/cohostedScreen/hostHighlights";
import UpcomingItineraries from "../../components/cohostedScreen/upcomingItineraries";
import CallToAction from "../../components/cohostedScreen/callToAction";
import SpecialistGallery from "../../components/specialistScreen/specialistGallery";
import SEOHead from "../../components/common/SEOHead";
import { getSpecialistProfileMetadata } from "../../utils/seo";

// Specialist profiles use the same components as cohosted profiles
// (pages/cohosted-profile/[id].js). The host video slot shows the photo
// gallery instead, when the specialist has one.
export default function SpecialistProfilePage({ profile, cohost }) {
  if (!profile || !cohost) return null;

  const metadata = getSpecialistProfileMetadata(profile);

  return (
    <div>
      <SEOHead metadata={metadata} />

      <CohostedHeroSection profile={cohost} />
      <ProfileCard profile={cohost} />
      {cohost.highlights.length > 0 && <HostHighlights profile={cohost} />}
      <UpcomingItineraries profile={cohost} />
      <SpecialistGallery profile={cohost} />
      <CallToAction profile={cohost} />
    </div>
  );
}

export async function getStaticPaths() {
  const { getAllSpecialistProfiles } = await import(
    "../../data/specialist-profiles"
  );
  const profiles = getAllSpecialistProfiles();

  // Build paths for both slug and numeric id so either resolves
  const paths = profiles.flatMap((profile) => {
    const params = [];
    if (profile.specialist_slug) {
      params.push({ params: { id: profile.specialist_slug } });
    }
    if (profile.id && profile.id !== profile.specialist_slug) {
      params.push({ params: { id: profile.id } });
    }
    return params;
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { getSpecialistProfileBySlug, toCohostProfile } = await import(
    "../../data/specialist-profiles"
  );
  const decodedId = decodeURIComponent(params.id || "");
  const profile = getSpecialistProfileBySlug(decodedId);

  if (!profile) {
    return { notFound: true };
  }

  return {
    props: {
      profile,
      cohost: toCohostProfile(profile),
    },
  };
}
