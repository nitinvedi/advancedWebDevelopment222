const fs = require('fs');

fs.promises.writeFile('thenCatch.txt', 'This is a file written using promises with then and catch', 'utf-8')
.then(() => {
    console.log('File written successfully using then/catch.');
})
.catch((err) => {
    console.error('Error writing file:', err);
});

fs.promises.readFile('thenCatch.txt', 'utf-8')
.then((data) => {
    console.log('File content read successfully using then/catch:', data);
})
.catch((err) => {
    console.error('Error reading file:', err);
});