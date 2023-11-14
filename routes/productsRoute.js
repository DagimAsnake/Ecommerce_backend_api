const express = require("express");
const {
    createProductCtrl,
    getProductsCtrl,
    getProductCtrl,
    updateProductCtrl,
    deleteProductCtrl
} = require("../controllers/productsCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const productsRouter = express.Router();

productsRouter.post("/", isLoggedIn, createProductCtrl);
productsRouter.get("/", getProductsCtrl);
productsRouter.get("/:id", getProductCtrl);
productsRouter.put("/:id", isLoggedIn, updateProductCtrl);
productsRouter.delete("/:id/delete", isLoggedIn, deleteProductCtrl);

module.exports = productsRouter;