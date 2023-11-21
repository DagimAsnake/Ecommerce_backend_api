const express = require("express");
const categoryFileUpload = require("../config/categoryUpload.js");
const {
    createCategoryCtrl,
    getAllCategoriesCtrl,
    getSingleCategoryCtrl,
    updateCategoryCtrl,
    deleteCategoryCtrl,
} = require("../controllers/categoriesCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");
const isAdmin = require('../middlewares/isAdmin.js')

const categoriesRouter = express.Router();

categoriesRouter.post("/", isLoggedIn, isAdmin,  categoryFileUpload.single("file"), createCategoryCtrl);
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.delete("/:id", isLoggedIn, isAdmin, deleteCategoryCtrl);
categoriesRouter.put("/:id", isLoggedIn, isAdmin, updateCategoryCtrl);

module.exports = categoriesRouter;