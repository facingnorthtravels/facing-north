// Travel Specialist Profile data
// See FN 08 SpecialistProfilePage brief for field-level spec.
// One CMS entry per specialist.

export const SPECIALIST_PROFILES = [
  {
    id: "2",
    specialist_name: "Ali Imran Fazal",
    specialist_slug: "ali-imran-pakistan",
    specialist_photo: "/assets/cohosted_profile/ali-imran.webp",
    specialist_og_image:
      "/assets/specialist_profile/specialist_ali-imran-pakistan_og.jpg",
    hero_image: "/assets/cohosted_profile/ali-imran-hero.jpg",
    is_verified: true,
    specialisation_type: "Adventure & Trekking",

    bio_text:
      "My name is Ali Imran Fazal, born with wanderlust in my veins and mountains in my soul. For the last 15 years I have returned to the mountains of northern Pakistan every single year — not because I planned to, but because I simply cannot stay away. Whenever I am surrounded by the Himalaya and the Karakoram, I feel I am back home.\n\nFor me, travel has never been about destinations. It's about raw, unfiltered moments, where glaciers tell ancient stories, rivers speak without words, and the silence of a mountain pass says more than any conversation ever could.\n\nI don't just guide trips. I weave experiences, build connections, and share the stories that these lands have quietly been waiting to tell. I believe the most honest version of this earth lives in its rawest corners, and the most honest version of ourselves is found when we step into them.\n\nCome for the mountains. Leave with a story you'll tell for the rest of your life. Looking forward to amazing stories, travels and times with you all.",

    usp_statement: "",

    website_url: "",
    linkedin_url: "",
    instagram_url: "",

    highlight_destinations: "Hunza, Gilgit, Skardu & Deosai",
    highlight_years: null,
    highlight_languages: "English, Urdu",
    highlight_certifications:
      "15 Years Returning to Northern Pakistan, Mountain Storytelling, Experience Design",
    highlight_specialisation:
      "Karakoram & Himalaya Journeys, Adventure & Trekking, Cultural Immersion, Storytelling",
    highlight_labels: {
      certifications: "Background",
      specialisation: "Specialities",
    },

    itineraries: [
      {
        id: 1,
        itinerary_title: "Discover Pakistan — The Classic Karakoram Journey",
        itinerary_slug: "discover-pakistan-ali-imran",
        itinerary_image: "/assets/Iternaries/karakoram.jpg",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Year-round departures",
        itinerary_duration: "10 days",
        itinerary_group_size: "Small group · 2–15 travellers",
        itinerary_difficulty: "Moderate",
        itinerary_price_from: "£1,200",
        itinerary_rating: 0,
        itinerary_review_count: 0,
      },
    ],

    gallery_images: [],

    specialist_video_url: "",

    gallery_quote: "",

    reviews: [],

    cta_pitch_text: "",
    max_group_size: 15,
  },
  {
    id: "1",
    specialist_name: "Najma Mehmood",
    specialist_slug: "najma-mehmood-pakistan",
    specialist_photo:
      "/assets/cohosted_profile/najma2.webp",
    specialist_og_image:
      "/assets/specialist_profile/specialist_najma-mehmood-pakistan_og.jpg",
    hero_image: "/assets/cohosted_profile/Najma3.png",
    is_verified: true,
    specialisation_type: "Cultural & Women-Led Travel",

    bio_text:
      "I'm Najma, a UK-based community host and cultural curator with a deep love for culture, heritage and meaningful travel. My work is rooted in curating thoughtful journeys that bring people closer to places, history and themselves through connection, adventure and shared experience. Alongside travel, I've been passionate about creating greater access for women in outdoor and nature spaces through hiking and community-led experiences. Over the years, this has evolved into co-hosting and leading culturally immersive women's trips across destinations including Pakistan and Saudi Arabia. I'm drawn to travel that feels intentional, grounding and emotionally enriching — experiences that combine culture, wellness, adventure, storytelling and human connection in a meaningful way. Through the collaboration with Facing North, I hope to help others experience the warmth, beauty and depth of Pakistan in a way that feels inspiring, immersive and deeply personal.",

    usp_statement: "",

    website_url: "",
    linkedin_url: "",
    instagram_url:
      "https://www.instagram.com/chai_infused_adventures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",

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
        itinerary_title: "Women's Adventure & Cultural Tour",
        itinerary_slug: "womens-adventure-cultural-sep2026",
        itinerary_image: "/assets/Iternaries/adventure.jpg",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Sep 25 – Oct 4, 2026",
        itinerary_duration: "10 days",
        itinerary_group_size: "Women-only · 10–14 travellers",
        itinerary_difficulty: "Moderate",
        itinerary_price_from: "£1,600",
        itinerary_rating: 0,
        itinerary_review_count: 0,
      },
      {
        id: 2,
        itinerary_title: "The Karakoram: Wellness & Culinary Journey",
        itinerary_slug: "the-karakoram-wellness-culinary-oct2026",
        itinerary_image: "/assets/Iternaries/wellness.jpg",
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

export const getSpecialistProfileBySlug = (slugOrId) => {
  if (!slugOrId) return null;
  return (
    SPECIALIST_PROFILES.find(
      (profile) =>
        profile.specialist_slug === slugOrId || profile.id === slugOrId
    ) || null
  );
};

export const getAllSpecialistProfiles = () => SPECIALIST_PROFILES;
