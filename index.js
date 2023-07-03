const express = require("express");
const bodyParser = require("body-parser");
const questionRoutes = require("./api/routes/question");
const anwersRoutes = require("./api/routes/anwers");
const userRoutes = require("./api/routes/user");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
    .then(console.log("connected"))
    .catch((err) => {
        console.log("DB connection error:", err);
        console.log(err);
    });

app.use(questionRoutes);
app.use(anwersRoutes);
app.use(userRoutes);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.listen(8080);
