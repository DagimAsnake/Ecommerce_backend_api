const express = require("express");
const {
    createOrderCtrl,
    getAllordersCtrl,
    getSingleOrderCtrl,
    updateOrderCtrl,
} = require("../controllers/orderCtrl.js");

const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrderCtrl);
orderRouter.get("/", isLoggedIn, getAllordersCtrl);
orderRouter.get("/:id", isLoggedIn, getSingleOrderCtrl);
orderRouter.put("/update/:id", isLoggedIn, updateOrderCtrl);

module.exports = orderRouter;