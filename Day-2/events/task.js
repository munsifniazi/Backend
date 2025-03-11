const EventsEmitter = require('events');

const emitter = new EventsEmitter();

emitter.emit('user-login', 'Munsif Khan');
emitter.emit('user-purchase', 'Munsif Khan', 'PC');
emitter.emit('profile-update', 'Munsif Khan');
emitter.emit('user-logout', 'Munsif Khan');
