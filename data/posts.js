import express from "express";
import mongodb from "mongodb"
const router = express.Router();

const users = [
    {
        id:1,
        userId: 1,
        title: "The Way Of The Superior Man",
        author: "David Deida"
    },
    {
        id:2,
        userId: 1,
        title: "Read People Like A Book",
        author: ""
    },
    {
        id: 3,
        userId: 1,
        title: "ASSATA",
        author: "Assata Sharkur"
    },
    {
        id: 4,
        userId: 1,
        title: "How To Win Friends & Influence People",
        author: "Dale Carngie"
    }
];

router.get('/', (req, res) => {
    res.send(users);
})

export default router