import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'public/index.html');

app.get('/', (req, res) => {
    res.send("Welcome to root page");
});

app.listen(PORT, () => {
    console.log('server is hosted on http://localhost:' + PORT);
});

app.get('/home', (req, res) => {
    res.redirect('/user');
});

app.get('/user', (req, res) => {
    res.send("welcome to the user page " + res.statusCode);
});

app.get('/user/:id', (req, res) => {
    let userId = req.params.id;
    res.send(userId);
});

app.get('/form', (req, res) => {
    // res.sendFile(filePath, (err) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         console.log('File sent successfully');
    //     }
    // });
    res.sendFile("/index.html", {root: "public"}, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log('File sent successfully');
        }
    });
});