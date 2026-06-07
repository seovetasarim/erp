import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const cozumlerDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/app/cozumler');

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('Content.tsx') && !f.includes('Seo')) {
      let s = fs.readFileSync(p, 'utf8');
      if (s.includes('deriveCategoryDesc')) continue;

      s = s.replace(
        "import SolutionFeatures from '../_shared/SolutionFeatures';",
        "import SolutionFeatures from '../_shared/SolutionFeatures';\nimport { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';",
      );
      s = s.replace(/function deriveDesc\(title, items\) \{[\s\S]*?\}\n\n/, '');
      s = s.replace(/deriveDesc\(/g, 'deriveCategoryDesc(');
      fs.writeFileSync(p, s);
      console.log('fixed', p);
    }
  }
}

walk(cozumlerDir);
