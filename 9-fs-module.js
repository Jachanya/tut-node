const fs = require('fs')
const path = require('path')

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

fs.writeFileSync(
    './content/result-sync.txt',
    `Here it is ${first}, ${second}`,
    {flag: 'a'});
