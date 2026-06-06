import fs from 'fs';

const html = fs.readFileSync('scratch/matcha_page_clean.html', 'utf8');

// We will scan for occurrences of product listings.
// In WordPress WooCommerce, products are usually in an <li> or similar structure:
// Let's print out text around each match of the items to find their structures.

const terms = ['Banana Matcha Latte', 'Berry Matcha Latte', 'Strawberry Matcha Latte', 'Matcha Latte'];

terms.forEach(term => {
  console.log(`\n=================== SEARCH FOR: ${term} ===================`);
  let idx = 0;
  while (true) {
    idx = html.indexOf(term, idx);
    if (idx === -1) break;
    
    // Get a window of 3000 characters around the term to see the container
    const start = Math.max(0, idx - 1500);
    const end = Math.min(html.length, idx + 1500);
    const windowText = html.substring(start, end);
    
    console.log(`Match at index ${idx}:`);
    // Find all images within this window
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    let imgMatch;
    console.log('Images in window:');
    while ((imgMatch = imgRegex.exec(windowText)) !== null) {
      console.log(`  - ${imgMatch[1]}`);
    }
    
    idx += term.length; // move forward
    break; // only print first match
  }
});
