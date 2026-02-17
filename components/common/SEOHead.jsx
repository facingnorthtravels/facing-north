import Head from 'next/head';
import { DEFAULT_SEO } from '../../utils/seo';

/**
 * SEO Head Component
 * Renders all necessary meta tags for SEO and social sharing
 * 
 * @param {Object} metadata - Metadata object from seo.js utility functions
 */
const SEOHead = ({ metadata }) => {
  const {
    title,
    description,
    canonical,
    openGraph,
    twitter,
    keywords,
  } = metadata;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:image" content={openGraph.image} />
      <meta property="og:site_name" content={openGraph.siteName} />
      
      {/* Article specific tags */}
      {openGraph.publishedTime && (
        <meta property="article:published_time" content={openGraph.publishedTime} />
      )}
      {openGraph.modifiedTime && (
        <meta property="article:modified_time" content={openGraph.modifiedTime} />
      )}
      {openGraph.author && (
        <meta property="article:author" content={openGraph.author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content={twitter.card} />
      <meta property="twitter:url" content={openGraph.url} />
      <meta property="twitter:title" content={twitter.title} />
      <meta property="twitter:description" content={twitter.description} />
      <meta property="twitter:image" content={twitter.image} />
      {twitter.site && <meta property="twitter:site" content={twitter.site} />}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={DEFAULT_SEO.siteName} />
    </Head>
  );
};

export default SEOHead;
