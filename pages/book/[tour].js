// /book/<n | tour-id>  ->  that tour's booking form (see utils/bookingLinks.js)
// Used by the QR codes and "Click here to book" links in the itinerary PDFs.
export default function BookTourRedirect() {
  return null;
}

// Nothing is pre-rendered at build time: Next.js does not allow `redirect` from
// getStaticProps during prerendering. Each link is resolved on its first request
// (fallback: "blocking"), where redirects are allowed, and then cached.
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { resolveBookingLink } = await import("../../utils/bookingLinks");
  return { redirect: { destination: resolveBookingLink(params.tour), permanent: false } };
}
