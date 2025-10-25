const fs = require('fs');
const path = require('path');

// Directory path
const dir = 'FileSystem';

// Check if directory exists before creating
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log('Directory created:', dir);
} else {
  console.log('Directory already exists:', dir);
}

// Create file inside the directory
const filePath = path.join(dir, 'hello.txt');
fs.writeFileSync(filePath, 'Hello, this is a file inside the FileSystem directory.', 'utf-8');
console.log('File written:', filePath);
