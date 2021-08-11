const { resolve } = require("dns/promises");
const express = require("express");

const app = express();
app.listen(5050);

app.get("/", (req, res) => {
    res.send('<p>Home Page</p>')
});