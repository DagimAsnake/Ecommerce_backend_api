const express = require("express");
const {
    createOrderCtrl,
    getAllordersCtrl,
    getSingleOrderCtrl,
    updateOrderCtrl,
    getOrderStatsCtrl,
} = require("../controllers/orderCtrl.js");

const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const isAdmin = require('../middlewares/isAdmin.js')

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrderCtrl);
orderRouter.get("/", isLoggedIn, getAllordersCtrl);
orderRouter.get("/:id", isLoggedIn, getSingleOrderCtrl);
orderRouter.put("/update/:id", isLoggedIn, updateOrderCtrl);
orderRouter.get("/sales/stats", isLoggedIn, isAdmin, getOrderStatsCtrl);

module.exports = orderRouter;