import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import auth from "./auth";

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/api/auth", auth)

app.listen(8080, () => console.log("Running in port 8080"));