import fs from 'fs';

const content = fs.readFileSync('src/data/menuData.js', 'utf8');

const searchTerms = [
  'pesto',
  'danish',
  'tavuklu',
  'soğanlı',
  'sundrie',
  'churchill',
  'greyfurt',
  'maldives',
  'dubai',
  'orange mango',
  'passion lime',
  'hibiscus',
  'mojito',
  'splash',
  'limonata',
  'bubble',
  'white',
  'bellagio'
];

searchTerms.forEach(term => {
  const regex = new RegExp(`.*${term}.*`, 'gi');
  const matches = content.match(regex);
  if (matches) {
    console.log(`\nMatches for "${term}":`);
    matches.forEach(m => console.log(`  ${m.trim()}`));
  } else {
    console.log(`No matches for "${term}"`);
  }
});
