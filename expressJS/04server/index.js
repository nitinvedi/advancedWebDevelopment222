import express from "express";
import path from "path";

const app = express();

app.get(/^\/ab?cd\/?$/, (req, res) => {
  console.log(req.url);
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server on http://localhost:5000");
});
