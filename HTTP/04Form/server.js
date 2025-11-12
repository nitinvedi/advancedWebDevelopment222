import http from 'http';
import fs from 'fs';
import querystring from 'querystring';

http.createServer((req, res) => {
    if (req.url == '/' && req.method === 'GET') {
        fs.readFile("public/index.html", "utf-8", (err, data) => {
            if (err) {
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } 
    else if (req.method === "POST" && req.url == '/submit') {
        let rdata = [];

        req.on('data', (chunk) => {
            rdata.push(chunk);
        });

        req.on('end', () => {
            let newData = Buffer.concat(rdata).toString();
            console.log(newData);

            let finalData = querystring.parse(newData);
            console.log(finalData);

            const writeData = `Username is: ${finalData.username}\n`;

            fs.appendFile("userData.txt", writeData, (err) => {
                if (err) {
                    console.log("Error writing to file:", err);
                } else {
                    console.log("Data written successfully!");
                }
            });


            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Data added successfully");
        });
    } 
    else {
        res.end("Invalid HTML");
    }
}).listen(3000, () => {
    console.log("Server hosted on http://localhost:3000");
});
