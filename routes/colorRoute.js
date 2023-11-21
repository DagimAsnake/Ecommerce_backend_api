const express = require("express");
const {
    createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} = require("../controllers/colorCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const isAdmin = require('../middlewares/isAdmin.js')

const colorRouter = express.Router();

colorRouter.post("/", isLoggedIn, isAdmin, createColorCtrl);
colorRouter.get("/", getAllColorsCtrl);
colorRouter.get("/:id", getSingleColorCtrl);
colorRouter.delete("/:id", isLoggedIn, isAdmin, deleteColorCtrl);
colorRouter.put("/:id", isLoggedIn, isAdmin, updateColorCtrl);

module.exports = colorRouter;