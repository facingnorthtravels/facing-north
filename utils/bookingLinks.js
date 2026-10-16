// Short booking links used on printed itineraries / QR codes:
//   /book/<n>   ->  /book-now?tour=<tour-id>[&host=<cohost id>]
// <n> is the tour's `bookingNo` in data/tours-pakages.js, e.g. facingnorthtravels.com/book/1
// (one number per tour). Also accepted: the full tour id, the PDF product code
// ("aks-27-03") or a host's first name. Anything unknown goes to Community Trips.
// Server-side only (getStaticProps) — it pulls in the full tours data.
import { TOUR_PAKAGE } from "../data/tours-pakages";
import { getHostForTour, getListedHosts } from "../data/hosts";

// "/assets/PDFS/AKS-27-03-around-karakoram-jonas.pdf" -> "aks-27-03"
export function tourCode(tour) {
  const file = (tour?.pdf || "").split("/").pop() || "";
  const m = file.match(/^([A-Za-z]+-\d+-\d+)/);
  return m ? m[1].toLowerCase() : null;
}

function bookingPath(tourId) {
  const params = new URLSearchParams({ tour: tourId });
  const host = getHostForTour(tourId);
  if (host?.bookingHost) params.set("host", host.bookingHost);
  return `/book-now?${params.toString()}`;
}

/** Where /book/<slug> should go. */
export function resolveBookingLink(slug) {
  const wanted = String(slug || "").toLowerCase();
  const tour =
    TOUR_PAKAGE.find((t) => t.bookingNo != null && String(t.bookingNo) === wanted) ||
    TOUR_PAKAGE.find((t) => t.id.toLowerCase() === wanted) ||
    TOUR_PAKAGE.find((t) => tourCode(t) === wanted);
  if (tour) return bookingPath(tour.id);

  const host = getListedHosts().find((h) => h.firstName.toLowerCase() === wanted);
  const hostTour = host?.upcomingItineraries.flatMap((s) => s.itineraries || [])[0]?.itineraryId;
  if (hostTour) return bookingPath(hostTour);

  return "/community-trips";
}