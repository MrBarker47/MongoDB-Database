import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import newPosts from './data/posts.js'
import routes from './routes/index.js'

const app = express();
const port = 4000;

const connectionString = process.env.ATLAS_URI || "";
app.use('/data', newPosts)

//Creating routes
app.get("/routes/index.js", (req, res) => {
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