const EventEmitter = require('events');


const myEmitter = new EventEmitter();

myEmitter.on('Login', (name) => {
    console.log(`Hello, ${name}! Student Logged in Successfully`);
});


myEmitter.on('Submit', () => {
    console.log('Assignment Submitted Successfully');
});


myEmitter.on('Logout', (name) => {
    console.log(`${name}! Student Logged out Successfully`);
});


myEmitter.emit('Login', 'Shahil');


myEmitter.emit('Submit');

myEmitter.emit('Logout', 'Shahil');