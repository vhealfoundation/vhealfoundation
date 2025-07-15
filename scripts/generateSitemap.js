const fs = require('fs');
const path = require('path');

// Your website URL
const BASE_URL = 'https://vhealfoundation.org'; // Replace with your actual domain

// Pages to include in sitemap - Updated to match actual routes
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'Best Counselling & Mental Health Foundation - V Heal Foundation Homepage'
  },
  {
    url: '/aboutus',
    priority: '0.9',
    changefreq: 'monthly',
    description: 'About Best Foundation for Mental Health & Social Work'
  },
  {
    url: '/happenings',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Happenings - Best Counselling Events & Training Programs'
  },
  {
    url: '/accolades',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Accolades - Best Foundation Success Stories'
  },
  {
    url: '/testimonials',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Testimonials - Best Counselling Success Stories'
  },
  {
    url: '/toconnect',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Connect With Best Foundation - Donate Now & Get Support'
  },
  {
    url: '/what-we-do',
    priority: '0.9',
    changefreq: 'monthly',
    description: 'What We Do - Best Counselling Services & Foundation Work'
  },
  {
    url: '/beneficiaries',
    priority: '0.7',
    changefreq: 'monthly',
    description: 'Beneficiaries - Foundation Support & Rehabilitation Services'
  }
];

// Generate sitemap XML with enhanced SEO features
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
  sitemap += 'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" ';
  sitemap += 'xmlns:xhtml="http://www.w3.org/1999/xhtml" ';
  sitemap += 'xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" ';
  sitemap += 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ';
  sitemap += 'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';

  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;

    // Add mobile annotation for better mobile SEO
    sitemap += '    <mobile:mobile/>\n';

    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  return sitemap;
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  let robots = 'User-agent: *\n';
  robots += 'Allow: /\n';
  robots += 'Disallow: /admin/\n';
  robots += 'Disallow: /private/\n';
  robots += 'Disallow: /*.json$\n';
  robots += '\n';
  robots += `Sitemap: ${BASE_URL}/sitemap.xml\n`;
  robots += '\n';
  robots += '# Best Counselling & Mental Health Foundation\n';
  robots += '# V Heal Foundation - Providing best counselling, coaching, and rehabilitation services\n';
  robots += '# Keywords: Best Counselling, Best Foundation, Mental Health, Rehabilitation for Prisoners, New Life\n';

  return robots;
};

// Write sitemap and robots.txt to public directory
const writeSitemapAndRobots = () => {
  const sitemap = generateSitemap();
  const robots = generateRobotsTxt();
  const publicDir = path.resolve(__dirname, '../public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log(`📍 Total pages in sitemap: ${pages.length}`);

  // Write robots.txt
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully at public/robots.txt');

  // Log sitemap details
  console.log('\n📋 Sitemap Contents:');
  pages.forEach(page => {
    console.log(`   ${BASE_URL}${page.url} (Priority: ${page.priority}, Frequency: ${page.changefreq})`);
  });

  console.log('\n🚀 Ready for Google Search Console submission!');
  console.log(`📎 Sitemap URL: ${BASE_URL}/sitemap.xml`);
  console.log(`📎 Robots.txt URL: ${BASE_URL}/robots.txt`);
};

writeSitemapAndRobots();
