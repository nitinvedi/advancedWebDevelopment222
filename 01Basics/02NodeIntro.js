const { isUtf8 } = require('buffer');
var fs = require('fs');

let data = fs.readFileSync("abc.txt", 'utf8');
console.log(data);

// const content = 'Nitin chaturvedi';
// fs.writeFile('abc.txt', content, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully.');
// });

// fs.readFile('abc.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('File Content: ', data);
// })