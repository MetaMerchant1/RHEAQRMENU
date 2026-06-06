import fs from 'fs';
import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

async function main() {
  try {
    console.log('Fetching Matcha Lattes page...');
    const html = await fetchPage('https://www.rheabergama.com/matcha-lattes/');
    console.log(`Fetched page length: ${html.length}`);
    
    // Save to temp file to view if needed
    fs.writeFileSync('scratch/matcha_page.html', html, 'utf8');
    
    // Search for images with product class or inside product lists
    const regex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    let match;
    const images = [];
    while ((match = regex.exec(html)) !== null) {
      images.push(match[0]);
    }
    
    console.log(`Found ${images.length} images:`);
    images.forEach(img => {
      if (img.includes('uploads')) {
        console.log(`  - ${img}`);
      }
    });

    // Let's search for the product names (Matcha Latte, Banana, Berry, Strawberry)
    const terms = ['Banana', 'Berry', 'Strawberry', 'Matcha'];
    terms.forEach(term => {
      const idx = html.toLowerCase().indexOf(term.toLowerCase());
      if (idx !== -1) {
        console.log(`\nMatch for term "${term}":`);
        console.log(html.substring(idx - 200, idx + 600).trim());
      }
    });

  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
