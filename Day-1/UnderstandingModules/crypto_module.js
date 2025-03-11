const crypto = require('crypto');

const randomValue = crypto.randomBytes(8).toString('hex');

console.log(randomValue);

const hashValue = crypto
  .createHash('sha256')
  .update('Munsif Khan')
  .digest('hex');
const hashValue1 = crypto
  .createHash('sha256')
  .update('Munsif Khan')
  .digest('hex');
console.log(hashValue);
console.log(hashValue1);
