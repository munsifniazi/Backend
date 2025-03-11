const fs = require('fs');
const path = require('path');

const fileName = 'AsyncFS.txt';
const filePath = path.join(__dirname, fileName);

// const writeFile = fs.writeFile(
//   filePath,
//   'Oyee Ballay Bhallay File chal gyi.',
//   'utf-8',
//   (err) => {
//     if (err) console.error(err);
//     else console.log('File Saved Success');
//   },
// );

const readFile = fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) console.error(err);
  else console.log('File Read Success:', data);
});

const appendFile = fs.appendFile(
  filePath,
  '\n File Append kr di gyi hai.',
  'utf-8',
  (err) => {
    if (err) console.error(err);
    else console.log('File Appended Successfully.');
  },
);

// const newUpdatedFile = 'Hehehe.txt';
// const newUpdatedFilePath = path.join(__dirname, newUpdatedFile);

// const renameFile = fs.renameSync(filePath, newUpdatedFilePath);

// console.log('File Renamed Successfully:', renameFile);

// const deleteFile = fs.unlinkSync(filePath);
// console.log('Deleting file: ', deleteFile);

const deleteFile = fs.unlink(filePath);

console.log('File deleted successfully:', deleteFile);
