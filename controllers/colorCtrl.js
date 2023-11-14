const asyncHandler = require("express-async-handler");
const Color = require("../model/Color.js");

// @desc    Create new Color
// @route   POST /api/v1/colors
// @access  Private/Admin

module.exports.createColorCtrl = asyncHandler(async (req, res) => {
    const { name } = req.body;
    //color exists
    const colorFound = await Color.findOne({ name });
    if (colorFound) {
      throw new Error("color already exists");
    }
    //create
    const color = await Color.create({
      name: name.toLowerCase(),
      user: req.userAuthId,
    });
  
    res.json({
      status: "success",
      message: "color created successfully",
      color,
    });
  });
  
  // @desc    Get all colors
  // @route   GET /api/colors
  // @access  Public
  
  module.exports.getAllColorsCtrl = asyncHandler(async (req, res) => {
    const colors = await Color.find();
    res.json({
      status: "success",
      message: "colors fetched successfully",
      colors,
    });
  });
  
  // @desc    Get single color
  // @route   GET /api/colors/:id
  // @access  Public
  module.exports.getSingleColorCtrl = asyncHandler(async (req, res) => {
    const color = await Color.findById(req.params.id);
    res.json({
      status: "success",
      message: "color fetched successfully",
      color,
    });
  });
  
  // @desc    Update color
  // @route   PUT /api/colors/:id
  // @access  Private/Admin
  module.exports.updateColorCtrl = asyncHandler(async (req, res) => {
    const { name } = req.body;
  
    //update
    const color = await Color.findByIdAndUpdate(
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
      message: "color updated successfully",
      color,
    });
  });
  
  // @desc    delete color
  // @route   DELETE /api/colors/:id
  // @access  Private/Admin
  module.exports.deleteColorCtrl = asyncHandler(async (req, res) => {
    await Color.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      message: "color deleted successfully",
    });
  });