//JavaScript mein global object wo hota hai jo puri script ke andar kahin se bhi access kiya ja sakta hai. Global object ka use karke hum console.log() method ko bhi access kar sakte hain. Browser environment (jaise ke Chrome) mein global object ko window kaha jata hai.

// console.log('Hello, World!');
// console.log(global); // global object

// global.console.log('Hello, World! , This is Munsif Khan!');

// globalThis.console.log('Hello, World! , This is Munsif Khan!');
// globalThis.console.log(module);

// React is Component Based Library
// Node.js is Module Based Framework

//------------------------------------------------------------------------------

//Module: Node.js main har file ko ik separate module treat kiya jata hai. Har module apne code ko encapsulate karta hai. Har module apne code ko dusre modules se hide karta hai. Agr humne module access krwana hai toh uske liye Export krna parhy ga.

// JavaScript mein module hota hai. Module ka use karne se hum module.exports or exports object kahin se bhi access kar sakte hain. Module ka use karne se hum ek file ke code ko dusre file mein import kar sakte hain.

// Node.js uses CommonJs Modules System, Different Functionalities ke liye different Modules hote hain.

const add = require('./maths');

console.log(add(51, 27));
