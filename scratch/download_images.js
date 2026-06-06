import fs from 'fs';
import https from 'https';
import path from 'path';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download from ${url}: Status ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded ${url} to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const downloads = [
    {
      url: 'https://www.rheabergama.com/wp-content/uploads/2025/04/banana-matcha.png',
      dest: 'public/images/menu/banana-matcha-latte.png'
    },
    {
      url: 'https://www.rheabergama.com/wp-content/uploads/2025/04/stawberry-matcha.png',
      dest: 'public/images/menu/strawberry-matcha-latte.png'
    },
    {
      url: 'https://www.rheabergama.com/wp-content/uploads/2024/04/rhea-icon.jpg',
      dest: 'public/images/menu/rhea-icon.jpg'
    }
  ];

  for (const dl of downloads) {
    try {
      await downloadFile(dl.url, dl.dest);
    } catch (e) {
      console.error(`Error downloading ${dl.url}:`, e.message);
    }
  }
}

main();
