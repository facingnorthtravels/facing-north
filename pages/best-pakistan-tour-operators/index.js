import SEOHead from "../../components/common/SEOHead";
import ContactNow from "../../components/common/contactNow";
import { generateMetadata } from "../../utils/seo";
import Link from "next/link";

const SITE_URL = "https://facingnorthtravels.com";

const metadata = generateMetadata({
  title: "Best Pakistan Tour Operators for UK Travellers (2025 Guide)",
  description:
    "Honest comparison of the best Pakistan tour operators for British travellers. We compare Intrepid, G Adventures, Exodus and local specialists on price, itineraries, and support.",
  url: "/best-pakistan-tour-operators",
  keywords:
    "best Pakistan tour operators UK, Pakistan tour company comparison, Northern Pakistan tour operators, Pakistan travel company UK 2025",
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Pakistan Tour Operators for UK Travellers (2025 Guide)",
    "description": "Comparison of leading Pakistan tour operators for British travellers, covering itineraries, pricing, support, and UK-specific logistics.",
    "url": `${SITE_URL}/best-pakistan-tour-operators`,
    "datePublished": "2025-01-01",
    "dateModified": "2025-11-01",
    "author": { "@type": "Organization", "name": "Facing North Adventures", "url": SITE_URL },
    "publisher": {
      "@type": "Organization",
      "name": "Facing North Adventures",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Best Pakistan Tour Operators", "item": `${SITE_URL}/best-pakistan-tour-operators` },
    ],
  },
];

const OPERATORS = [
  {
    name: "Facing North Adventures",
    type: "Local Pakistan Specialist",
    priceFrom: "$800 (£630)",
    groupSize: "8–12 / Private available",
    destinations: "Hunza, Skardu, Swat, Chitral, Fairy Meadows, Naran",
    ukVisa: "✅ Free LOI provided",
    localGuides: "✅ Pakistan-based guides",
    customTours: "✅ Yes",
    bestFor: "UK travellers wanting authentic, locally-guided Northern Pakistan experiences",
    highlight: true,
    url: "/package-tour",
  },
  {
    name: "Intrepid Travel",
    type: "International Group Tour Operator",
    priceFrom: "~$2,000 (£1,600)",
    groupSize: "12–16",
    destinations: "Lahore, Hunza, Karimabad",
    ukVisa: "❌ Self-arranged",
    localGuides: "✅ Local leader",
    customTours: "❌ Fixed itineraries only",
    bestFor: "Travellers wanting a large established brand with fixed departure dates",
    highlight: false,
    url: null,
  },
  {
    name: "G Adventures",
    type: "International Group Tour Operator",
    priceFrom: "~$1,800 (£1,430)",
    groupSize: "12–16",
    destinations: "Lahore, Islamabad, Hunza",
    ukVisa: "❌ Self-arranged",
    localGuides: "✅ CEOs (local leaders)",
    customTours: "❌ Fixed itineraries only",
    bestFor: "Solo travellers who want to join a group with a global brand",
    highlight: false,
    url: null,
  },
  {
    name: "Exodus Travels",
    type: "UK Adventure Travel Company",
    priceFrom: "~$2,500 (£2,000)",
    groupSize: "12–16",
    destinations: "Hunza, Karakoram Highway",
    ukVisa: "❌ Self-arranged",
    localGuides: "✅ Local guides",
    customTours: "❌ Fixed itineraries only",
    bestFor: "UK travellers wanting a UK-based company with ATOL protection",
    highlight: false,
    url: null,
  },
];

const COMPARISON_ROWS = [
  { feature: "Price (from)", key: "priceFrom" },
  { feature: "Group Size", key: "groupSize" },
  { feature: "Destinations", key: "destinations" },
  { feature: "UK Visa LOI Support", key: "ukVisa" },
  { feature: "Local Pakistan Guides", key: "localGuides" },
  { feature: "Custom Private Tours", key: "customTours" },
];

export default function BestPakistanTourOperators() {
  return (
    <div>
      <SEOHead metadata={metadata} jsonLd={jsonLd} />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0a4a4a 0%, #176060 100%)", color: "#fff", padding: "70px 20px 50px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.75, marginBottom: "12px" }}>
          Updated November 2025
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
          Best Pakistan Tour Operators for UK Travellers
        </h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", maxWidth: "600px", margin: "0 auto", opacity: 0.9, lineHeight: 1.6 }}>
          An honest comparison of international operators vs. local Pakistan specialists — so you can choose the right company for your trip.
        </p>
      </div>

      {/* Disclosure */}
      <div style={{ background: "#fffbea", borderLeft: "4px solid #f0c040", padding: "16px 24px", maxWidth: "860px", margin: "32px auto", borderRadius: "4px", fontSize: "14px", color: "#555" }}>
        <strong>Disclosure:</strong> This guide is published by Facing North Adventures, one of the operators listed below. All competitor information is sourced from publicly available data (operator websites, review platforms). Competitor strengths are acknowledged honestly. Last reviewed: November 2025.
      </div>

      {/* Summary verdict */}
      <div style={{ maxWidth: "860px", margin: "32px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#176060", marginBottom: "12px" }}>
          Quick Verdict
        </h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
          For <strong>authentic, locally-guided Northern Pakistan tours</strong>, a Pakistan-based specialist like <strong>Facing North Adventures</strong> offers better value, deeper local knowledge, and greater itinerary flexibility than large international operators — typically at 30–50% lower cost.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444" }}>
          International operators like <strong>Intrepid Travel</strong>, <strong>G Adventures</strong>, and <strong>Exodus</strong> are good choices if you prioritise brand recognition, ATOL financial protection, or need a fixed group-departure structure. However, their Pakistan itineraries are often limited to a few high-profile routes and cost significantly more for similar experiences.
        </p>
      </div>

      {/* Comparison table */}
      <div style={{ maxWidth: "960px", margin: "40px auto", padding: "0 20px", overflowX: "auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#176060", marginBottom: "20px" }}>
          Side-by-Side Comparison
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ background: "#176060", color: "#fff" }}>
              <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Feature</th>
              {OPERATORS.map((op) => (
                <th key={op.name} style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600, background: op.highlight ? "#0e4040" : "#176060" }}>
                  {op.name}
                  {op.highlight && <div style={{ fontSize: "11px", opacity: 0.8, fontWeight: 400 }}>★ Local Specialist</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map(({ feature, key }, i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? "#f8f8f8" : "#fff" }}>
                <td style={{ padding: "12px 16px", fontWeight: 600, color: "#333" }}>{feature}</td>
                {OPERATORS.map((op) => (
                  <td key={op.name} style={{ padding: "12px 16px", textAlign: "center", color: "#444", background: op.highlight && i % 2 === 0 ? "#f0f7f7" : undefined }}>
                    {op[key]}
                  </td>
                ))}
              </tr>
            ))}
            <tr style={{ background: "#f0f7f7" }}>
              <td style={{ padding: "12px 16px", fontWeight: 600, color: "#333" }}>Best For</td>
              {OPERATORS.map((op) => (
                <td key={op.name} style={{ padding: "12px 16px", textAlign: "center", color: "#555", fontSize: "13px" }}>
                  {op.bestFor}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: "12px 16px" }}></td>
              {OPERATORS.map((op) => (
                <td key={op.name} style={{ padding: "12px 16px", textAlign: "center" }}>
                  {op.url ? (
                    <Link href={op.url} style={{ background: "#176060", color: "#fff", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "inline-block" }}>
                      View Tours →
                    </Link>
                  ) : (
                    <span style={{ color: "#999", fontSize: "13px" }}>Visit their website</span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Individual operator breakdowns */}
      <div style={{ maxWidth: "860px", margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#176060", marginBottom: "24px" }}>
          Operator Profiles
        </h2>

        {[
          {
            name: "Facing North Adventures — Best Local Pakistan Specialist",
            pros: [
              "Pakistan-based team with on-the-ground expertise",
              "Free Letter of Invitation (LOI) for UK visa applications",
              "Private and group tours — full itinerary flexibility",
              "Covers 60+ Northern Pakistan destinations",
              "Prices from $800 USD (£630 GBP) — best value for quality",
              "Direct WhatsApp support throughout your trip",
            ],
            cons: [
              "Not ATOL-protected (UK financial protection scheme)",
              "No UK office — all communication is online/WhatsApp",
            ],
            verdict: "The best choice for UK travellers wanting an authentic, flexible, and cost-effective Northern Pakistan adventure with deep local expertise.",
            cta: { label: "See Facing North Tours", href: "/package-tour" },
          },
          {
            name: "Intrepid Travel — Best Large International Brand",
            pros: [
              "Globally recognised brand with 30+ years of experience",
              "ATOL and ABTA bonded (UK financial protection)",
              "Strong sustainability commitments",
              "Fixed group departure dates suit solo travellers",
            ],
            cons: [
              "Significantly more expensive than local operators (often 2×)",
              "Limited Pakistan destinations — mostly Lahore and Hunza",
              "No visa LOI support — self-arranged",
              "Fixed itineraries only — no customisation",
            ],
            verdict: "Good if ATOL protection is a priority and you want a well-known brand. Expensive for what you get in Pakistan specifically.",
            cta: null,
          },
          {
            name: "G Adventures — Best for Solo Travellers Joining a Group",
            pros: [
              "Strong community of solo travellers",
              "ATOL bonded",
              "B Corp certified with social enterprise model",
              "Local CEOs (Chief Experience Officers) as guides",
            ],
            cons: [
              "Higher price point than local specialists",
              "Pakistan selection limited compared to broader Asia portfolio",
              "No visa support for UK travellers",
              "Less flexibility than private tours",
            ],
            verdict: "Good for solo travellers who want to join a group and value the B Corp ethos. Limited Pakistan depth compared to specialists.",
            cta: null,
          },
          {
            name: "Exodus Travels — Best UK-Based Adventure Operator",
            pros: [
              "UK-based company, ATOL and ABTA protection",
              "Strong trekking and adventure heritage",
              "Good reputation in UK travel community",
            ],
            cons: [
              "Most expensive option on this list",
              "Pakistan itineraries limited to Karakoram Highway route",
              "No visa support",
              "Limited private tour options",
            ],
            verdict: "Strong UK reputation and financial protection. Limited Pakistan range at premium prices — better suited to travellers who need the reassurance of a UK-based operator.",
            cta: null,
          },
        ].map(({ name, pros, cons, verdict, cta }) => (
          <div key={name} style={{ borderTop: "1px solid #e0e0e0", paddingTop: "32px", marginTop: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#176060", marginBottom: "16px" }}>{name}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "16px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "#2d7a2d", marginBottom: "8px" }}>✅ Strengths</div>
                <ul style={{ paddingLeft: "18px", lineHeight: 1.8, color: "#444", margin: 0 }}>
                  {pros.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#c0392b", marginBottom: "8px" }}>❌ Weaknesses</div>
                <ul style={{ paddingLeft: "18px", lineHeight: 1.8, color: "#444", margin: 0 }}>
                  {cons.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ background: "#f0f7f7", borderLeft: "4px solid #176060", padding: "14px 18px", borderRadius: "4px", color: "#333", fontSize: "15px", marginBottom: cta ? "16px" : 0 }}>
              <strong>Verdict:</strong> {verdict}
            </div>
            {cta && (
              <Link href={cta.href} style={{ display: "inline-block", marginTop: "12px", background: "#176060", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontWeight: 700, textDecoration: "none" }}>
                {cta.label} →
              </Link>
            )}
          </div>
        ))}
      </div>

      <ContactNow
        title="Ready to Book with Pakistan's Local Experts?"
        para="Get a personalised quote for your Northern Pakistan adventure. We reply within 24 hours and provide your Letter of Invitation for the UK visa process."
      />
    </div>
  );
}
