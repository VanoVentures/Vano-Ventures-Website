const fs = require('fs');
const path = require('path');

console.log('--- STARTING COMPREHENSIVE QA AUDIT FOR VANO VENTURES ---');

const distDir = path.join(__dirname, 'dist');
let errorCount = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName}`);
    errorCount++;
  }
}

// 1. Files existence check
assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html exists');
assert(fs.existsSync(path.join(distDir, 'robots.txt')), 'dist/robots.txt exists');
assert(fs.existsSync(path.join(distDir, 'sitemap.xml')), 'dist/sitemap.xml exists');
assert(fs.existsSync(path.join(distDir, 'favicon.svg')), 'dist/favicon.svg exists');

// Brand and portfolio asset files
assert(fs.existsSync(path.join(distDir, 'assets', 'vano-logo.svg')), 'dist/assets/vano-logo.svg exists');
assert(fs.existsSync(path.join(distDir, 'assets', 'projects', 'construction-preview.svg')), 'dist/assets/projects/construction-preview.svg exists');
assert(fs.existsSync(path.join(distDir, 'assets', 'projects', 'portfolio-preview.svg')), 'dist/assets/projects/portfolio-preview.svg exists');
assert(fs.existsSync(path.join(distDir, 'assets', 'projects', 'vano-platform-preview.svg')), 'dist/assets/projects/vano-platform-preview.svg exists');

const htmlContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// 2. SEO Checks
assert(htmlContent.includes('<title>Vano Ventures | Digital Solutions for Growing Businesses</title>'), 'Title tag matches exact brand specification');
assert(htmlContent.includes('name="description" content="Vano Ventures builds modern websites'), 'Meta description matches brand positioning');
assert(htmlContent.includes('rel="canonical" href="https://vanoventures.vercel.app"'), 'Canonical URL tag present');
assert(htmlContent.includes('property="og:title"'), 'Open Graph title tag present');
assert(htmlContent.includes('property="og:description"'), 'Open Graph description tag present');
assert(htmlContent.includes('name="twitter:card"'), 'Twitter card tag present');
assert(htmlContent.includes('@type": "Organization"'), 'Schema.org Organization structured data present');
assert(htmlContent.includes('@type": "WebSite"'), 'Schema.org WebSite structured data present');
assert(htmlContent.includes('@type": "ProfessionalService"'), 'Schema.org ProfessionalService structured data present');
assert(htmlContent.includes('@type": "FAQPage"'), 'Schema.org FAQPage structured data present');

// 3. Sitemap & robots check
const robotsContent = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8');
assert(robotsContent.includes('Sitemap: https://vanoventures.vercel.app/sitemap.xml'), 'robots.txt specifies sitemap correctly');

const sitemapContent = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/</loc>'), 'sitemap.xml contains root URL');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/services</loc>'), 'sitemap.xml contains /services');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/work</loc>'), 'sitemap.xml contains /work');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/about</loc>'), 'sitemap.xml contains /about');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/process</loc>'), 'sitemap.xml contains /process');
assert(sitemapContent.includes('<loc>https://vanoventures.vercel.app/contact</loc>'), 'sitemap.xml contains /contact');

// 4. Check CSS & JS bundles in dist
const cssFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.css'));
const jsFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.js'));
assert(cssFiles.length > 0, `CSS bundle generated (${cssFiles[0]})`);
assert(jsFiles.length > 0, `JS bundle generated (${jsFiles[0]})`);

// 5. Check CSS contains responsive & accessibility tokens
const cssContent = fs.readFileSync(path.join(distDir, 'assets', cssFiles[0]), 'utf-8');
assert(cssContent.includes('prefers-reduced-motion'), 'CSS contains prefers-reduced-motion accessibility rule');

// 6. Check JS bundle for brand & portfolio functionality
const jsContent = fs.readFileSync(path.join(distDir, 'assets', jsFiles[0]), 'utf-8');
assert(jsContent.includes('VANO VENTURES'), 'JS bundle contains prominent VANO VENTURES brand text');
assert(jsContent.includes('Visit Live Website'), 'JS bundle contains Visit Live Website external action');
assert(jsContent.includes('noopener noreferrer'), 'External link has safe security rel attributes');
assert(jsContent.includes('Website link coming soon'), 'Pending projects feature graceful fallback notice');
assert(jsContent.includes('Founder Portfolio'), 'JS bundle contains Founder Portfolio text link');
assert(jsContent.includes('sreerampalani.vercel.app'), 'JS bundle contains founder portfolio destination URL');

console.log(`\nQA Audit finished with ${errorCount} errors.`);
if (errorCount > 0) {
  process.exit(1);
} else {
  console.log('--- ALL AUTOMATED QUALITY CHECKS PASSED ---');
}
