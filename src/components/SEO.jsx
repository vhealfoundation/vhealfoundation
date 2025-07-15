import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
  keywords = [],
  ogImage = 'https://vhealfoundation.org/og-image.jpg', // Default OG image
  ogType = 'website',
  canonicalUrl,
  schemaData = null,
  h1Text = null
}) => {
  // Construct the full title with site name
  const fullTitle = title ? `${title} | V Heal Foundation` : 'V Heal Foundation';

  // Use the provided canonical URL or default to current URL
  const canonical = canonicalUrl || window.location.href;

  // Default organization schema
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "V Heal Foundation",
    "description": "Best Counselling & Mental Health Foundation providing psychological services, training, coaching, and prisoner rehabilitation",
    "url": "https://vhealfoundation.org",
    "logo": "https://vhealfoundation.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9840050175",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/vhealfoundation",
      "https://www.linkedin.com/company/vhealfoundation"
    ],
    "foundingDate": "2020",
    "keywords": "Best Counselling, Best Foundation, Mental Health, Social Work, Donate Now, Coaching, Training, Prisoner Rehabilitation"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Enhanced Meta Tags for SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="V Heal Foundation" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="V Heal Foundation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@vhealfoundation" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultOrganizationSchema)}
      </script>

      {/* Google Analytics & Search Console (placeholder for future implementation) */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
    </Helmet>
  );
};

export default SEO;
