const { execSync } = require('child_process');
const path = require('path');

// Generate sitemap
console.log('Generating sitemap...');
try {
  execSync('node scripts/generateSitemap.js', { stdio: 'inherit' });
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}

// Build the project
console.log('Building the project...');
try {
  execSync('react-scripts build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Error building the project:', error);
  process.exit(1);
}
