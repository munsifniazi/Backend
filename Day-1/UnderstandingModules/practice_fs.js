const fs = require('fs');
const path = require('path');

const fileName = 'Hello.txt';
const filePath = path.join(__dirname, fileName);

// Write a File

// const writeFile = fs.writeFileSync(filePath, 'Hello Jee ki haal hai', 'utf-8');

// console.log('File Written Successfully', writeFile);

// Read a File

// const appendFile = fs.appendFileSync(
//   filePath,
//   '\nFile Added Successfully',
//   'utf-8',
// );

// console.log('File Appended Successfully', appendFile);

// const deleteFile = fs.unlinkSync(filePath);

// console.log('File Deleted Successfully', deleteFile);

// Rename a File

const newRenamedFile = 'updatedFile.txt';

const newFilePath = path.join(__dirname, newRenamedFile);

const renameFile = fs.renameSync(filePath, newFilePath);

console.log('File Renamed Successfully', renameFile);
