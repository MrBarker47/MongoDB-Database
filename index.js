import express from 'express';
import bodyParser from 'body-parser';
import newPosts from './data/posts.js'

const app = express();
const port = 4000;


app.use('/data', newPosts)

//Creating routes
app.get("/routes/index.js", (req, res) => {
    console.log("Hello");
    res.send("Hello")
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