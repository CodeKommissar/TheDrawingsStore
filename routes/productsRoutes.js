const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = (app) => {
    app.get("/api/products", async (req, res) => {
        const allProducts = await Product.find({});
        res.send(allProducts);
    });
};
