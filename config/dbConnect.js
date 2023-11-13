const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.set("strictQuery", false);

    const dbUrl = "mongodb://localhost:27017/ecommerceBackend"
    // const dbUrl = process.env.DB_URL
    mongoose
        .connect(dbUrl)
        .then(() => {
            console.log("Database conneceted successfully");
        })
        .catch((err) => {
            console.log("Error while connecting to database");
            console.log(err);
        });

};

module.exports = dbConnect;