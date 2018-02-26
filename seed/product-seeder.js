const Product = require("../models/Product");
const mongoose = require("mongoose");
const keys = ("../config/keys.js");

mongoose.connect(keys.mongoURI);

var products = [
    new Product({
        imagePath: "https://i.imgur.com/YFCXIOT.jpg",
        title: "Kittens",
        price: 3
    }),
    new Product({
        imagePath: "https://i.imgur.com/XeCk6UG.jpg",
        title: "Woman",
        price: 2
    }),
    new Product({
        imagePath: "https://i.imgur.com/btQTLLR.jpg",
        title: "Anonymous",
        price: 3
    }),
    new Product({
        imagePath: "https://i.imgur.com/3Id9XVE.jpg",
        title: "Mountains",
        price: 2
    }),
    new Product({
        imagePath: "https://i.imgur.com/XieVlOk.jpg",
        title: "Couple",
        price: 3
    }),
    new Product({
        imagePath: "https://i.imgur.com/FaYfs7j.jpg",
        title: "Flowers",
        price: 1
    }),
    new Product({
        imagePath: "https://i.imgur.com/TKbFaTt.jpg",
        title: "Toucan",
        price: 3
    }),
    new Product({
        imagePath: "https://i.imgur.com/4OGkCcP.jpg",
        title: "Paint",
        price: 1
    }),
    new Product({
        imagePath: "https://i.imgur.com/DhHZXXj.jpg",
        title: "Sketch",
        price: 2
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}