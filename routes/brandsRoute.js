const express = require("express");
const {
    createBrandCtrl,
    deleteBrandCtrl,
    getAllBrandsCtrl,
    getSingleBrandCtrl,
    updateBrandCtrl,
} = require("../controllers/brandsCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const isAdmin = require('../middlewares/isAdmin.js')

const brandsRouter = express.Router();

brandsRouter.post("/", isLoggedIn, isAdmin, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", isLoggedIn, isAdmin, deleteBrandCtrl);
brandsRouter.put("/:id", isLoggedIn, isAdmin, updateBrandCtrl);

module.exports = brandsRouter;