const fs = require('fs');
const path = require('path');
const fileName = 'text.txt';
const filePath = path.join(__dirname, fileName);

console.log('Starting the file write operation');
// const readFile = fs.readFileSync(filePath, 'utf8');
// console.log("Reading File: ",readFile);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Reading File: ', data);
});
console.log('Hello World');
console.log('Ending the file write operation');
