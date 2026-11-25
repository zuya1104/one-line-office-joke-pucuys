// One-Line Office Joke: 24-Hour Sprint (pucuys)
// Writes a single office joke to /output/entry.txt
const fs = require('fs');
const path = require('path');

const joke = "I left my sandwich in the third-floor fridge with my name, the date, and a hand-drawn CCTV camera, and by noon someone had eaten it and left a Post-it: 'Crust 9/10, would steal again.'";

const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), joke, 'utf8');
console.log('wrote', joke.length, 'chars');
