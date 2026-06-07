// Travel Specialist Profile data
// See FN 08 SpecialistProfilePage brief for field-level spec.
// One CMS entry per specialist.

export const SPECIALIST_PROFILES = [
  {
    id: "1",
    specialist_name: "Ahmed Khan",
    specialist_slug: "ahmed-khan-pakistan",
    specialist_photo:
      "/assets/cohosted_profile/cohost_lukas.jpg",
    specialist_og_image:
      "/assets/specialist_profile/specialist_ahmed-khan-pakistan_og.jpg",
    hero_image: "/assets/cohosted_profile/coshost_card_image1.jpg",
    is_verified: true,
    specialisation_type: "Trekking & Expedition",

    bio_text:
      "I'm Ahmed Khan, a trekking specialist and expedition leader based in Gilgit, Pakistan. I grew up in the shadow of Rakaposhi and have spent 14 years guiding climbers, trekkers, and cultural travelers through Gilgit-Baltistan, Chitral, and the Karakoram. My expeditions have taken groups to Concordia, K2 base camp, the Deosai Plateau, and dozens of routes that don't appear in any guidebook. I partner with Facing North because they understand what ground-level expertise actually means — and because the travelers they attract are the ones I want to take into these mountains.",

    usp_statement:
      "I have guided 47 expeditions in Gilgit-Baltistan over 14 years. I speak Wakhi, Burushaski, Shina, and Urdu. My relationships with families along the Karakoram routes took a decade to build — and they are the reason our travelers access experiences no booking platform can replicate.",

    website_url: "",
    linkedin_url: "",
    instagram_url: "https://www.instagram.com/",

    highlight_destinations: "Pakistan (Gilgit-Baltistan · Chitral · Karakoram)",
    highlight_years: 14,
    highlight_languages: "English, Urdu, Burushaski, Wakhi, Shina",
    highlight_certifications:
      "Wilderness First Responder, Pakistan Alpine Club Certified Guide",
    highlight_specialisation:
      "High-Altitude Trekking, K2 Region, Karakoram Glacier Routes, Cultural Heritage",

    itineraries: [
      {
        id: 1,
        itinerary_title: "Karakoram Crown Circuit",
        itinerary_slug: "br-around-karakoram-SP26-01-jonas",
        itinerary_image:
          "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/banner.jpeg",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Apr 9 – 18, 2026",
        itinerary_duration: "10 days",
        itinerary_group_size: "12 travelers max",
        itinerary_difficulty: "Strenuous",
        itinerary_price_from: "£2,950",
        itinerary_rating: 5.0,
        itinerary_review_count: 16,
      },
      {
        id: 2,
        itinerary_title: "Fairy Meadows & Nanga Parbat",
        itinerary_slug: "br-around-karakoram-AT26-02-jonas",
        itinerary_image:
          "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/banner.jpg",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Oct 21 – Nov 1, 2026",
        itinerary_duration: "12 days",
        itinerary_group_size: "10 travelers max",
        itinerary_difficulty: "Moderate",
        itinerary_price_from: "£2,450",
        itinerary_rating: 4.8,
        itinerary_review_count: 13,
      },
      {
        id: 3,
        itinerary_title: "Concordia & K2 Base Camp",
        itinerary_slug: "br-around-karakoram-SP26-01-ogik",
        itinerary_image:
          "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/banner.jpg",
        itinerary_country: "Pakistan",
        itinerary_country_flag: "🇵🇰",
        itinerary_dates: "Jul 12 – 28, 2026",
        itinerary_duration: "17 days",
        itinerary_group_size: "8 travelers max",
        itinerary_difficulty: "Strenuous",
        itinerary_price_from: "£3,850",
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
      "The moment we crested Khunjerab Pass at 4,693m and the entire valley opened below us, three people in my group started crying. I've been there 47 times. I still feel it.",

    reviews: [
      {
        id: 1,
        review_rating: 5,
        review_text:
          "Ahmed doesn't guide you through Pakistan. He takes you inside it. We had dinner with a nomadic family on night 3, were camped at 4,200m on night 6, and crossed a glacier on day 9 that I didn't know existed until we were on it. I've been traveling for 20 years. This was different.",
        reviewer_name: "James K.",
        reviewer_location: "Manchester, UK",
        review_trip_name: "Karakoram Crown Circuit, September 2024",
        reviewer_photo: "",
        review_verified: true,
      },
      {
        id: 2,
        review_rating: 5,
        review_text:
          "I was nervous about a high-altitude trek with no prior mountaineering experience. Ahmed assessed my fitness honestly before we left, adjusted the pace on day 4 when altitude hit me, and had me at Concordia on day 8 feeling more capable than I've ever felt anywhere. He is the reason I want to go back.",
        reviewer_name: "Priya S.",
        reviewer_location: "London, UK",
        review_trip_name: "Concordia & K2 Base Camp, July 2024",
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
