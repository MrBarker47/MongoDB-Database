import express from 'express';
import mongodb, { Db } from "mongodb"
const router = express.Router();

router.get(":title", async (req, res) => {
    let collection = await db.collection("posts");
    let document = req.body;
})


