import fs from 'fs';
import path from 'path';

// Let's load the menuData by running a helper to dump it
const tempJS = `
import { subCategories } from '../src/data/menuData.js';
console.log(JSON.stringify(subCategories, null, 2));
`;
fs.writeFileSync('scratch/temp_load.js', tempJS, 'utf8');

import { execSync } from 'child_process';
const dataStr = execSync('node scratch/temp_load.js').toString();
const subCategories = JSON.parse(dataStr);
fs.unlinkSync('scratch/temp_load.js');

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

// Read all files on disk
const getFilesWithDirs = () => {
  const dirs = ['menu', 'menu 2', 'menu 3'];
  const list = [];
  dirs.forEach(d => {
    const dirPath = path.join('public/images', d);
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach(f => {
        if (fs.statSync(path.join(dirPath, f)).isFile()) {
          list.push({
            dir: d,
            file: f,
            relPath: `/images/${d}/${f}`
          });
        }
      });
    }
  });
  return list;
};

const diskFiles = getFilesWithDirs();

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

let output = 'MENU ITEMS REPORT:\n===================\n\n';

allItems.forEach(item => {
  output += `ID: ${item.id}\n`;
  output += `Category: ${item.category} | Subcategory: ${item.subcategory}\n`;
  output += `Name: ${item.name}\n`;
  output += `Current Image: ${item.image}\n`;
  
  // Find potential matches on disk
  const normalizedItemName = normalizeText(item.name);
  const words = normalizedItemName.split(' ').filter(w => w.length > 2); // only words longer than 2 chars
  
  const matches = [];
  diskFiles.forEach(df => {
    const normalizedFileName = normalizeText(path.parse(df.file).name);
    
    // Check if filename is a exact or very close match
    if (normalizedFileName === normalizedItemName) {
      matches.push({ relPath: df.relPath, score: 100, type: 'Exact match' });
      return;
    }
    
    // Check if filename contains all or most words of item name
    if (words.length > 0) {
      let wordMatches = 0;
      words.forEach(w => {
        if (normalizedFileName.includes(w)) {
          wordMatches++;
        }
      });
      if (wordMatches === words.length) {
        matches.push({ relPath: df.relPath, score: 90, type: 'All words match' });
      } else if (wordMatches > 0 && wordMatches >= words.length / 2) {
        matches.push({ relPath: df.relPath, score: 50, type: 'Partial word match' });
      }
    }
    
    // Check if item name contains the filename (for cases where filename is a single word like 'mila.png')
    if (normalizedItemName.includes(normalizedFileName) && normalizedFileName.length > 3) {
      matches.push({ relPath: df.relPath, score: 70, type: 'Filename in item name' });
    }
  });
  
  // Sort matches by score descending
  matches.sort((a, b) => b.score - a.score);
  
  // Unique matches by relPath
  const uniqueMatches = [];
  const seenPaths = new Set();
  matches.forEach(m => {
    if (!seenPaths.has(m.relPath)) {
      seenPaths.add(m.relPath);
      uniqueMatches.push(m);
    }
  });

  if (uniqueMatches.length > 0) {
    output += 'Potential Disk Matches:\n';
    uniqueMatches.slice(0, 5).forEach(m => {
      output += `  - [Score ${m.score}] ${m.relPath} (${m.type})\n`;
    });
  } else {
    output += 'No direct disk matches found.\n';
  }
  output += '-------------------------------------------------\n\n';
});

fs.writeFileSync('scratch/menu_items_with_images.txt', output, 'utf8');
console.log('Saved report to scratch/menu_items_with_images.txt');
