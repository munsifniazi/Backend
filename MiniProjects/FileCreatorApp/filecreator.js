import readline from 'readline';
import fs from 'fs';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question('Enter the file name: ', (fileName) => {
    rl.question('Enter the content: ', (content) => {
      fs.writeFile(`${fileName}.txt`, content, 'utf8', (err) => {
        if (err) {
          console.error('Error occured while creating file ', err.message);
        }
        console.log(`File ${fileName}.txt created successfully`);
        rl.close();
      });
    });
  });
};
fileCreation();
