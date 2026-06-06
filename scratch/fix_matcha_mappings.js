import fs from 'fs';

// 1. Overwrite the files on disk with rhea-icon.jpg
try {
  const iconData = fs.readFileSync('public/images/menu/rhea-icon.jpg');
  fs.writeFileSync('public/images/menu/matcha-latte.png', iconData);
  fs.writeFileSync('public/images/menu/berry-matcha-latte.png', iconData);
  console.log('Successfully replaced matcha-latte.png and berry-matcha-latte.png on disk with RHEA icon.');
} catch (e) {
  console.error('Error overwriting files on disk:', e.message);
}

// 2. Revert the menuData.js mappings for ID 30 and ID 32 to Unsplash placeholders
let content = fs.readFileSync('src/data/menuData.js', 'utf8');

const replacements = [
  {
    desc: 'Matcha Latte (ID 30)',
    from: 'image: "/images/menu/matcha-latte.png"',
    to: 'image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop"',
    id: 30
  },
  {
    desc: 'Berry Matcha Latte (ID 32)',
    from: 'image: "/images/menu/berry-matcha-latte.png"',
    to: 'image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop"',
    id: 32
  }
];

let successCount = 0;
replacements.forEach(rep => {
  if (content.includes(rep.from)) {
    content = content.replace(rep.from, rep.to);
    console.log(`Successfully reverted menuData.js mapping for: ${rep.desc}`);
    successCount++;
  } else {
    console.warn(`WARNING: Could not find target string for ${rep.desc}`);
  }
});

if (successCount === replacements.length) {
  fs.writeFileSync('src/data/menuData.js', content, 'utf8');
  console.log('Successfully updated src/data/menuData.js.');
} else {
  console.error(`ERROR: Only ${successCount}/${replacements.length} updates succeeded. File was NOT written.`);
}
