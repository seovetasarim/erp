import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cozumlerDir = path.join(__dirname, '../src/app/cozumler');

function gitShow(relPath) {
  try {
    return execSync(`git show HEAD:${relPath}`, { encoding: 'utf8' });
  } catch {
    return null;
  }
}

function extractQuotedValue(block, key) {
  const marker = `${key}:`;
  const idx = block.indexOf(marker);
  if (idx < 0) return '';
  let i = idx + marker.length;
  while (i < block.length && /\s/.test(block[i])) i++;
  if (block[i] !== "'") return '';
  i++;
  let value = '';
  while (i < block.length) {
    if (block[i] === '\\' && block[i + 1] === "'") {
      value += "'";
      i += 2;
      continue;
    }
    if (block[i] === "'") break;
    value += block[i];
    i++;
  }
  return value;
}

function jsString(value) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function parseHero(metaBlock, slug) {
  const metaTitle = extractQuotedValue(metaBlock, 'title') || slug;
  const pageTitle = metaTitle.split('|')[0].trim();
  const description = extractQuotedValue(metaBlock, 'description');
  const moduleName = pageTitle.replace(/\s*Yazılımı\s*$/i, '').replace(/\s*Programı\s*$/i, '').trim();

  return {
    eyebrow: 'DijitalERP — ' + moduleName + ' Modülü',
    title: pageTitle,
    description,
    linkText: moduleName + ' modüllerini inceleyin',
  };
}

function toComponentName(slug) {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
}

let fixed = 0;

for (const entry of fs.readdirSync(cozumlerDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === '_shared' || entry.name === 'stok-takip') continue;

  const slug = entry.name;
  const relPath = `src/app/cozumler/${slug}/page.tsx`;
  const original = gitShow(relPath);
  if (!original) {
    console.warn('No git original:', relPath);
    continue;
  }

  const metadataMatch = original.match(/export const metadata: Metadata = \{[\s\S]*?\};\n/);
  if (!metadataMatch) {
    console.warn('No metadata:', relPath);
    continue;
  }

  const contentImport = original.match(/import\s+(\w+)\s+from\s+'([^']+Content)';/);
  if (!contentImport) {
    console.warn('No content import:', relPath);
    continue;
  }

  const hero = parseHero(metadataMatch[0], slug);
  const contentName = contentImport[1];
  const contentPath = contentImport[2];

  const newSrc = `import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ${contentName} from '${contentPath}';

${metadataMatch[0]}
const hero = {
  eyebrow: ${jsString(hero.eyebrow)},
  title: ${jsString(hero.title)},
  description: ${jsString(hero.description)},
  linkText: ${jsString(hero.linkText)},
};

export default function ${toComponentName(slug)}() {
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

  fs.writeFileSync(path.join(cozumlerDir, slug, 'page.tsx'), newSrc);
  fixed++;
}

console.log(`Fixed ${fixed} page files.`);
