import fs from 'fs';
import path from 'path';

// Helper to recursively get files
const getFiles = (dir, ext) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (fullPath.endsWith(ext)) {
      results.push(fullPath);
    }
  });
  return results;
};

const jsxFiles = getFiles('src', '.jsx');

jsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('images/')) {
    console.log(`File: ${file} contains "images/"`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('images/')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
