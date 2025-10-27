const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

let eventCount = {
    userLogin: 0,
    userPurchase: 0,
    userUpdate: 0,
    userLogout: 0
};

eventEmitter.on('userLogin', (obj) => {
    console.log(`${obj.name} has logged in`);
    eventCount.userLogin++;
});

eventEmitter.on('userPurchase', (obj) => {
    console.log(`User has purchased ${obj.item}`);
    eventCount.userPurchase++;
});

eventEmitter.on('userUpdate', (obj) => {
    console.log(`User has updated ${obj.field}`);
    eventCount.userUpdate++;
});

eventEmitter.on('userLogout', (obj) => {
    console.log(`${obj.name} has logged out`);
    eventCount.userLogout++;
});

eventEmitter.emit('userLogin', { name: 'Nitin' });
eventEmitter.emit('userPurchase', { item: 'Laptop' });
eventEmitter.emit('userUpdate', { field: 'Email' });
eventEmitter.emit('userLogout', { name: 'Nitin' });


console.log(eventCount);
