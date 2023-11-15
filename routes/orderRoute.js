const express = require("express");
const {
    createOrderCtrl,
} = require("../controllers/orderCtrl.js");

const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrderCtrl);

module.exports = orderRouter;