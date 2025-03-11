const fs = require('fs');
const path = require('path');

const fileName = 'fsPromises.txt';
const filePath = path.join(__dirname, fileName);
const file = __dirname;

fs.promises
  .readdir(file)
  .then((data) => {
    console.log('Files in the directory:', data);
  })
  .catch((err) => {
    console.error('Error reading directory:', err);
  });

// write a File with Promise:

fs.promises
  .writeFile(
    filePath,
    'This is a file which was written by Promise wala FS modules.',
    'utf-8',
  )
  .then((data) => {
    console.log('File written successfully:');
  })
  .catch((err) => {
    console.error('Error writing file:', err);
  });

fs.promises
  .readFile(filePath, 'utf-8')
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.error('Error reading file:', err);
  });
