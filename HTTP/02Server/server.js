import http from "http";
import fs from "fs";
import path from "path";


const PORT = 4003;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // res.statusCode = 200;
        // res.setHeader("Content-Type", "text/html");
        // res.write("<h1>Welcome to Home Page</h1>");
        // res.end();
        const filePath = "./index.html"

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("404 - File Not Found");
                return;
            }
            res.statusCode = 200;
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    } 
    else if (req.url === "/home") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, this is the Home page!");
    } 
    else if (req.url === "/home/K23SK") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, this is the K23SK section!");
    } 
    else {
        res.statusCode = 404;
        res.statusMessage = "Page Not Found";
        res.setHeader("Content-Type", "text/plain");
        res.end(`${res.statusCode} - ${res.statusMessage}`);
    }
});

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});



