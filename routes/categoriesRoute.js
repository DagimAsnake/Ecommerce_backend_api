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

const categoriesRouter = express.Router();

categoriesRouter.post("/", isLoggedIn,  categoryFileUpload.single("file"), createCategoryCtrl);
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.delete("/:id", deleteCategoryCtrl);
categoriesRouter.put("/:id", updateCategoryCtrl);

module.exports = categoriesRouter;