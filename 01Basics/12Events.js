const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Create an event listener for 'greet' event
eventEmitter.on('greet', () => {
  console.log('Hello! Welcome to the event-driven world of Node.js!');
});

// Emit the 'greet' event
eventEmitter.emit('greet');

// emit using parameters
eventEmitter.on('personalGreet', (name, age) => {
  console.log(`Hello, ${name}! age ${age} Welcome to the event-driven world of Node.js!`);
});
eventEmitter.emit('personalGreet', 'Alice', 30);