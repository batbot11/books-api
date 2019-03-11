import express from "express";
import path from "path";
import mongoose from "mongoose";
import auth from "./auth";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/books");

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/api/auth", auth)

app.listen(8080, () => console.log("Running in port 8080"));