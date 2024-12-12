import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import newPosts from './data/posts.js'
import mongoose from 'mongoose';


const app = express();


const port = process.env.PORT || "4020";

mongoose.connect('mongodb+srv://MrBarker47:WfhpISelxhFNvZyD@mongopractice.mkbxl.mongodb.net/')
  .then(() => {
 console.log('Connected!')
})
.catch(() => {
    console.log("Connection failed!");
});

app.use('/data', newPosts)


//Creating routes
app.get("/", (req, res) => {
    res.send("Hello Jamaal") 
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})