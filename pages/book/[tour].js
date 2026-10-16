// /book/<tour-id>  ->  that tour's booking form (see utils/bookingLinks.js)
// Used by the QR codes and Book Now buttons in the itinerary PDFs.
export default function BookTourRedirect() {
  return null;
}

export async function getStaticPaths() {
  const { allTourIds } = await import("../../utils/bookingLinks");
  return { paths: allTourIds().map((tour) => ({ params: { tour } })), fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { resolveBookingLink } = await import("../../utils/bookingLinks");
  return { redirect: { destination: resolveBookingLink(params.tour), permanent: false } };
}
