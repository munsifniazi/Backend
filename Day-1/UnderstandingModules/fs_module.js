// FS module helps us to work with the filesystem. which allows us to create, update, and delete files. we can also write and read files as well. Plus we can also watch files for changes.

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
const writeFile = fs.writeFileSync(
  filePath,
  'This is a test file. hehehe has changed.',
  'utf8',
);

console.log(writeFile);
