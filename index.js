const express = require("express");
const app = express();
const port = 4000;


//Creatinf routes
app.get("/", (req, res) => {
    res.send("Creating routes with express is simple");
})

app.post("/", (req, res) => {

})

app.put("/", (req, res) => {

})

app.delete("/", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})