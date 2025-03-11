const fs = require('fs/promises');
const path = require('path');

const fileName = 'ApnaData.txt';
const filePath = path.join(__dirname, fileName);

const FilePathOp = __dirname;

const readFolder = async () => {
  try {
    const res = await fs.readdir(FilePathOp);
    console.log('Files in the current directory:', res);
  } catch (error) {
    console.error(error);
  }
};

readFolder();

// const createFile = async () => {
//   try {
//     const data = 'Hello, World!';
//     await fs.writeFile(filePath, data, 'utf-8');
//     console.log('File created successfully:', filePath);
//   } catch (error) {
//     console.error(error);
//   }
// };

// createFile();

// const appendfile = async()=>{
//     try {
//         const data = '\nThis is appended data.\n';
//         await fs.appendFile(filePath, data, 'utf-8');
//         console.log('Data appended successfully:', filePath);
//     } catch (error) {
//         console.error(error);
//     }
// }

// appendfile();

const readFile = async()=>{
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('File data:', data);
    } catch (error) {
        console.error(error);
    }
}

readFile();
