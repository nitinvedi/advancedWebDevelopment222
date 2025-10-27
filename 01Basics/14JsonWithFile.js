const fs = require('fs');

const userData = {
    name: "Nitin",
    class: "K23SK",
    rollno: 25,
    age: 21,
    country: "India"
};

fs.writeFileSync("data.json", JSON.stringify(userData, null, 2), (err) => {
    if(err) {
        console.log(err);
    }
    console.log("File created success");
})