const asyncHandler = require("express-async-handler");
const Category = require("../model/Category.js");

// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private/Admin

module.exports.createCategoryCtrl = asyncHandler(async (req, res) => {
    const { name } = req.body;
    //category exists
    const categoryFound = await Category.findOne({  name });
    if (categoryFound) {
      throw new Error("Category already exists");
    }
    //create
    const category = await Category.create({
      name: name?.toLowerCase(),
      user: req.userAuthId,
      image: req?.file?.path,
    });
  
    res.json({
      status: "success",
      message: "Category created successfully",
      category,
    });
  });

  // @desc    Get all categories
// @route   GET /api/categories
// @access  Public

module.exports.getAllCategoriesCtrl = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.json({
      status: "success",
      message: "Categories fetched successfully",
      categories,
    });
  });
  
  // @desc    Get single category
  // @route   GET /api/categories/:id
  // @access  Public
  module.exports.getSingleCategoryCtrl = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json({
      status: "success",
      message: "Category fetched successfully",
      category,
    });
  });
  
  // @desc    Update category
  // @route   PUT /api/categories/:id
  // @access  Private/Admin
  module.exports.updateCategoryCtrl = asyncHandler(async (req, res) => {
    const { name } = req.body;
  
    //update
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "success",
      message: "category updated successfully",
      category,
    });
  });
  
  // @desc    delete category
  // @route   DELETE /api/categories/:id
  // @access  Private/Admin
  module.exports.deleteCategoryCtrl = asyncHandler(async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      message: "Category deleted successfully",
    });
  });