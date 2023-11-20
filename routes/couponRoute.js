const express = require("express");
const {
    createCouponCtrl,
    getAllCouponsCtrl,
    getCouponCtrl,
    updateCouponCtrl,
    deleteCouponCtrl,
} = require("../controllers/couponCtrl.js");

const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, createCouponCtrl);
couponsRouter.get("/", getAllCouponsCtrl);
couponsRouter.put("/update/:id", isLoggedIn, updateCouponCtrl);
couponsRouter.delete("/delete/:id", isLoggedIn, deleteCouponCtrl);
couponsRouter.get("/single", getCouponCtrl);

module.exports = couponsRouter;