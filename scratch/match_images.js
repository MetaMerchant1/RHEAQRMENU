import fs from 'fs';
import path from 'path';

// Load menuData.js dynamically or parse it
// Since it's ES module, we can read it and evaluate it or regex-match.
const menuDataContent = fs.readFileSync('src/data/menuData.js', 'utf8');

// We will construct an evaluation script to import it
const tempJS = `
import { mainCategories, subCategories } from '../src/data/menuData.js';
console.log(JSON.stringify({ mainCategories, subCategories }, null, 2));
`;
fs.writeFileSync('scratch/temp_load.js', tempJS, 'utf8');

import { execSync } from 'child_process';
const dataStr = execSync('node scratch/temp_load.js').toString();
const { mainCategories, subCategories } = JSON.parse(dataStr);
fs.unlinkSync('scratch/temp_load.js');

// Helper to normalize Turkish characters and lower case for matching
function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// Get all files in the directories
const getFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isFile());
};

const menuFiles = getFiles('public/images/menu');
const menu2Files = getFiles('public/images/menu 2');
const menu3Files = getFiles('public/images/menu 3');

console.log(`Files in public/images/menu: ${menuFiles.length}`);
console.log(`Files in public/images/menu 2: ${menu2Files.length}`);
console.log(`Files in public/images/menu 3: ${menu3Files.length}`);

// Flatten all items
const allItems = [];
for (const catId in subCategories) {
  for (const subCat of subCategories[catId]) {
    for (const item of subCat.items) {
      allItems.push({
        category: catId,
        subcategory: subCat.name,
        ...item
      });
    }
  }
}

console.log(`Total items in menuData.js: ${allItems.length}`);

// Check which items use numbered files
console.log('\n--- Checking for items referencing only numbers in image paths ---');
const numberedItems = allItems.filter(item => {
  if (!item.image) return false;
  const basename = path.basename(item.image);
  return /^\d+\.(png|jpe?g|webp)$/i.test(basename);
});
if (numberedItems.length === 0) {
  console.log('No items reference only numbers in image paths.');
} else {
  numberedItems.forEach(item => {
    console.log(`ID: ${item.id} | ${item.name} | Image: ${item.image}`);
  });
}

// Check which items have missing local images
console.log('\n--- Checking for missing local files ---');
const missingLocal = allItems.filter(item => {
  if (!item.image) return false;
  if (!item.image.startsWith('/images/')) return false;
  const localPath = path.join('public', item.image);
  return !fs.existsSync(localPath);
});
if (missingLocal.length === 0) {
  console.log('No missing local files.');
} else {
  missingLocal.forEach(item => {
    console.log(`ID: ${item.id} | ${item.name} | Image: ${item.image} (NOT FOUND)`);
  });
}

// Find possible matches for all items from named files on disk
console.log('\n--- Finding possible matches for items on disk ---');

const directories = {
  'menu': menuFiles,
  'menu 2': menu2Files,
  'menu 3': menu3Files
};

// Find unmatched files that contain letters
const unusedNamedFiles = {};
for (const dirName in directories) {
  unusedNamedFiles[dirName] = directories[dirName].filter(file => {
    // skip if only numbers
    if (/^\d+\.(png|jpe?g|webp)$/i.test(file)) return false;
    // check if this file is currently used in menuData.js
    const relPath = `/images/${dirName}/${file}`;
    const isUsed = allItems.some(item => item.image === relPath);
    return !isUsed;
  });
}

console.log('Unused named files on disk:');
for (const dirName in unusedNamedFiles) {
  console.log(`In public/images/${dirName}:`);
  unusedNamedFiles[dirName].forEach(file => {
    console.log(`  - ${file}`);
  });
}
