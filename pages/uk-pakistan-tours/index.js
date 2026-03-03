import SEOHead from "../../components/common/SEOHead";
import ContactNow from "../../components/common/contactNow";
import { generateMetadata } from "../../utils/seo";
import Link from "next/link";
import { TOUR_PAKAGE } from "../../data/tours-pakages";

const SITE_URL = "https://facingnorthtravels.com";

const metadata = generateMetadata({
  title: "Pakistan Tours from UK | Northern Pakistan Adventure Travel",
  description:
    "Expert-guided Pakistan tours for UK travellers. Fly from London, Manchester or Birmingham to explore Hunza, Skardu, Swat & Gilgit-Baltistan. E-visa support included. From £630.",
  url: "/uk-pakistan-tours",
  keywords:
    "Pakistan tours from UK, Pakistan tour operator UK, Northern Pakistan holidays UK, Hunza tour UK, Skardu tour British travellers, Pakistan travel UK 2025",
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Facing North Adventures",
    "url": SITE_URL,
    "description":
      "Pakistan adventure tours for UK travellers. Expert-guided trips to Hunza, Skardu, Swat, Chitral and Gilgit-Baltistan.",
    "areaServed": [
      { "@type": "Country", "name": "Pakistan" },
      { "@type": "Country", "name": "United Kingdom" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do UK citizens need a visa to visit Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. UK passport holders can apply for a Pakistan e-Visa online via the NADRA portal. Processing typically takes 1–2 weeks. Facing North Adventures provides a free Letter of Invitation (LOI) to support your application — just send us a copy of your passport.",
        },
      },
      {
        "@type": "Question",
        "name": "Which airports in the UK have flights to Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Direct and connecting flights to Islamabad (ISB) and Lahore (LHE) depart from London Heathrow (LHR), London Gatwick (LGW), Manchester (MAN), and Birmingham (BHX). Pakistan International Airlines (PIA) operates direct London–Islamabad flights. Emirates, Qatar Airways, and Turkish Airlines offer one-stop connections.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the best time of year for UK travellers to visit Northern Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The best time for UK travellers to visit Northern Pakistan is May to October. This aligns with UK summer holidays and school breaks. Hunza Valley peaks in June–August with lush green valleys. Skardu and K2 base camp treks are best July–September. Autumn (October) offers stunning foliage in Hunza.",
        },
      },
      {
        "@type": "Question",
        "name": "How much do Pakistan tours from the UK cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Facing North Adventures tour packages start from approximately $800 USD (around £630 GBP), not including international flights. A typical 10–14 day Northern Pakistan tour costs $1,200–$2,500 USD (£950–£2,000 GBP) including accommodation, meals, transport within Pakistan, and guided activities.",
        },
      },
      {
        "@type": "Question",
        "name": "Is Pakistan safe for UK tourists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Northern Pakistan — including Hunza, Skardu, Swat, and Gilgit-Baltistan — is considered safe for tourists and is visited by thousands of British, European, and international travellers each year. The FCDO (Foreign Commonwealth & Development Office) advises caution for some border regions but Northern Pakistan's main tourist areas are generally safe. Facing North Adventures provides experienced local guides and real-time safety assessments on all tours.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Pakistan Tours from UK", "item": `${SITE_URL}/uk-pakistan-tours` },
    ],
  },
];

const featuredTours = TOUR_PAKAGE.slice(0, 6);

export default function UKPakistanTours() {
  return (
    <div>
      <SEOHead metadata={metadata} jsonLd={jsonLd} />

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a4a4a 0%, #176060 100%)",
          color: "#fff",
          padding: "80px 20px 60px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.8, marginBottom: "12px" }}>
          For British Travellers
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.2 }}>
          Pakistan Tours from the UK
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "640px", margin: "0 auto 32px", opacity: 0.9, lineHeight: 1.6 }}>
          Expert-guided adventures to Hunza, Skardu, Swat &amp; Gilgit-Baltistan.
          E-visa support, Letter of Invitation, and UK-friendly departure planning included.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/package-tour" style={{ background: "#fff", color: "#176060", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, textDecoration: "none", fontSize: "16px" }}>
            View All Tours
          </Link>
          <Link href="/contact" style={{ border: "2px solid #fff", color: "#fff", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, textDecoration: "none", fontSize: "16px" }}>
            Plan My Trip
          </Link>
        </div>
      </div>

      {/* UK Quick Stats */}
      <div style={{ background: "#f8f8f8", padding: "40px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px", textAlign: "center" }}>
          {[
            { stat: "£630+", label: "Tours from (excl. flights)" },
            { stat: "1–2 weeks", label: "E-Visa processing time" },
            { stat: "~8 hrs", label: "Flight time from London" },
            { stat: "May–Oct", label: "Best season for UK visitors" },
            { stat: "LOI included", label: "Visa support provided" },
            { stat: "8–12 people", label: "Typical group size" },
          ].map(({ stat, label }) => (
            <div key={label} style={{ padding: "20px 12px" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#176060", marginBottom: "8px" }}>{stat}</div>
              <div style={{ fontSize: "14px", color: "#666" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How to get there from UK */}
      <div style={{ maxWidth: "860px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#176060", marginBottom: "16px" }}>
          Flying to Pakistan from the UK
        </h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          UK travellers fly into <strong>Islamabad International Airport (ISB)</strong> — the gateway to all Northern Pakistan destinations. All Facing North tours depart from Islamabad.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "24px" }}>
          {[
            { from: "London Heathrow (LHR)", airline: "PIA direct ~8 hrs | Emirates/Qatar via hub ~11–13 hrs" },
            { from: "Manchester (MAN)", airline: "PIA direct ~8.5 hrs | Indirect via Dubai or Doha ~11 hrs" },
            { from: "Birmingham (BHX)", airline: "PIA direct ~8.5 hrs | Indirect via Gulf carriers ~11 hrs" },
          ].map(({ from, airline }) => (
            <div key={from} style={{ background: "#f0f7f7", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#176060", marginBottom: "6px" }}>{from}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{airline}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visa info */}
      <div style={{ background: "#176060", color: "#fff", padding: "50px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>
            Pakistan Visa for UK Citizens
          </h2>
          <p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: "20px" }}>
            UK passport holders can apply for a <strong>Pakistan e-Visa online</strong> through the official NADRA portal. Processing typically takes <strong>1–2 weeks</strong>. We recommend applying at least 6 weeks before travel.
          </p>
          <ul style={{ lineHeight: 2, paddingLeft: "20px", opacity: 0.9 }}>
            <li>Apply online at <strong>visa.nadra.gov.pk</strong></li>
            <li>Tourist visa valid for 30–90 days</li>
            <li>Facing North provides a free <strong>Letter of Invitation (LOI)</strong></li>
            <li>Send us your passport scan — we handle the LOI within 48 hours</li>
            <li>Cost: approx. PKR 4,000–8,000 (£12–£25 GBP)</li>
          </ul>
          <Link href="/contact" style={{ display: "inline-block", marginTop: "24px", background: "#fff", color: "#176060", padding: "14px 28px", borderRadius: "4px", fontWeight: 700, textDecoration: "none" }}>
            Request Your LOI
          </Link>
        </div>
      </div>

      {/* Featured Tours */}
      <div style={{ maxWidth: "960px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#176060", marginBottom: "8px" }}>
          Popular Pakistan Tours for UK Travellers
        </h2>
        <p style={{ color: "#666", marginBottom: "32px" }}>All tours depart from Islamabad. UK participants fly in one day before.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {featuredTours.map((tour) => (
            <Link key={tour.id} href={`/package-tour/${tour.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden", transition: "box-shadow 0.2s" }}>
                <img
                  src={tour.service_img}
                  alt={tour.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#176060", margin: "0 0 8px", lineHeight: 1.3 }}>{tour.title}</h3>
                  <div style={{ display: "flex", gap: "16px", fontSize: "14px", color: "#666" }}>
                    <span>⏱ {tour.days} days</span>
                    <span>💰 {tour.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link href="/package-tour" style={{ background: "#176060", color: "#fff", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
            View All Tour Packages
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: "#f8f8f8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#176060", marginBottom: "32px" }}>
            FAQ: Pakistan Travel for UK Visitors
          </h2>
          {[
            {
              q: "Do UK citizens need a visa for Pakistan?",
              a: "Yes — UK passport holders apply for a Pakistan e-Visa online via the NADRA portal. Processing takes 1–2 weeks. Facing North provides a free Letter of Invitation (LOI) to support your application.",
            },
            {
              q: "Is Pakistan safe for British tourists?",
              a: "Northern Pakistan — Hunza, Skardu, Swat, Gilgit-Baltistan — is visited by thousands of UK tourists annually. The main tourist regions are safe and welcoming. Facing North provides local guides, real-time safety updates, and emergency support throughout your trip.",
            },
            {
              q: "Which UK airports fly to Pakistan?",
              a: "PIA operates direct flights from London Heathrow, Manchester, and Birmingham to Islamabad. Indirect flights via Dubai, Doha, or Istanbul are available from most UK airports.",
            },
            {
              q: "How much does a Pakistan tour cost from the UK?",
              a: "Facing North tours start from ~$800 USD (£630 GBP), excluding international flights. A 10–14 day Northern Pakistan tour typically costs £950–£2,000 including accommodation, meals, local transport, and guides.",
            },
            {
              q: "What is the best month for UK travellers to visit?",
              a: "July and August align with UK school summer holidays and offer excellent weather in Northern Pakistan (15–25°C in the mountains). May–June and September–October are also ideal and less crowded.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: "1px solid #ddd", paddingBottom: "20px", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#333", margin: "0 0 8px" }}>{q}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactNow
        title="Plan Your Pakistan Trip from the UK"
        para="Tell us your travel dates, group size, and budget. We'll build a custom Pakistan itinerary and send your Letter of Invitation for the visa — all within 48 hours."
      />
    </div>
  );
}
