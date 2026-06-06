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

let output = '';
for (const catId in subCategories) {
  output += `=========================================\n`;
  output += `CATEGORY: ${catId.toUpperCase()}\n`;
  output += `=========================================\n`;
  for (const subCat of subCategories[catId]) {
    output += `\n  SUBCATEGORY: ${subCat.name} (${subCat.subtitle || ''})\n`;
    output += `  -----------------------------------------\n`;
    subCat.items.forEach(item => {
      output += `    [ID: ${item.id}] ${item.name}\n`;
      output += `      Image: ${item.image}\n`;
      output += `      Desc:  ${item.description ? item.description.substring(0, 60) + '...' : 'N/A'}\n`;
    });
  }
  output += `\n`;
}

fs.writeFileSync('scratch/menu_summary.txt', output, 'utf8');
console.log('Saved summary to scratch/menu_summary.txt');
