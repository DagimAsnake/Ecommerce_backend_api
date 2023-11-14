const express = require("express");
const {
    createBrandCtrl,
    deleteBrandCtrl,
    getAllBrandsCtrl,
    getSingleBrandCtrl,
    updateBrandCtrl,
} = require("../controllers/brandsCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const brandsRouter = express.Router();

brandsRouter.post("/", isLoggedIn, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", isLoggedIn, deleteBrandCtrl);
brandsRouter.put("/:id", isLoggedIn, updateBrandCtrl);

module.exports = brandsRouter;