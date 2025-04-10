# V Heal Foundation - SEO Implementation

This document outlines the SEO implementation for the V Heal Foundation website.

## Sitemap Generation

A sitemap is automatically generated during the build process. The sitemap is created using the `scripts/generateSitemap.js` script and is placed in the `public` directory.

### How it works

1. The sitemap generator script (`scripts/generateSitemap.js`) creates an XML sitemap with all the important pages of the website.
2. Each page has a priority and change frequency defined in the script.
3. The sitemap is automatically generated before each build using the `prebuild` script in `package.json`.

### Manual Generation

To manually generate the sitemap, run:

```bash
npm run generate-sitemap
```

## SEO Component

A reusable SEO component has been implemented to manage meta tags across the site. The component is located at `src/components/SEO.jsx`.

### Usage

The SEO component is used on each page to set page-specific meta tags:

```jsx
<SEO 
  title="Page Title"
  description="Page description for search engines and social media."
  keywords={['keyword1', 'keyword2', 'keyword3']}
  ogImage="https://example.com/image.jpg" // Optional
  ogType="website" // Optional
  canonicalUrl="https://example.com/page" // Optional
/>
```

### Implemented Pages

The SEO component has been added to the following pages:

1. **Home** - General information about V Heal Foundation
2. **About Us** - Information about the foundation's mission and values
3. **Happenings (Gallery)** - Events, experiences, and endeavors
4. **Accolades (Stories)** - Success stories and commendations
5. **Testimonials** - Words from those who have experienced our services
6. **Connect With Us (Contact)** - Contact information and forms

## robots.txt

The `robots.txt` file is located in the `public` directory and allows all web crawlers to access the site. It also points to the sitemap location.

## Meta Tags

Each page includes the following meta tags:

- Title
- Description
- Keywords
- Open Graph tags (for social media sharing)
- Twitter Card tags

## Maintenance

When adding new pages to the site:

1. Import the SEO component: `import SEO from "../components/SEO";`
2. Add the SEO component to the page with appropriate meta information
3. Add the new page to the `pages` array in `scripts/generateSitemap.js`
