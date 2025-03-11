//Path Modules : In Node.js , if you want to work with files and directories Path modules are used.

const path = require('path');

console.log(__dirname);
console.log(__filename);

const filePath = path.join('folder', 'students', 'data.txt');

console.log(filePath);

const parseData = path.parse(filePath);
const resolveData = path.resolve(filePath);
const extName = path.extname(filePath);
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);

console.log({ parseData, extName, dirName, baseName, resolveData });
