import fs from 'fs';

const html = fs.readFileSync('scratch/matcha_page_clean.html', 'utf8');

const terms = ['Matcha Latte', 'Banana Matcha Latte', 'Berry Matcha Latte', 'Strawberry Matcha Latte'];

terms.forEach(term => {
  console.log(`\n=================== HTML FOR: ${term} ===================`);
  let idx = html.indexOf(term);
  if (idx !== -1) {
    console.log(html.substring(idx - 600, idx + 400).trim());
  } else {
    console.log('Not found');
  }
});
