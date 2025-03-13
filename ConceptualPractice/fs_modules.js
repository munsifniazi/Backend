// // -----------------------Sync Way----------------------------------------

// // // const fs = require('fs');
// // // const path = require('path');

// // // const fileName = 'Practice.txt';
// // // const filePath = path.join(__dirname, fileName);

// // // // const writeFile = fs.writeFileSync(
// // // //   filePath,
// // // //   'Yeh meri Practice Set hai.',
// // // //   'utf8',
// // // // );
// // // // console.log(writeFile);

// // // const readFile = fs.readFileSync(filePath, 'utf8');
// // // console.log(readFile);

// // // // const appendFile = fs.appendFileSync(
// // // //   filePath,
// // // //   '\nyrr yeh toh meri file ko append kr raha hai.',
// // // //   'utf8',
// // // // );
// // // // console.log(appendFile);

// // // // const deleteFile = fs.unlinkSync(filePath);
// // // // console.log(deleteFile);
// // // const newFileName = 'newFile.txt';
// // // const newPath = path.join(__dirname, newFileName);

// // // const renameFile = fs.renameSync(filePath, newPath);
// // // console.log(renameFile);

// // -------------------- Async Wayyyy -----------------------------

// // const { error } = require('console');
// // const fs = require('fs');
// // const path = require('path');

// // const fileName = 'Concepts.txt';
// // const filePath = path.join(__dirname, fileName);

// // // fs.writeFile(filePath, 'Hello Main Async Method hon', 'utf-8', (err) => {
// // //   if (err) throw err;
// // //   console.log('File written successfully');
// // // });
// // fs.appendFile(
// //   filePath,
// //   '\nHello Main Async Method hon Lekin main append hua hon',
// //   'utf-8',
// //   (err) => {
// //     if (err) console.error(err);
// //     console.log('File appeneded successfully');
// //   },
// // );

// //----------------------------- Fs Promises Way -------------------------------------------

// const fs = require('fs/promises');

// const path = require('path');

// const fileName = 'fsPromises.txt';
// const filePath = path.join(__dirname, fileName);

// const fileDirec = __dirname;

// // fs.appendFile(
// //   filePath,
// //   '\nAppened Data hon Hello Main Promise se likhi gyi txt file hon.',
// //   'utf-8',
// // )
// //   .then((data) => {
// //     console.log('File appended successfully');
// //   })
// //   .catch((err) => {
// //     console.log('Koi toh error aya hai ustaad');
// //   });

// fs.readFile(filePath, 'utf8')
//   .then((data) => {
//     console.log('File Read successfully: ', data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
