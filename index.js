const express = require("express");
const app = express();
const port = 4000;


//Creatinf routes
app.get("/", (req, res) => {
    res.send("Creating routes with express is simple");
})

app.post("/", (req, res) => {
    res.send("Hello, Jamaal")
})

app.put("/", (req, res) => {
    res.send("Hello, World")
})

app.delete("/", (req, res) => {
    res.send("Books")
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})