import fs from 'fs';
import path from 'path';

// We will read menuData.js as a string and parse it or use regex to extract the items.
// Since menuData.js is ES module, we can read it and run it or parse it.
// Let's read menuData.js file content.
const content = fs.readFileSync('src/data/menuData.js', 'utf8');

// Let's extract items using regex
const items = [];
const itemRegex = /{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"[^}]+image:\s*"([^"]+)"/g;
let match;
while ((match = itemRegex.exec(content)) !== null) {
  items.push({
    id: parseInt(match[1]),
    name: match[2],
    image: match[3]
  });
}

console.log(`Found ${items.length} items with simple parse:`);
items.forEach(item => {
  console.log(`ID: ${item.id} | Name: ${item.name} | Image: ${item.image}`);
});
