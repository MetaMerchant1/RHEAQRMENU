import fs from 'fs';

let content = fs.readFileSync('src/data/menuData.js', 'utf8');

const replacements = [
  {
    desc: 'Rhea Çay (ID 3)',
    from: 'image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/rhea-cay.png"',
    id: 3
  },
  {
    desc: 'Matcha Latte (ID 30)',
    from: 'image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/matcha-latte.png"',
    id: 30
  },
  {
    desc: 'Banana Matcha Latte (ID 31)',
    from: 'image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/banana-matcha-latte.png"',
    id: 31
  },
  {
    desc: 'Berry Matcha Latte (ID 32)',
    from: 'image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/berry-matcha-latte.png"',
    id: 32
  },
  {
    desc: 'Strawberry Matcha Latte (ID 33)',
    from: 'image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop", placeholder: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/strawberry-matcha-latte.png", placeholder: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop"',
    id: 33
  },
  {
    desc: 'Rhea Gingerbread Latte (ID 36)',
    from: 'image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/rhea-gingerbread-latte.png"',
    id: 36
  },
  {
    desc: 'Dana Jambon Kaşar Kruvasan (ID 68)',
    from: 'image: "/images/menu 3/kruvasan sandwich.png"',
    to: 'image: "/images/menu 3/dana jambon kaşarlı kruvasan.png"',
    id: 68
  },
  {
    desc: 'Crunchy Dubai (ID 160)',
    from: 'image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/crunchy-dubai.png"',
    id: 160
  },
  {
    desc: 'Pistachio Velvet (ID 161)',
    from: 'image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/pistachio-velvet.png"',
    id: 161
  },
  {
    desc: 'Pecan Cream (ID 162)',
    from: 'image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/pecan-cream.png"',
    id: 162
  },
  {
    desc: 'Strawberry Velvet (ID 163)',
    from: 'image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/strawberry-velvet.png"',
    id: 163
  },
  {
    desc: 'Lotus Velvet (ID 164)',
    from: 'image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu/lotus-velvet.png"',
    id: 164
  },
  {
    desc: 'Grapefruit Lemonade (ID 195)',
    from: 'image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=400&fit=crop", placeholder: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=400&fit=crop"',
    to: 'image: "/images/menu 2/Greyfurt limonata.png", placeholder: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=400&fit=crop"',
    id: 195
  },
  {
    desc: 'RHEA Passion Lime (ID 152)',
    from: 'image: "/images/menu 2/passion lime.png"',
    to: 'image: "/images/menu/rhea-passion-lime.png"',
    id: 152
  }
];

let successCount = 0;

replacements.forEach(rep => {
  // Let's do a targeted replace.
  // We'll find the line containing id: <id> and then replace within that context or do string replacement if unique.
  // To be safe, we'll locate the item block.
  const idPattern = new RegExp(`id:\\s*${rep.id}\\b`);
  
  // Let's see if the 'from' string exists in the file.
  if (content.includes(rep.from)) {
    content = content.replace(rep.from, rep.to);
    console.log(`Successfully replaced: ${rep.desc}`);
    successCount++;
  } else {
    // If it doesn't match directly, let's try a regex for the image field inside that item's line.
    console.warn(`WARNING: Could not directly find target string for ${rep.desc}`);
  }
});

if (successCount === replacements.length) {
  fs.writeFileSync('src/data/menuData.js', content, 'utf8');
  console.log('All replacements applied successfully and menuData.js updated.');
} else {
  console.error(`ERROR: Only ${successCount}/${replacements.length} replacements succeeded. File was NOT written.`);
}
