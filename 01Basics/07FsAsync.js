const fs = require('fs');

// create and write content in file
fs.writeFile('fasync.txt', 'This is an asynchronous file write operation.', (err, data) => {
  if (err) {
    console.error('Error writing file:', err);
  }
    console.log(data);
});


console.log('This line is executed before file write completes.');