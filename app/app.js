if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require('express')
const dbConnect = require("../config/dbConnect.js");
const userRoutes = require("../routes/usersRoute.js");
const { globalErrhandler, notFound } = require("../middlewares/globalErrHandler.js");
const productsRouter = require("../routes/productsRoute.js");
const categoriesRouter = require("../routes/categoriesRoute.js");
const brandsRouter = require("../routes/brandsRoute.js");
const colorRouter = require("../routes/colorRoute.js");

//db connect
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/users/", userRoutes);
app.use("/products/", productsRouter);
app.use("/categories/", categoriesRouter);
app.use("/brands/", brandsRouter);
app.use("/colors/", colorRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

module.exports = app;