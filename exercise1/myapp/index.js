const express = require("express");
const app = express();
const port = 3000;
const port2 = 80

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("This is a test");
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
});

app.listen(port2, () => {
    console.log(`Example app listen at http://localhost:${port}`);
});
