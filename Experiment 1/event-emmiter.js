const { EventEmitter } = require('events');

class Button extends EventEmitter {}
const button = new Button();

button.on('click', () => {
    console.log(`Button clicked`);
});
button.on('Mouseover', () => {
    console.log(`Mouse over button`);
});

button.emit('click');
button.emit('Mouseover');