const fs = require('fs');
fs.readFile("data.json", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }
    const user = JSON.parse(data);
    // console.log(user.name)
    user.push({name: "Nixtin", date: 27});
    fs.writeFileSync("data.json", JSON.stringify(user, null, 2), (err) => {
        if(err) throw err;
        console.log("json file edited success")
    })
})