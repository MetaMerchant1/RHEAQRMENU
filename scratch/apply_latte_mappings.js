import fs from 'fs';

let content = fs.readFileSync('src/data/menuData.js', 'utf8');

// We will find all lines containing the items and replace their image fields
// Let's print out the matches first to make sure we replace the correct lines.

const targets = [
  { id: 44, name: 'Cortado' },
  { id: 35, name: 'Rhea Toffifee Latte' },
  { id: 36, name: 'Rhea Gingerbread Latte' },
  { id: 37, name: 'Rhea Speculoos Latte' },
  { id: 38, name: 'Hot Monkey Latte' },
  { id: 39, name: 'Toffie Nut Latte' },
  { id: 117, name: 'Coco Star Latte' },
  { id: 118, name: 'Cookie Caramel Latte' }
];

console.log('Finding target lines in menuData.js...');
const lines = content.split('\n');

targets.forEach(target => {
  let found = false;
  lines.forEach((line, idx) => {
    if (line.includes(`id: ${target.id}`) && line.includes(target.name)) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
      found = true;
      
      // Let's replace the image attribute on this line
      // e.g. image: "..." -> image: "/images/menu 2/Latte.png"
      const newLine = line.replace(/image:\s*"[^"]+"/, 'image: "/images/menu 2/Latte.png"');
      lines[idx] = newLine;
    }
  });
  if (!found) {
    console.warn(`WARNING: Could not find item ${target.name} (ID: ${target.id})`);
  }
});

// Join back and write
const updatedContent = lines.join('\n');
fs.writeFileSync('src/data/menuData.js', updatedContent, 'utf8');
console.log('Successfully updated menuData.js with latte.png image mappings.');
