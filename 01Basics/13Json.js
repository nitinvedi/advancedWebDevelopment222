const obj = {
    name: "Nitin",
    class: "K23SK",
    rollno: 25
}

const jsonString = JSON.stringify(obj, ['name', 'class'], 4);

console.log(jsonString);

// const fs = require('fs');

// fs.writeFileSync("jsonFile.txt", jsonString , 'utf-8');

console.log(obj.name);