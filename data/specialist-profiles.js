// Travel Specialist Profile data
// See FN 08 SpecialistProfilePage brief for field-level spec.
// One CMS entry per specialist.

export const SPECIALIST_PROFILES = [
  {
    id: "2",
    specialist_name: "Ali Imran Fazal",
    specialist_slug: "ali-imran-pakistan",
    pronoun: "his",
    specialist_photo: "/assets/cohosted_profile/ali-imran.webp",
    // full photo as provided, for the Community Trips card (profile uses the face crop)
    card_image: "/assets/cohosted_profile/ali-imran-card.webp",
    // Community Trips card + homepage carousel
    listing: {
      destinations: "Around Karakoram, Hunza and Skardu",
      dates: "Year-round",
      status: "Open Now",
      button: "Join Now",
      category: "Heritage",
      order: 2,
    },
    specialist_og_image: "",
    hero_image: "/assets/IMAGES/tour-packages/br-around-karakoram-AK27-04-ali/banner.webp",
    is_verified: true,
    specialisation_type: "Northern Pakistan",

    bio_text:
      "Ali Imran Fazal co-hosts Facing North's Around Karakoram journey – and unlike most hosts on trips to Northern Pakistan, he is not visiting. He grew up here. Ali is the son of a well-known doctor whose medical postings took the family across the northern areas of Pakistan, and he spent part of his early schooling in Skardu itself. The valleys on this itinerary are not research for him – they are the places he grew up moving between, year after year, as his father was posted from one station to the next. That gives him decades of first-hand time in Baltistan, Hunza, Nagar and Gilgit: the heritage, the languages, the food, the etiquette, and the hundred small things a visiting host simply cannot know. Since then, Ali has travelled across the world – studying in Southeast Asia and spending extensive time in the United Kingdom and the United States. He understands exactly what an international traveller expects from a trip, and where Pakistan needs explaining rather than defending.",

    usp_statement:
      "Local depth, international standard – a host who grew up in the valleys you are driving through.",

    website_url: "",
    linkedin_url: "",
    instagram_url: "",

    // Shown as cohost-style "Host Highlights" cards instead of the highlight strip
    host_highlights: [
      {
        icon: "/assets/cohosted_profile/svgs/Vector.svg",
        title: "Languages",
        description: "English, Urdu, Punjabi",
      },
      {
        icon: "/assets/cohosted_profile/svgs/Vector-1.svg",
        title: "Background",
        description:
          "Grew up in Northern Pakistan, schooled in Skardu, studied in Southeast Asia",
      },
      {
        icon: "/assets/cohosted_profile/svgs/Vector-2.svg",
        title: "Specialties",
        description:
          "Heritage & Culture, Local Access, Food & Etiquette, International Travel Standards",
      },
    ],
    hide_reviews: true, // no "What travelers say" section on this profile

    highlight_destinations: "Baltistan, Hunza, Nagar & Gilgit",
    highlight_years: null,
    highlight_languages: "English, Urdu, Punjabi",
    highlight_certifications:
      "Grew up in Northern Pakistan, schooled in Skardu, studied in Southeast Asia",
    highlight_specialisation:
      "Heritage & Culture, Local Access, Food & Etiquette, International Travel Standards",
    highlight_labels: {
      certifications: "Background",
      specialisation: "Specialities",
    },

    itineraries: [
      {
        id: 1,
        itinerary_title: "Around Karakoram with Ali Imran",
        itinerary_slug: "br-around-karakoram-AK27-04-ali",
        itinerary_image:
          "/assets/IMAGES/tour-packages/br-around-karakoram-AK27-04-ali/banner.webp",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Year-round · on request",
        itinerary_duration: "10 days",
        itinerary_group_size: "Small group · up to 12 travellers",
        itinerary_difficulty: "Easy",
        itinerary_price_from: "£1,850",
        itinerary_rating: 0,
        itinerary_review_count: 0,
      },
    ],

    gallery_images: [
      { src: "/assets/specialist_profile/ali-imran/gallery-1.webp", caption: "Satpara Lake, Skardu" },
      { src: "/assets/specialist_profile/ali-imran/gallery-3.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-6.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-7.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-2.webp", caption: "Ali and his father" },
      { src: "/assets/specialist_profile/ali-imran/gallery-4.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-5.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-8.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-9.webp", caption: "" },
      { src: "/assets/specialist_profile/ali-imran/gallery-10.webp", caption: "Touching down at Skardu" },
      { src: "/assets/specialist_profile/ali-imran/gallery-11.webp", caption: "" },
    ],

    specialist_video_url: "",

    gallery_quote: "",

    reviews: [],

    cta_pitch_text: "",
    max_group_size: 14,
  },
  {
    id: "1",
    specialist_name: "Najma Mehmood",
    specialist_slug: "najma-mehmood-pakistan",
    pronoun: "her",
    listing: {
      destinations: "Hunza & Skardu",
      dates: "Year-round",
      status: "Open Now",
      button: "Join Now",
      category: "Women-Led",
      order: 1,
    },
    // her tour pages show her direct contact details instead of the office's
    contact: {
      number: "+44 7572 384219",
      email: "Najma@facingnorthtravels.com",
    },
    specialist_photo:
      "/assets/cohosted_profile/najma2.webp",
    specialist_og_image:
      "/assets/specialist_profile/specialist_najma-mehmood-pakistan_og.jpg",
    hero_image: "/assets/cohosted_profile/Najma3.webp",
    is_verified: true,
    specialisation_type: "Cultural & Women-Led Travel",

    bio_text:
      "I'm Najma, a UK-based community host and cultural curator with a deep love for culture, heritage and meaningful travel. My work is rooted in curating thoughtful journeys that bring people closer to places, history and themselves through connection, adventure and shared experience. Alongside travel, I've been passionate about creating greater access for women in outdoor and nature spaces through hiking and community-led experiences. Over the years, this has evolved into co-hosting and leading culturally immersive women's trips across destinations including Pakistan and Saudi Arabia. I'm drawn to travel that feels intentional, grounding and emotionally enriching — experiences that combine culture, wellness, adventure, storytelling and human connection in a meaningful way. Through the collaboration with Facing North, I hope to help others experience the warmth, beauty and depth of Pakistan in a way that feels inspiring, immersive and deeply personal.",

    usp_statement: "",

    website_url: "",
    linkedin_url: "",
    instagram_url:
      "https://www.instagram.com/chai_infused_adventures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",

    host_highlights: [
      {
        icon: "/assets/cohosted_profile/svgs/Vector.svg",
        title: "Languages",
        description: "English, Urdu, Punjabi",
      },
      {
        icon: "/assets/cohosted_profile/svgs/Vector-1.svg",
        title: "Background",
        description: "Community Host, Cultural Storytelling, Group Travel Curation",
      },
      {
        icon: "/assets/cohosted_profile/svgs/Vector-2.svg",
        title: "Specialties",
        description:
          "Women-Led Travel, Heritage Journeys, Cultural Immersion, Wellness & Adventure Travel, Community Experiences",
      },
    ],
    hide_reviews: true,

    highlight_destinations: "",
    highlight_years: null,
    highlight_languages: "English, Urdu & Punjabi",
    highlight_certifications:
      "Community Host, Cultural Storytelling, Group Travel Curation",
    highlight_specialisation:
      "Women-Led Travel, Heritage Journeys, Cultural Immersion, Wellness & Adventure Travel, Community Experiences",
    highlight_labels: {
      certifications: "Background",
      specialisation: "Specialities",
    },

    itineraries: [
      {
        id: 1,
        itinerary_title: "Around Karakoram: A Woman-Led Journey",
        itinerary_slug: "womens-adventure-cultural-sep2026",
        itinerary_image: "/assets/Iternaries/adventure.webp",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Year-round · on request",
        itinerary_duration: "10 days",
        itinerary_group_size: "Woman-led · open to all",
        itinerary_difficulty: "Easy",
        itinerary_price_from: "£1,650",
        itinerary_rating: 0,
        itinerary_review_count: 0,
      },
      {
        id: 2,
        itinerary_title: "The Karakoram: Wellness & Culinary Journey",
        itinerary_slug: "the-karakoram-wellness-culinary-oct2026",
        hidden: true, // October tours hidden from Community Trips
        itinerary_image: "/assets/Iternaries/wellness.webp",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Oct 17 – 27, 2026",
        itinerary_duration: "11 days",
        itinerary_group_size: "Women-only · 10–14 travellers",
        itinerary_difficulty: "Moderate",
        itinerary_price_from: "£1,950",
        itinerary_rating: 0,
        itinerary_review_count: 0,
      },
    ],

    gallery_images: [],

    specialist_video_url: "",

    gallery_quote: "",

    reviews: [],

    cta_pitch_text: "",
    max_group_size: 14,
  },
];

// Drop itineraries flagged `hidden: true` so they don't appear anywhere on the site.
const withVisibleItineraries = (profile) =>
  profile && {
    ...profile,
    itineraries: (profile.itineraries || []).filter((it) => !it.hidden),
  };

// Profiles flagged `hidden: true` are treated as if they do not exist: no cards, and their URL 404s.
const VISIBLE_PROFILES = SPECIALIST_PROFILES.filter((profile) => !profile.hidden);

export const getSpecialistProfileBySlug = (slugOrId) => {
  if (!slugOrId) return null;
  return withVisibleItineraries(
    VISIBLE_PROFILES.find(
      (profile) =>
        profile.specialist_slug === slugOrId || profile.id === slugOrId
    ) || null
  );
};

export const getAllSpecialistProfiles = () =>
  VISIBLE_PROFILES.map(withVisibleItineraries);

// Map a specialist entry onto the cohosted-profile shape, so specialist pages
// render with the same components as the cohost pages (components/cohostedScreen).
export const toCohostProfile = (profile) => {
  if (!profile) return null;
  const firstName = profile.specialist_name.split(" ")[0];
  const pronoun = profile.pronoun || "their";
  return {
    id: profile.specialist_slug,
    name: profile.specialist_name,
    firstName,
    pronoun,
    profileImage: profile.specialist_photo,
    heroImage: profile.hero_image || profile.specialist_photo,
    verified: !!profile.is_verified,
    about: profile.bio_text,
    socialLinks: [
      profile.instagram_url && { icon: "/assets/cohosted_profile/svgs/instagram.svg", href: profile.instagram_url, label: "Instagram" },
    ].filter(Boolean),
    highlights: profile.host_highlights || [],
    // itinerary links carry ?specialist= so the tour page shows the right host
    itineraryQuery: `specialist=${profile.specialist_slug}`,
    upcomingItineraries: [
      {
        sectionTitle: "Upcoming Itineraries",
        itineraries: (profile.itineraries || []).map((it) => ({
          id: it.id,
          itineraryId: it.itinerary_slug,
          title: it.itinerary_title,
          image: it.itinerary_image,
          date: [it.itinerary_dates, it.itinerary_duration].filter(Boolean).join(" · "),
          travelers: it.itinerary_group_size,
          price: it.itinerary_price_from,
          rating: it.itinerary_rating,
          reviews: it.itinerary_review_count,
          link: `/package-tour/${it.itinerary_slug}`,
        })),
      },
    ],
    gallery_images: profile.gallery_images || [],
    specialist_name: profile.specialist_name,
    cta: {
      title: `Join ${firstName} on ${pronoun === "their" ? "Their" : pronoun[0].toUpperCase() + pronoun.slice(1)} Next Adventure`,
      text: `Experience Pakistan's mountains, heritage and hospitality with ${firstName}. Limited spots available on upcoming tours.`,
    },
  };
};
