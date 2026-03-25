require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectToDB = require('./db/db');

const app = express();

// Connect DB
connectToDB();

// Middlewares
app.use(cors());
app.use(express.json()); // 🔥 important for POST/JSON data

// Routes
app.get('/', (req, res) => {
    res.send("Hello world 🚀");
});

module.exports = app;