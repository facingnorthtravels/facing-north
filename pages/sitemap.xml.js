import { DESTIATIONS } from '../data/destinations';
import { TOUR_PAKAGE } from '../data/tours-pakages';
import { blogs } from '../data/blogs';

const SITE_URL = 'https://facingnorthtravels.com';

const staticPages = [
  { url: '/',                      changefreq: 'weekly',  priority: '1.0' },
  { url: '/about',                 changefreq: 'monthly', priority: '0.8' },
  { url: '/destinations',          changefreq: 'weekly',  priority: '0.9' },
  { url: '/package-tour',          changefreq: 'weekly',  priority: '0.9' },
  { url: '/blogs',                 changefreq: 'weekly',  priority: '0.8' },
  { url: '/services',              changefreq: 'monthly', priority: '0.7' },
  { url: '/contact',               changefreq: 'monthly', priority: '0.6' },
  { url: '/faq',                   changefreq: 'monthly', priority: '0.6' },
];

function generateSiteMap() {
  const destinationUrls = DESTIATIONS.map((d) => {
    const slug = `${d.id}-${d.title?.toLowerCase().replace(/\s+/g, '-')}`;
    return `  <url>
    <loc>${SITE_URL}/destinations/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const tourUrls = TOUR_PAKAGE.map((t) => `  <url>
    <loc>${SITE_URL}/package-tour/${t.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

  const blogUrls = blogs.map((b) => {
    const lastmod = b.modifiedDate || b.publishedDate
      ? `\n    <lastmod>${new Date(b.modifiedDate || b.publishedDate).toISOString().split('T')[0]}</lastmod>`
      : '';
    return `  <url>
    <loc>${SITE_URL}/blogs/${b.id}</loc>${lastmod}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  const staticUrls = staticPages.map((p) => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.join('\n')}
${destinationUrls.join('\n')}
${tourUrls.join('\n')}
${blogUrls.join('\n')}
</urlset>`;
}

export default function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
