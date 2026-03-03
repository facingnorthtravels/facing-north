import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../lib/fpixel";

export default function Document() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W3N7CGQ9');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {/* Note: Page-specific metadata is now handled in each page component using SEOHead */}
        {/* This ensures dynamic metadata for both static and dynamic pages */}

        {/* <!-- Favicon --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${baseUrl}/logo.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${baseUrl}/logo.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${baseUrl}/logo.png`}
        />
        <link rel="manifest" href="/manifest.json" />

        {/* <!-- Theme Color for Mobile --> */}
        <meta name="theme-color" content="#000000"></meta>

        {/* <!-- Organization + TravelAgency Schema --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["TravelAgency", "LocalBusiness"],
              "name": "Facing North Adventures",
              "url": "https://facingnorthtravels.com",
              "logo": "https://facingnorthtravels.com/logo.png",
              "image": "https://facingnorthtravels.com/assets/og-image.jpeg",
              "description": "Explore the breathtaking beauty of Northern Pakistan. Plan your next journey with curated adventures, expert guides, and unforgettable experiences.",
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "knowsAbout": ["Adventure Travel", "Northern Pakistan", "Hunza", "Skardu", "Gilgit-Baltistan", "Mountain Trekking"],
              "sameAs": [
                "https://www.instagram.com/facingnorthadventures",
                "https://www.facebook.com/facingnorthadventures"
              ]
            })
          }}
        />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3N7CGQ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
