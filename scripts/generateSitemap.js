const fs = require('fs');
const path = require('path');

// Your website URL
const BASE_URL = 'https://vhealfoundation.org'; // Replace with your actual domain

// Pages to include in sitemap
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    url: '/about-us',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    url: '/gallery',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    url: '/stories',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    url: '/testimonials',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    url: '/contact-us',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    url: '/what-we-do',
    priority: '0.9',
    changefreq: 'monthly'
  }
];

// Generate sitemap XML
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const publicDir = path.resolve(__dirname, '../public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully at public/sitemap.xml');
};

writeSitemap();
