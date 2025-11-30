import express from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import session from 'express-session';


const ex = express();

ex.use(cookieParser('my_secret'));
ex.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000
}));

ex.get('/setcookie', (req, res) => {
    res.cookie('username', "Nitin Chaturvedi", {
        maxAge: 1000 * 20,
        httpOnly: true,
        signed: true
    });

    res.cookie('age', "21", {
        maxAge: 1000 * 20,
        httpOnly: true
    });

    res.send("Cookie set successfully!");
});

ex.get('/getcookie', (req, res) => {
    const user = req.signedCookies.username;
    const age = req.cookies.age;

    if (user) {
        res.send(`Cookie found: ${user}, Age: ${age}`);
    } else {
        res.send("No cookie found or cookie expired.");
    }
});

ex.get('/clearcookie', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('age');
    res.send("Cookies cleared");
});

ex.get('/getsession', (req, res) => {
    const count = req.session.count = (req.session.count || 0) + 1;
    res.send(`Session count: ${count}`);
});

ex.listen(3000, () => {
    console.log("Server running on port 3000");
});

