//server.js
const pool = require('./db');

const express = require('express');
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 8000;
 
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send('<H1>hi kotak </H1>');
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
