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
const isAdmin = require('../middlewares/isAdmin.js')

const productsRouter = express.Router();

productsRouter.post("/", isLoggedIn, isAdmin, upload.array("files"), createProductCtrl);
productsRouter.get("/", getProductsCtrl);
productsRouter.get("/:id", getProductCtrl);
productsRouter.put("/:id", isLoggedIn, isAdmin, updateProductCtrl);
productsRouter.delete("/:id/delete", isLoggedIn, isAdmin, deleteProductCtrl);

module.exports = productsRouter;