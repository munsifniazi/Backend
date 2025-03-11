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

const myFileName = 'Data.txt';
const myFilePath = path.join(__dirname, myFileName);

// Create a new file

const myWriteFile = fs.writeFileSync(
  myFilePath,
  'Yeh meri new test file hai ',
  'utf8',
);
console.log(myWriteFile);

const myReadFile = fs.readFileSync(myFilePath, 'utf-8');

console.log(myReadFile);

//Append the File

const appendFile = fs.appendFileSync(
  myFilePath,
  '\n Hello Jee Bas check krna tha File Append ya Update hui ya nahi',
  'utf8',
);

console.log(appendFile);

// Rename the file

const myNewupdatedFileName = 'myNewupdatedFile.txt';

const myNewUpdatedFilePath = path.join(__dirname, myNewupdatedFileName);

const renameFile = fs.renameSync(myFilePath, myNewUpdatedFilePath);

console.log(renameFile);

// Delete the old file

const deleteFile = fs.unlinkSync(myNewUpdatedFilePath);

console.log(deleteFile);
