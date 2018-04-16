const path = require("path")
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname, "public")

let scores = []

app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get("/scores", (req, res) => {
  scores.sort((a,b) => (b.score - a.score));
  scores = scores.slice(0,3);
  res.status(200);
  res.send(scores)
});

app.post("/scores", (req, res) => {
  console.log(req.body);
  scores.push(req.body);
  res.status(201);
  res.end();
});

app.listen(3000);