import fs from 'fs';
import https from 'https';
import zlib from 'zlib';

function fetchPageDecompress(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    }, (res) => {
      let bodyStream = res;
      
      const encoding = res.headers['content-encoding'];
      if (encoding === 'gzip') {
        bodyStream = res.pipe(zlib.createGunzip());
      } else if (encoding === 'deflate') {
        bodyStream = res.pipe(zlib.createInflate());
      }
      
      let chunks = [];
      bodyStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      
      bodyStream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer.toString('utf8'));
      });
      
      bodyStream.on('error', (err) => {
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log('Fetching and decompressing Matcha Lattes page...');
    const html = await fetchPageDecompress('https://www.rheabergama.com/matcha-lattes/');
    console.log(`Fetched page length: ${html.length}`);
    
    fs.writeFileSync('scratch/matcha_page_clean.html', html, 'utf8');
    
    // Extract image tags and their sources
    const regex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    let match;
    const images = [];
    while ((match = regex.exec(html)) !== null) {
      images.push(match[0]);
    }
    
    console.log(`Found ${images.length} images on page.`);
    images.forEach(img => {
      if (img.includes('uploads')) {
        console.log(`  - ${img}`);
      }
    });

    // Let's search for product names and see their surrounding content (specifically the images)
    // WooCommerce pages usually have a structure like <li class="product">...<img ...>...<h3>Product Name</h3>...
    const products = [];
    // A simple regex to find product names and try to find the nearest preceding image
    const terms = ['Banana Matcha Latte', 'Berry Matcha Latte', 'Strawberry Matcha Latte', 'Matcha Latte'];
    
    terms.forEach(term => {
      const idx = html.toLowerCase().indexOf(term.toLowerCase());
      if (idx !== -1) {
        console.log(`\nFound term "${term}"`);
        // Find preceding image src
        const beforeText = html.substring(Math.max(0, idx - 1500), idx);
        const imgRegex = /src="([^"]+)"/gi;
        let imgMatch;
        let lastImg = null;
        while ((imgMatch = imgRegex.exec(beforeText)) !== null) {
          lastImg = imgMatch[1];
        }
        console.log(`  Nearest preceding image URL: ${lastImg}`);
      }
    });

  } catch (e) {
    console.error('Error:', e);
  }
}

main();
