const fs = require('fs');

const asyncFunction = async () => {
  await fs.promises.writeFile(
    'asyncAwait.txt',
    'This data is written using async/await',
    'utf-8'
  );
  console.log('File written successfully!');

  const data = await fs.promises.readFile('asyncAwait.txt', 'utf-8');
  console.log('File content:', data);
};

asyncFunction();
