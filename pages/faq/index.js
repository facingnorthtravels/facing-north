import FaqContent from "../../components/faqScreen/faqContent";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import styles from "./faq.module.css";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

const FAQ_SCHEMA_ITEMS = [
  { q: "Can I get a private tour organized?", a: "Yes. You can design your own trip to suit your needs whether you're travelling with a group, friends, family, or solo. Submit a few basic details in our form for a personalised tour and we'll take care of the rest." },
  { q: "How can I confirm my booking?", a: "For booked excursions, we require a 50% deposit to secure the reservation. The remaining balance must be paid in full one month prior to the start of the tour. 100% of the total cost must be paid upfront for customised tours. Contact us at info@facingnorth.pk or +92-311-5596785." },
  { q: "What happens if I have to cancel my booking?", a: "Cancellation fees apply: 10% fee if cancelled 2+ months before departure; 50% if cancelled 1–2 months before; 75% if less than one month; 100% if 15 days or fewer before departure. See our Booking/Cancellation policy for details." },
  { q: "How can I apply for a visa to Pakistan?", a: "UK citizens and residents of 179+ nations can apply for Pakistan e-Visa online via the NADRA portal. Processing typically takes 1–2 weeks. Facing North provides a Letter of Invitation (LOI) to support your visa application — just send us a scan of your passport." },
  { q: "Do you provide travel insurance?", a: "We do not offer travel or medical insurance. Participants are strongly advised to purchase comprehensive travel insurance including medical assistance and helicopter rescue coverage before departure." },
  { q: "How many people will be on a group tour?", a: "The majority of our public tours include groups of 8–12 people. Any group size, including solo travellers, can arrange a customised private tour." },
  { q: "What does the tour cost cover?", a: "Inclusions typically cover: domestic flights (if applicable), private vehicle with driver, accommodation, meals (breakfast, lunch, dinner), guided tours, cultural activities, admission tickets, taxes, and Letter of Invitation for visa. International flights, visas, personal gear, and travel insurance are not included." },
  { q: "What is the best time to visit Northern Pakistan?", a: "The best time to visit Northern Pakistan is May to October, when mountain roads are open and weather is mild. Hunza and Skardu are best June–September. Some winter tours are available November–March for snowscape experiences." },
  { q: "What will the weather be like?", a: "Northern Pakistan summers (May–September) are mild with temperatures 15–25°C in the mountains, though nights can be cold (5–10°C). City temperatures can exceed 40°C in summer. Winter lows in highland areas can reach 0°C or below." },
  { q: "What type of clothing is acceptable in Pakistan?", a: "Pakistan is a conservative country — shoulders, arms, and legs should be covered in public. Men can wear T-shirts and trousers. Women should wear loose clothing covering the body with sleeves at least 3/4 length. Comfortable walking shoes and a light scarf are essential. In the mountains dress codes are more relaxed for trekking." },
];

export default function FAQ() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.faq);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_SCHEMA_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <div className={styles.container}>
      <SEOHead metadata={metadata} jsonLd={jsonLd} />
      <HeroBanner
        backgroundImg={"/assets/faq/banner.png"}
        heading={"Frequently Asked Questions"}
      />
      <FaqContent />
    </div>
  );
}
