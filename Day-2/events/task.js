const EventEmitter = require('events');

const emitter = new EventEmitter();

const eventCounts = {
  userLogin: 0,
  userPurchase: 0,
  profileUpdate: 0,
  userLogout: 0,
};

emitter.on('user-login', (username) => {
  eventCounts.userLogin++;
  console.log(`${username} has logged in.`);
});

emitter.on('user-purchase', (username, product) => {
  eventCounts.userPurchase++;
  console.log(`${username} has purchased ${product}.`);
});

emitter.on('profile-update', (username, field) => {
  eventCounts.profileUpdate++;
  console.log(`${username}'s profile has been updated with ${field}.`);
});

emitter.on('user-logout', (username) => {
  eventCounts.userLogout++;
  console.log(`${username} has logged out.`);
});
emitter.on('summary', () => {
  console.log(eventCounts);
});

emitter.emit('user-login', 'Munsif Khan');
emitter.emit('user-purchase', 'Munsif Khan', 'PC');
emitter.emit('profile-update', 'Munsif Khan', 'email');
emitter.emit('user-logout', 'Munsif Khan');

emitter.emit('summary');

