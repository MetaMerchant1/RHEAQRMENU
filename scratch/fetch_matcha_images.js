import fs from 'fs';
import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
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
    console.log('Fetching main menu page...');
    const html = await fetchPage('https://www.rheabergama.com/');
    
    // Look for all image tags and print URLs that might be related
    const regex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    let match;
    const images = [];
    while ((match = regex.exec(html)) !== null) {
      images.push(match[1]);
    }
    
    console.log(`Found ${images.length} images on page.`);
    const matchaImages = images.filter(img => img.toLowerCase().includes('matcha') || img.toLowerCase().includes('latte') || img.toLowerCase().includes('menu'));
    console.log('\nRelevant Images on homepage:');
    matchaImages.forEach(img => console.log(`  - ${img}`));

    // Let's search the HTML content for Matcha Latte item text and look at surrounding tags
    const matchaIndex = html.toLowerCase().indexOf('matcha latte');
    if (matchaIndex !== -1) {
      console.log('\nMatcha Latte context:');
      console.log(html.substring(matchaIndex - 500, matchaIndex + 1000));
    } else {
      console.log('Matcha Latte text not found on homepage.');
    }

  } catch (error) {
    console.error('Error fetching page:', error);
  }
}

main();
