// Travel Specialist Profile data
// See FN 08 SpecialistProfilePage brief for field-level spec.
// One CMS entry per specialist.

export const SPECIALIST_PROFILES = [
  {
    id: "1",
    specialist_name: "Najma Mehmood",
    specialist_slug: "najma-mehmood-pakistan",
    specialist_photo:
      "/assets/cohosted_profile/najma.webp",
    specialist_og_image:
      "/assets/specialist_profile/specialist_najma-mehmood-pakistan_og.jpg",
    hero_image: "/assets/cohosted_profile/coshost_card_image1.jpg",
    is_verified: true,
    specialisation_type: "Cultural & Women-Led Travel",

    bio_text:
      "I'm Najma, a UK-based community host and cultural curator with a deep love for culture, heritage and meaningful travel. My work is rooted in curating thoughtful journeys that bring people closer to places, history and themselves through connection, adventure and shared experience. Alongside travel, I've been passionate about creating greater access for women in outdoor and nature spaces through hiking and community-led experiences. Over the years, this has evolved into co-hosting and leading culturally immersive women's trips across destinations including Pakistan and Saudi Arabia. I'm drawn to travel that feels intentional, grounding and emotionally enriching — experiences that combine culture, wellness, adventure, storytelling and human connection in a meaningful way. Through the collaboration with Facing North, I hope to help others experience the warmth, beauty and depth of Pakistan in a way that feels inspiring, immersive and deeply personal.",

    usp_statement:
      "I curate culturally immersive, women-led journeys that combine culture, wellness, adventure and storytelling into something intentional and deeply personal. My work is about creating greater access for women in outdoor and nature spaces — and helping travellers experience the warmth, beauty and depth of Pakistan in a way no standard tour can replicate.",

    website_url: "",
    linkedin_url: "",
    instagram_url: "https://www.instagram.com/",

    highlight_destinations: "Pakistan · Saudi Arabia",
    highlight_years: null,
    highlight_languages: "English, Urdu, Punjabi",
    highlight_certifications:
      "Community Host, Cultural Storytelling, Group Travel Curation",
    highlight_specialisation:
      "Women-Led Travel, Heritage Journeys, Cultural Immersion, Wellness & Adventure Travel, Community Experiences",

    itineraries: [
      {
        id: 1,
        itinerary_title: "Women's Adventure & Cultural Tour",
        itinerary_slug: "womens-adventure-cultural-sep2026",
        itinerary_image:
          "/assets/IMAGES/tour-packages/autumn-in-skardu/banner.jpeg",
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
        itinerary_image:
          "/assets/IMAGES/tour-packages/autumn-in-skardu/banner.jpeg",
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

    gallery_images: [
      {
        src: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/banner.jpeg",
        caption: "Concordia, K2 Base Camp approach — August 2024",
      },
      {
        src: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/banner.jpg",
        caption: "Deosai Plateau crossing — July 2023",
      },
      {
        src: "/assets/cohosted_profile/coshost_card_image1.jpg",
        caption: "Rakaposhi north face from Karimabad",
      },
      {
        src: "/assets/cohosted_profile/coshost_card_image2.jpg",
        caption: "Local family in Passu",
      },
      {
        src: "/assets/cohosted_profile/coshost_card_image3.jpg",
        caption: "Group at Khunjerab Pass, 4,693m",
      },
      {
        src: "/assets/cohosted_profile/coshost_card_image4.jpg",
        caption: "Morning light on Hunza Valley",
      },
    ],

    specialist_video_url: "",

    gallery_quote:
      "Travel, for me, is about connection — to a place, its people, and to ourselves. When a group of women sit together over a home-cooked meal in a Hunza village, something shifts. That's the moment I do this for.",

    reviews: [
      {
        id: 1,
        review_rating: 5,
        review_text:
          "Najma created a space where I felt completely safe to explore. This wasn't a tour — it was an immersion. We shared meals in local homes, learned from women artisans, and I came back feeling more connected to my heritage than I ever expected. As a woman travelling solo, this was exactly what I needed.",
        reviewer_name: "Sana A.",
        reviewer_location: "London, UK",
        review_trip_name: "Wellness & Culinary Retreat, October 2024",
        reviewer_photo: "",
        review_verified: true,
      },
      {
        id: 2,
        review_rating: 5,
        review_text:
          "Every day felt intentional and beautifully paced. Najma's warmth and her deep knowledge of the culture made the journey personal in a way I haven't experienced anywhere else. The storytelling, the heritage sites, the connection with local communities — it all felt meaningful, never rushed.",
        reviewer_name: "Hina R.",
        reviewer_location: "Manchester, UK",
        review_trip_name: "Cultural Journey through Pakistan, October 2024",
        reviewer_photo: "",
        review_verified: true,
      },
    ],

    cta_pitch_text: "",
    max_group_size: 10,
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
