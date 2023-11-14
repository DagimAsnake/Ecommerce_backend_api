const express = require("express");
const { createReviewCtrl } = require("../controllers/reviewsCtrl.js");
const { isLoggedIn } = require("../middlewares/isLoggedIn.js");

const reviewRouter = express.Router();

reviewRouter.post("/:productID", isLoggedIn, createReviewCtrl);

module.exports = reviewRouter;