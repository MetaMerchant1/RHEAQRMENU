import fs from 'fs';

// Construct temp load
const tempJS = `
import { subCategories } from '../src/data/menuData.js';
console.log(JSON.stringify(subCategories, null, 2));
`;
fs.writeFileSync('scratch/temp_load.js', tempJS, 'utf8');

import { execSync } from 'child_process';
const dataStr = execSync('node scratch/temp_load.js').toString();
const subCategories = JSON.parse(dataStr);
fs.unlinkSync('scratch/temp_load.js');

console.log('Items with Unsplash URLs:');
for (const catId in subCategories) {
  for (const subCat of subCategories[catId]) {
    subCat.items.forEach(item => {
      if (item.image && item.image.startsWith('https://images.unsplash.com')) {
        console.log(`- [ID: ${item.id}] ${item.name} (${subCat.name})`);
        console.log(`    URL: ${item.image}`);
      }
    });
  }
}
