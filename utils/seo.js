// SEO Metadata Utility
// This file contains functions to generate SEO metadata for all pages

export const DEFAULT_SEO = {
  siteName: "Facing North Adventures",
  defaultTitle: "Travel North Pakistan | Facing North Adventures",
  defaultDescription: "Explore the breathtaking beauty of Northern Pakistan. Plan your next journey with curated adventures, expert guides, and unforgettable experiences.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://facingnorthtravels.com",
  defaultImage: "/assets/og-image.jpeg",
//   defaultImage: "/assets/homepage/bookNowImg.jpg",
  twitterHandle: "@facingnorth",
};

/**
 * Generate page metadata
 * @param {Object} options - Metadata options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.image - OG image URL
 * @param {string} options.url - Canonical URL
 * @param {string} options.type - OG type (website, article, etc.)
 * @param {string} options.keywords - Meta keywords
 * @returns {Object} - Metadata object for Next.js Head component
 */
export const generateMetadata = ({
  title,
  description,
  image,
  url,
  type = "website",
  keywords,
  author,
  publishedTime,
  modifiedTime,
}) => {
  const fullTitle = title ? `${title} | ${DEFAULT_SEO.siteName}` : DEFAULT_SEO.defaultTitle;
  const metaDescription = description || DEFAULT_SEO.defaultDescription;
  
  // Handle image URLs - check if it's already a full URL or a path
  let metaImage;
  if (image) {
    // Handle Next.js imported images (objects with .src property)
    const imageString = typeof image === 'string' ? image : image?.src || String(image);
    
    if (imageString.startsWith('http://') || imageString.startsWith('https://')) {
      metaImage = imageString;
    } else {
      // Remove duplicate slashes and ensure proper path
      const imagePath = imageString.startsWith('/') ? imageString : `/${imageString}`;
      metaImage = `${DEFAULT_SEO.siteUrl}${imagePath}`;
    }
  } else {
    metaImage = `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.defaultImage}`;
  }
  
  const canonicalUrl = url ? `${DEFAULT_SEO.siteUrl}${url}` : DEFAULT_SEO.siteUrl;

  return {
    title: fullTitle,
    description: metaDescription,
    canonical: canonicalUrl,
    openGraph: {
      type,
      url: canonicalUrl,
      title: fullTitle,
      description: metaDescription,
      siteName: DEFAULT_SEO.siteName,
      image: metaImage,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { author }),
    },
    twitter: {
      card: "summary_large_image",
      site: DEFAULT_SEO.twitterHandle,
      title: fullTitle,
      description: metaDescription,
      image: metaImage,
    },
    keywords,
  };
};

/**
 * Generate destination page metadata
 */
export const getDestinationMetadata = (destination) => {
  if (!destination) return generateMetadata({});

  // Handle detailed_description as array or string
  let descriptionText = '';
  if (destination.detailed_description) {
    descriptionText = Array.isArray(destination.detailed_description)
      ? destination.detailed_description.join(' ').substring(0, 155)
      : destination.detailed_description.substring(0, 155);
  }

  return generateMetadata({
    title: `${destination.title} Travel Guide`,
    description: descriptionText 
      || `Discover ${destination.title} with Facing North. Expert guides, curated itineraries, and unforgettable experiences in Northern Pakistan.`,
    image: destination.bgImg || destination.explore_img,
    url: `/destinations/${destination.id}-${destination.title?.toLowerCase().replace(/\s+/g, '-')}`,
    keywords: `${destination.title}, Pakistan travel, Northern Pakistan, travel guide, ${destination.title} tourism`,
  });
};

/**
 * Generate tour package metadata
 */
export const getTourPackageMetadata = (tour) => {
  if (!tour) return generateMetadata({});

  return generateMetadata({
    title: tour.title,
    description: tour.description 
      ? (Array.isArray(tour.description) ? tour.description.join(' ').substring(0, 155) : tour.description.substring(0, 155))
      : `${tour.days} days tour package to ${tour.title}. Starting from ${tour.price}. Book your adventure with Facing North Adventures.`,
    image: tour.service_img || tour.overview?.overviewImg,
    url: `/package-tour/${tour.id}`,
    keywords: `${tour.title}, Pakistan tour package, ${tour.provincesCovered}, ${tour.days} days tour, adventure travel Pakistan`,
  });
};

/**
 * Generate blog post metadata
 */
export const getBlogMetadata = (blog) => {
  if (!blog) return generateMetadata({});

  const excerpt = Array.isArray(blog.paras) 
    ? (typeof blog.paras[0] === 'string' ? blog.paras[0] : blog.paras[0]?.para || '')
    : '';

  return generateMetadata({
    title: blog.title,
    description: excerpt.substring(0, 155),
    image: blog.img?.src || blog.img,
    url: `/blogs/${blog.id}`,
    type: "article",
    keywords: `Pakistan travel blog, ${blog.slug}, travel stories, Northern Pakistan`,
    publishedTime: blog.publishedDate,
    modifiedTime: blog.modifiedDate,
  });
};

/**
 * Generate service page metadata
 */
export const getServiceMetadata = (service) => {
  if (!service) return generateMetadata({});

  return generateMetadata({
    title: service.title,
    description: service.description?.substring(0, 155) || `Explore our ${service.title} services. Professional travel services for your Northern Pakistan adventure.`,
    image: service.image || service.banner_img,
    url: `/services/${service.id}`,
    keywords: `${service.title}, travel services Pakistan, adventure services`,
  });
};

/**
 * Generate cohosted profile metadata
 */
export const getCohostedProfileMetadata = (profile) => {
  if (!profile) return generateMetadata({});

  return generateMetadata({
    title: `${profile.name} - Travel Host`,
    description: profile.bio?.substring(0, 155) || `Meet ${profile.name}, your expert travel host for Northern Pakistan adventures. Join hosted trips with local expertise.`,
    image: profile?.shareImage || profile.profileImage || profile.bannerImage,
    url: `/cohosted-profile/${profile.id}`,
    keywords: `${profile.name}, travel host Pakistan, cohosted trips, guided tours Pakistan`,
  });
};

/**
 * Static page metadata configurations
 */
export const STATIC_PAGES_METADATA = {
  home: {
    title: "Travel North Pakistan",
    description: "Explore the breathtaking beauty of Northern Pakistan. Plan your next journey with curated adventures, expert guides, and unforgettable experiences.",
    keywords: "Pakistan travel, Northern Pakistan, adventure travel, Hunza, Skardu, Gilgit, travel agency Pakistan",
    url: "/",
  },
  about: {
    title: "About Us",
    description: "Discover our passion for exploring Northern Pakistan. Learn about our mission, values, and the team behind unforgettable travel experiences.",
    keywords: "about Facing North, travel company Pakistan, adventure tours team",
    url: "/about",
  },
  destinations: {
    title: "Destinations in Pakistan",
    description: "Discover Pakistan's most stunning destinations. Explore Hunza, Skardu, Swat, Chitral and more. Get inspired for your next mountain adventure.",
    keywords: "Pakistan destinations, Hunza, Skardu, Swat, Chitral, Naran, Northern Pakistan destinations",
    url: "/destinations",
  },
  packageTours: {
    title: "Tour Packages",
    description: "Browse our curated tour packages to Northern Pakistan. From adventure treks to cultural experiences, find your perfect journey.",
    keywords: "Pakistan tour packages, adventure tours, Hunza tours, Skardu tours, guided tours Pakistan",
    url: "/package-tour",
  },
  blogs: {
    title: "Travel Blog",
    description: "Read inspiring stories, travel tips, and guides from our adventures in Northern Pakistan. Your journey starts with knowledge.",
    keywords: "Pakistan travel blog, travel stories, adventure blog, Northern Pakistan guides",
    url: "/blogs",
  },
  services: {
    title: "Our Services",
    description: "Comprehensive travel services for your Pakistan adventure. From planning to execution, we handle everything for your perfect trip.",
    keywords: "travel services Pakistan, tour planning, travel agency services",
    url: "/services",
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with Facing North Adventures. Let's plan your dream trip to Northern Pakistan together.",
    keywords: "contact Facing North, travel inquiry Pakistan, book tour Pakistan",
    url: "/contact",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about traveling to Northern Pakistan. Everything you need to know before your adventure.",
    keywords: "Pakistan travel FAQ, travel questions, Northern Pakistan travel guide",
    url: "/faq",
  },
  terms: {
    title: "Terms and Conditions",
    description: "Read our terms and conditions for booking tours and services with Facing North Adventures.",
    keywords: "terms and conditions, booking terms, travel policy",
    url: "/terms-and-conditions",
  },
};
