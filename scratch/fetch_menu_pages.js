import fs from 'fs';
import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    }, (res) => {
      console.log(`Status for ${url}: ${res.statusCode}`);
      console.log('Headers:', JSON.stringify(res.headers, null, 2));
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

async function main() {
  try {
    const html = await fetchPage('https://www.rheabergama.com/');
    console.log(`Fetched page length: ${html.length}`);
    if (html.length < 500) {
      console.log('Page content:', html);
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
