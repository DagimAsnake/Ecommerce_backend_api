const express = require("express");
const {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddresctrl
} = require("../controllers/usersCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);

module.exports = userRoutes;