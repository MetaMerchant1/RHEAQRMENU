import fs from 'fs';

const content = fs.readFileSync('C:\\Users\\Ekrem\\.gemini\\antigravity\\brain\\5039a2a5-f8e2-407d-8f59-1e73d039cb6c\\.system_generated\\steps\\528\\content.md', 'utf8');

const regex = /matcha/gi;
const matches = [];
let match;
while ((match = regex.exec(content)) !== null) {
  matches.push({
    index: match.index,
    context: content.substring(match.index - 100, match.index + 100)
  });
}

console.log(`Found ${matches.length} matches for "matcha":`);
matches.forEach((m, idx) => {
  console.log(`\nMatch ${idx + 1}:`);
  console.log(m.context.trim());
});
