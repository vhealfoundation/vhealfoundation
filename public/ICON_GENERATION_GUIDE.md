
# V Heal Foundation - Icon Generation Guide

## Required Icon Sizes for Optimal Social Media Sharing

### For WhatsApp and Social Media Sharing:
- **og-image.png**: 1200x630px (Open Graph standard)
- **twitter-image.png**: 1200x600px (Twitter Card)
- **whatsapp-image.png**: 400x400px (WhatsApp preview)

### For Favicon and App Icons:
- **favicon.ico**: 16x16, 32x32, 48x48px (multi-size ICO file)
- **apple-touch-icon.png**: 180x180px (iOS devices)
- **android-chrome-192x192.png**: 192x192px (Android)
- **android-chrome-512x512.png**: 512x512px (Android)

### Current Setup:
Your website currently uses:
- logo.png (existing file)
- favicon.ico (existing file)

## Instructions to Create Missing Icons:

### Step 1: Create Social Media Images
1. **Open your logo.png in an image editor (Photoshop, GIMP, Canva, etc.)**
2. **Create the following files:**

   **og-image.png** (1200x630px):
   - Background: White or your brand color (#003153)
   - Logo: Centered, with "V Heal Foundation" text
   - Subtitle: "Best Counselling & Mental Health Foundation"
   - Save as PNG

   **twitter-image.png** (1200x600px):
   - Similar to og-image but slightly different aspect ratio
   - Include "Donate Now" call-to-action

   **whatsapp-image.png** (400x400px):
   - Square format with logo centered
   - Clean, simple design for small preview

### Step 2: Create App Icons
1. **apple-touch-icon.png** (180x180px):
   - Square logo with rounded corners
   - No transparency (solid background)

2. **android-chrome-192x192.png** (192x192px):
   - Square logo, can have transparency
   - Clean, minimal design

3. **android-chrome-512x512.png** (512x512px):
   - Same as 192x192 but larger
   - High resolution for app stores

### Step 3: Update Favicon
1. **Create a multi-size favicon.ico**:
   - Include 16x16, 32x32, and 48x48 sizes
   - Use online tools like favicon.io or realfavicongenerator.net

## Quick Online Tools:
- **Favicon Generator**: https://favicon.io/
- **Real Favicon Generator**: https://realfavicongenerator.net/
- **Canva**: https://canva.com (for social media images)
- **GIMP**: https://gimp.org (free image editor)

## File Placement:
All icon files should be placed in the `public/` directory:

```
public/
├── favicon.ico
├── logo.png (existing)
├── og-image.png (create)
├── twitter-image.png (create)
├── whatsapp-image.png (create)
├── apple-touch-icon.png (create)
├── android-chrome-192x192.png (create)
└── android-chrome-512x512.png (create)
```

## Testing Social Media Sharing:
After creating the icons, test your social media sharing:

1. **WhatsApp**: Share your website link and check if logo appears
2. **Facebook**: Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
3. **Twitter**: Use Twitter Card Validator: https://cards-dev.twitter.com/validator
4. **LinkedIn**: Share the link and check preview

## Current Manifest.json Configuration:
Your manifest.json is already updated with proper V Heal Foundation branding.
Once you create the additional icon files, the social media sharing will show your logo instead of the default React logo.

## Brand Colors for Icons:
- Primary: #003153 (Dark Blue)
- Secondary: #f3f4f6 (Light Gray)
- Accent: #fd8917 (Orange)
- Background: #ffffff (White)

Use these colors consistently across all your icons for brand recognition.
