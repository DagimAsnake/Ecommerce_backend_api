const express = require("express");
const {
    createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} = require("../controllers/colorCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const colorRouter = express.Router();

colorRouter.post("/", isLoggedIn, createColorCtrl);
colorRouter.get("/", getAllColorsCtrl);
colorRouter.get("/:id", getSingleColorCtrl);
colorRouter.delete("/:id", isLoggedIn, deleteColorCtrl);
colorRouter.put("/:id", isLoggedIn, updateColorCtrl);

module.exports = colorRouter;