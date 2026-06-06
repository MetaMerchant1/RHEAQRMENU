import fs from 'fs';

const content = fs.readFileSync('src/data/menuData.js', 'utf8');

// Let's print all lines containing the word "name:" and check if we can match any.
const lines = content.split('\n');
const items = [];
lines.forEach((line, index) => {
  if (line.includes('name:')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
