import express from "express";

const app = express();

// Middleware to read JSON data
app.use(express.json());

// POST request on "/"
app.post("/", (req, res) => {
    const { name, age } = req.body;

    res.send(`My name is ${name} and age is ${age}`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
