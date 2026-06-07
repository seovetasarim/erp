import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cozumlerDir = path.join(__dirname, '../src/app/cozumler');

function deriveDesc(title, items) {
  const first = items[0] || '';
  const dash = first.indexOf(' – ');
  if (dash > 0) return first.slice(0, dash) + ' ve ilgili işlemleri tek ekrandan yönetin.';
  return `${title} modülü ile işlemlerinizi DijitalERP üzerinden yönetin.`;
}

function transformContentFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  if (src.includes('SolutionFeatures')) return false;

  const featuresMatch = src.match(/const\s+(\w+)\s*=\s*(\[[\s\S]*?\]);/);
  if (!featuresMatch) {
    console.warn('No features array:', filePath);
    return false;
  }

  const h2Match = src.match(/<h2>([^<]+)<\/h2>/);
  const pMatch = src.match(/<h2>[^<]+<\/h2>\s*<p>([^<]+)<\/p>/);
  if (!h2Match || !pMatch) {
    console.warn('No header:', filePath);
    return false;
  }

  const featuresVar = featuresMatch[1];
  const featuresArray = featuresMatch[2];
  const title = h2Match[1].trim();
  const subtitle = pMatch[1].trim();

  const importLine = src.match(/^import\s+{([^}]+)}\s+from\s+'lucide-react';/m);
  if (!importLine) {
    console.warn('No lucide import:', filePath);
    return false;
  }

  const icons = importLine[1]
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s && s !== 'Check');

  const newSrc = `'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { ${icons.join(', ')} } from 'lucide-react';

const rawFeatures = ${featuresArray};

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: cat.desc ?? deriveDesc(cat.title, cat.items),
  items: cat.items,
}));

function deriveDesc(title, items) {
  const first = items[0] || '';
  const dash = first.indexOf(' – ');
  if (dash > 0) return first.slice(0, dash) + ' ve ilgili işlemleri tek ekrandan yönetin.';
  return title + ' modülü ile işlemlerinizi DijitalERP üzerinden yönetin.';
}

export default function ${path.basename(filePath, '.tsx')}() {
  return (
    <SolutionFeatures
      title="${title.replace(/"/g, '\\"')}"
      subtitle="${subtitle.replace(/"/g, '\\"')}"
      categories={categories}
    />
  );
}
`;

  fs.writeFileSync(filePath, newSrc);
  return true;
}

function parseHeroFromMetadata(pageSrc, slug) {
  const titleMatch = pageSrc.match(/title:\s*'([^']+)'/);
  const descMatch = pageSrc.match(/description:\s*(?:'([^']+)'|`([^`]+)`|"([^"]+)")/s);
  const metaTitle = titleMatch ? titleMatch[1] : slug;
  const pageTitle = metaTitle.split('|')[0].trim();
  const description = (descMatch && (descMatch[1] || descMatch[2] || descMatch[3] || '')).trim();
  const moduleName = pageTitle.replace(/\s*Yazılımı\s*$/i, '').replace(/\s*Programı\s*$/i, '').trim();

  const linkText = moduleName + ' modüllerini inceleyin';
  const eyebrow = 'DijitalERP — ' + moduleName + ' Modülü';

  return { eyebrow, title: pageTitle, description, linkText };
}

function transformPageFile(pagePath) {
  const slug = path.basename(path.dirname(pagePath));
  if (slug === 'stok-takip') return false;

  let src = fs.readFileSync(pagePath, 'utf8');
  if (src.includes('SolutionHero')) return false;

  const hero = parseHeroFromMetadata(src, slug);

  const contentImport = src.match(/import\s+(\w+)\s+from\s+'([^']+Content)';/);
  if (!contentImport) {
    console.warn('No content import:', pagePath);
    return false;
  }
  const contentName = contentImport[1];

  const newSrc = `import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ${contentName} from '${contentImport[2]}';

${src.match(/export const metadata[\s\S]*?};\n/)?.[0] || ''}
const hero = {
  eyebrow: '${hero.eyebrow.replace(/'/g, "\\'")}',
  title: '${hero.title.replace(/'/g, "\\'")}',
  description: '${hero.description.replace(/'/g, "\\'")}',
  linkText: '${hero.linkText.replace(/'/g, "\\'")}',
};

export default function ${slug.split('-').map((w, i) => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <${contentName} />
      </AnimateSection>
      <AnimateSection sectionType="pricing" delay={80}>
        <PricingSection />
      </AnimateSection>
      <AnimateSection sectionType="faq" delay={80}>
        <VideoFaqSection />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
`;

  fs.writeFileSync(pagePath, newSrc);
  return true;
}

let contentCount = 0;
let pageCount = 0;

for (const entry of fs.readdirSync(cozumlerDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === '_shared' || entry.name === 'stok-takip') continue;
  const dir = path.join(cozumlerDir, entry.name);

  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('Content.tsx') && !file.includes('Seo')) {
      if (transformContentFile(path.join(dir, file))) contentCount++;
    }
  }

  const pagePath = path.join(dir, 'page.tsx');
  if (fs.existsSync(pagePath) && transformPageFile(pagePath)) pageCount++;
}

// Shared content dirs (imported from sibling folders)
const sharedContentDirs = [
  'depo-takip',
  'e-fatura-yazilimi',
  'fatura-yazilimi',
  'kargo-etiketi',
  'perakende',
  'toptan-satis',
  'cari-hesap-yazilimi',
];

for (const name of sharedContentDirs) {
  const dir = path.join(cozumlerDir, name);
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('Content.tsx') && !file.includes('Seo')) {
      const fp = path.join(dir, file);
      if (transformContentFile(fp)) contentCount++;
    }
  }
}

console.log(`Migrated ${contentCount} content files, ${pageCount} page files.`);
