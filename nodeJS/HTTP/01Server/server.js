import http from 'http';
import colors from 'colors';
import { upperCase } from 'upper-case';

const PORT = 9000;

http.
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    res.write(`<html>
        <head><title>My First HTTP Server</title></head>
        <body>
            <h1 style="color: blue;">${upperCase("hello world from my first http server!")}</h1>
            <p>This is a simple HTTP server created using Node.js.</p>
        </body>
    </html>`);
    res.end("response ended");
}).listen(PORT, () => {
    console.log(colors.blue.bgGreen(`Server is running on http://localhost:${PORT}`));
});
