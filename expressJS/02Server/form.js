import express from 'express';
import { body, validationResult } from 'express-validator';

const ex = express();

ex.use(express.urlencoded({ extended: true }));
ex.use(express.json());

ex.get('/adduser', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

ex.post(
    '/submit',
    [
        body("username")
            .trim()
            .notEmpty()
            .isLength({ min: 3 })
            .withMessage("min 3 letters username is required"),

        body("email")
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .withMessage("invalid email format")
            .normalizeEmail()
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const list = errors.array().map(e => `<li>${e.msg}</li>`).join("");

            return res.status(400).send(`
                <h2>Validation Errors</h2>
                <ul>${list}</ul>
                <a href="/adduser">Go Back</a>
            `);
        }

        const { username, email } = req.body;

        res.send(`
            <h2>Data Added</h2>
            <p><strong>Name:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
        `);
    }
);

ex.listen(3000, () => {
    console.log('Server running on 3000');
});
