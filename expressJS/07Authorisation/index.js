import cookieSession from 'cookie-session';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
    name: 'Session',
    keys: ['key1', 'key2'],
    maxAge: 5 * 1000
}));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

app.post('/submit', (req, res) => {
    const { name, password } = req.body;

    if (!req.session.name && !req.session.password) {
        req.session.name = name;
        req.session.password = password;
        req.session.loginCount = 1;
        return res.send(`Login Count: ${req.session.loginCount}`);
    }

    if (req.session.name === name && req.session.password === password) {
        req.session.loginCount++;
        return res.send(`Login Count: ${req.session.loginCount} This is your dashboard.`);
    }

    res.send("Incorrect username or password");
});


app.get('/logout', (req, res) => {
    req.session = null;
    res.send('Session cleared');
});

app.listen(3000);