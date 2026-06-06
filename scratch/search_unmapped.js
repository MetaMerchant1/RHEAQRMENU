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

const searchTerms = ['chai', 'churchill', 'pesto', 'sundri', 'soğan', 'jambon', 'tavuk'];

console.log('Searching for unmapped terms in item names:');
for (const catId in subCategories) {
  for (const subCat of subCategories[catId]) {
    subCat.items.forEach(item => {
      searchTerms.forEach(term => {
        if (item.name.toLowerCase().includes(term)) {
          console.log(`- [ID: ${item.id}] "${item.name}" in category ${subCat.name}`);
          console.log(`    Current Image: ${item.image}`);
        }
      });
    });
  }
}
