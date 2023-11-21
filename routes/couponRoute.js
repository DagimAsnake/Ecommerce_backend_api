const express = require("express");
const {
    createCouponCtrl,
    getAllCouponsCtrl,
    getCouponCtrl,
    updateCouponCtrl,
    deleteCouponCtrl,
} = require("../controllers/couponCtrl.js");

const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const isAdmin = require('../middlewares/isAdmin.js')

const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, isAdmin, createCouponCtrl);
couponsRouter.get("/", getAllCouponsCtrl);
couponsRouter.put("/update/:id", isLoggedIn, isAdmin, updateCouponCtrl);
couponsRouter.delete("/delete/:id", isLoggedIn, isAdmin, deleteCouponCtrl);
couponsRouter.get("/single", getCouponCtrl);

module.exports = couponsRouter;