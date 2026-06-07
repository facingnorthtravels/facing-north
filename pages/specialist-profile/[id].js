import SpecialistHeroSection from "../../components/specialistScreen/heroBanner";
import SpecialistProfileCard from "../../components/specialistScreen/profileCard";
import SpecialistHighlights from "../../components/specialistScreen/specialistHighlights";
import SpecialistItineraries from "../../components/specialistScreen/specialistItineraries";
import SpecialistGallery from "../../components/specialistScreen/specialistGallery";
import SpecialistTestimonials from "../../components/specialistScreen/specialistTestimonials";
import SpecialistCallToAction from "../../components/specialistScreen/callToAction";
import SEOHead from "../../components/common/SEOHead";
import { getSpecialistProfileMetadata } from "../../utils/seo";

export default function SpecialistProfilePage({ profile }) {
  if (!profile) return null;

  const metadata = getSpecialistProfileMetadata(profile);

  return (
    <div>
      <SEOHead metadata={metadata} />

      <SpecialistHeroSection profile={profile} />
      <SpecialistProfileCard profile={profile} />
      <SpecialistHighlights profile={profile} />
      <SpecialistItineraries profile={profile} />
      <SpecialistGallery profile={profile} />
      <SpecialistTestimonials profile={profile} />
      <SpecialistCallToAction profile={profile} />
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
  const { getSpecialistProfileBySlug } = await import(
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
    },
  };
}
