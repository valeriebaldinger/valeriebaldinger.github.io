/**
 * Check a built Jekyll site before deployment, using only Node's standard library.
 * Usage: node _tests/seo.mjs /absolute/path/to/built/site
 * Input: generated HTML, sitemaps, robots.txt, and headshot assets.
 * Output: a console summary; exits nonzero if a crawlability regression is found.
 * The underscore-prefixed directory is not published by Jekyll.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

assert.ok(process.argv[2], 'Pass the built-site directory.');
const root = path.resolve(process.argv[2]);
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const home = read('index.html');
const canonical = home.match(/<link rel="canonical" href="([^"]+)"/)[1];
assert.ok(canonical.endsWith('/'));
assert.equal((home.match(/<h1\b/g) || []).length, 1);
assert.equal((home.match(/name="description"/g) || []).length, 1);
assert.equal((home.match(/name="google-site-verification"/g) || []).length, 1);
assert.match(home, /<title>Valerie Baldinger — Finance PhD Student, NYU Stern<\/title>/);
assert.doesNotMatch(home, /noindex/);

const jsonBlocks = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1]));
const graph = jsonBlocks.flatMap(block => block['@graph'] || [block]);
const website = graph.find(item => item['@type'] === 'WebSite');
const profile = graph.find(item => item['@type'] === 'ProfilePage');
assert.equal(website.name, 'Valerie Baldinger');
assert.equal(website.url, canonical);
assert.equal(profile.url, canonical);
assert.equal(profile.mainEntity['@type'], 'Person');
assert.equal(profile.mainEntity.name, 'Valerie Baldinger');
assert.equal(profile.mainEntity.affiliation.name, 'NYU Stern School of Business');
assert.ok(profile.mainEntity.sameAs.includes('https://www.linkedin.com/in/valeriebaldinger'));
assert.equal((home.match(/property="og:image"/g) || []).length, 1);
assert.equal((home.match(/name="twitter:card"/g) || []).length, 1);

for (const file of ['index.html', 'teaching/index.html']) {
  const html = read(file);
  assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/);
  assert.equal((html.match(/name="description"/g) || []).length, 1);
  const pageURL = new URL(file.replace(/index\.html$/, ''), canonical);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), pageURL);
    if (url.origin !== pageURL.origin) continue;
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
    assert.ok(fs.existsSync(target), `${file}: missing ${url.pathname}`);
    if (url.hash && target.endsWith('.html')) {
      assert.ok(read(path.relative(root, target)).includes(`id="${url.hash.slice(1)}"`),
        `${file}: missing fragment ${url.hash}`);
    }
  }
}

const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length);
assert.ok(urls.includes(canonical));
assert.deepEqual(read('sitemap.txt').trim().split('\n'), urls);
assert.doesNotMatch(sitemap, /paper-title|\/portfolio\/|\/markdown\/|\/talks\//);
assert.ok(read('robots.txt').includes(`Sitemap: ${canonical}sitemap.xml`));
assert.doesNotMatch(read('robots.txt'), /Disallow:\s*\/(?:\s|$)/);
for (const file of ['404.html', 'terms/index.html', 'sitemap/index.html']) {
  assert.match(read(file), /name="robots" content="noindex, follow"/);
}

const sourceBytes = fs.statSync(path.join(root, 'images/valerie_baldinger_headshot.png')).size;
const variants = [400, 560, 840].map(width => {
  const image = `images/valerie_baldinger_headshot-${width}.webp`;
  const bytes = fs.statSync(path.join(root, image)).size;
  assert.ok(bytes < sourceBytes / 10, `${image} should be substantially smaller`);
  assert.ok(home.includes(`${image} ${width}w`));
  return { width, bytes };
});
assert.match(home, /fetchpriority="high"/);
assert.match(home, /sizes="\(max-width: 680px\) 200px, \(max-width: 900px\) 240px, 280px"/);
assert.equal(fs.existsSync(path.join(root, '_tests')), false);
console.log(JSON.stringify({ passed: true, canonical, sitemapURLs: urls.length, originalImageBytes: sourceBytes, variants }, null, 2));
