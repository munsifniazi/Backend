const EventsEmitter = require('events');

// Create an instance of EventEmitter

const myEmitter = new EventsEmitter();

// myEmitter.on('greet', () => {
//   console.log(`Hello Jee , Munsif Khan!`);
// });

// myEmitter.emit('greet');

myEmitter.on('greet', (username, prof) => {
  console.log(`Hello Jee, ${username}, ${prof}`);
});

myEmitter.emit('greet', 'Munsif Khan', 'Full Stack Dev');
myEmitter.emit('greet', 'Koki');
myEmitter.emit('greet', 'Etal');
myEmitter.emit('greet', 'Yo Bro');
