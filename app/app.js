if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require('express')
const dbConnect = require("../config/dbConnect.js");

//db connect
dbConnect();
const app = express();

module.exports = app;