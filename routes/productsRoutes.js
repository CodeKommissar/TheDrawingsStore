module.exports = (app) => {
    app.get("/api/products", (req, res) => {
        res.send({ products: "Hello World!" });
    });
};
