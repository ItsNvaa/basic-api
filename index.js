const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");
const respone = require("./respone");
const app = express();
const port = 8000;
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "engine");

app.get("/", (req, res) => {
  db.query("SELECT * FROM databasemurid", (err, result) => {
    // respone(200, result, "get all data from database", res);
    res.render("index", { result });
  });
});

app.post("/post", (req, res) => {
  console.log({ iniRespone: req.body });
  res.send("dari nova");
});

app.put("/put", (req, res) => {
  res.send("send respone");
  console.log({ update: req.body });
});

app.listen(port, () => {
  console.log("server dijalankan pada port 8000");
});
