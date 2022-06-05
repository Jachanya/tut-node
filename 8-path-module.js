const path = require('path');

console.log(path.sep);
filePath = path.join(__dirname, 'content','subfolder','test.txt')

const base = path.basename(filePath);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);