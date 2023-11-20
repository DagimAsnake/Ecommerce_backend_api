const express = require("express");
const upload = require("../config/fileUpload.js");
const {
    createProductCtrl,
    getProductsCtrl,
    getProductCtrl,
    updateProductCtrl,
    deleteProductCtrl
} = require("../controllers/productsCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const productsRouter = express.Router();

productsRouter.post("/", isLoggedIn, upload.array("files"), createProductCtrl);
productsRouter.get("/", getProductsCtrl);
productsRouter.get("/:id", getProductCtrl);
productsRouter.put("/:id", isLoggedIn, updateProductCtrl);
productsRouter.delete("/:id/delete", isLoggedIn, deleteProductCtrl);

module.exports = productsRouter;