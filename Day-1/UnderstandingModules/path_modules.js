//Path Modules : In Node.js , if you want to work with files and directories Path modules are used.

const path = require('path');

console.log(__dirname);
console.log(__filename);

const filePath = path.join('folder', 'students', 'data.txt');

console.log(filePath);
