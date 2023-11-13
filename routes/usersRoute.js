const express = require("express");
const {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
} = require("../controllers/usersCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);

module.exports = userRoutes;