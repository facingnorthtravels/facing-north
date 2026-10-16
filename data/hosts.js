// One host model for every Community Trip leader — cohosts (data/cohosted-profiles.js)
// and travel specialists (data/specialist-profiles.js). Listing cards, the homepage
// carousel and tour pages all read hosts from here, so a new host only needs data.
import { COHOSTED_PROFILES, getListedCohostedProfiles, getCohostedProfileById } from "./cohosted-profiles";
import { SPECIALIST_PROFILES, getAllSpecialistProfiles, getSpecialistProfileBySlug, toCohostProfile } from "./specialist-profiles";

const firstNameOf = (name = "") => name.trim().split(" ")[0];

function fromCohost(p) {
  return {
    kind: "cohost",
    id: p.id,
    name: p.name,
    firstName: firstNameOf(p.name),
    title: (p.title || "").trim(),
    about: p.about || "",
    profileImage: p.profileImage || null,
    cardImage: p.profileImage || null,
    heroImage: p.heroImage || null,
    verified: !!p.verified,
    profileUrl: `/cohosted-profile/${p.id}`,
    bookingHost: p.id, // ?host= on the booking form
    contact: null,
    category: null,
    listing: {
      destinations: p.tour?.destinations || "",
      dates: p.tour?.dates || "",
      status: p.tour?.status || "",
      button: p.tour?.button || "Join Now",
      open: p.tour?.buttonClass === "openNow",
    },
    upcomingItineraries: p.upcomingItineraries || [],
  };
}

function fromSpecialist(p) {
  const c = toCohostProfile(p);
  return {
    kind: "specialist",
    id: p.specialist_slug,
    name: p.specialist_name,
    firstName: firstNameOf(p.specialist_name),
    title: p.specialisation_type ? `${p.specialisation_type} Specialist` : "Travel Specialist",
    about: p.bio_text || "",
    profileImage: p.specialist_photo || null,
    cardImage: p.card_image || p.specialist_photo || null,
    heroImage: p.hero_image || null,
    verified: !!p.is_verified,
    profileUrl: `/specialist-profile/${p.specialist_slug}`,
    bookingHost: null,
    contact: p.contact || null,
    category: p.listing?.category || null,
    listing: {
      destinations: p.listing?.destinations || "",
      dates: p.listing?.dates || "",
      status: p.listing?.status || "Open Now",
      button: p.listing?.button || "Join Now",
      open: (p.listing?.status || "Open Now") === "Open Now",
    },
    order: p.listing?.order ?? 99,
    upcomingItineraries: c.upcomingItineraries,
  };
}

const upcomingCount = (h) =>
  h.upcomingItineraries.reduce((n, s) => n + (s.itineraries?.length || 0), 0);

/** Hosts shown on Community Trips / homepage: listed cohosts first, then specialists. */
export function getListedHosts({ specialistsFirst = false } = {}) {
  const cohosts = getListedCohostedProfiles().map(fromCohost);
  const specialists = getAllSpecialistProfiles()
    .filter((p) => (p.itineraries || []).length > 0)
    .map(fromSpecialist)
    .sort((a, b) => a.order - b.order);
  const all = specialistsFirst ? [...specialists, ...cohosts] : [...cohosts, ...specialists];
  return all.map((h) => ({ ...h, upcomingCount: upcomingCount(h) }));
}

/**
 * The host leading a tour, found from the tour id — no query string needed.
 * Checks every itinerary (hidden ones too) so an old link still shows its host.
 */
export function getHostForTour(tourId) {
  if (!tourId) return null;
  const cohost = COHOSTED_PROFILES.find((p) =>
    (p.upcomingItineraries || []).some((s) => (s.itineraries || []).some((it) => it.itineraryId === tourId))
  );
  if (cohost) return fromCohost(getCohostedProfileById(cohost.id) || cohost);
  const specialist = SPECIALIST_PROFILES.find(
    (p) => !p.hidden && (p.itineraries || []).some((it) => it.itinerary_slug === tourId)
  );
  // build from the visible copy so hidden itineraries never reach the page
  return specialist ? fromSpecialist(getSpecialistProfileBySlug(specialist.specialist_slug)) : null;
}
