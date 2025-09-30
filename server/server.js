const express = require('express');

require("dotenv").config();

// Conect to DB
require("./config/db.js");

const app = express();

app.use(express.json());

// Importing routes

app.listen(8082, () => {
    console.log("Server is running on port 8082");
});

app.use((req, res) => {
    res.status(404).json({ message: "Page not found" });
})
