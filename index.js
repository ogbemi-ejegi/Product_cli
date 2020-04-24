const mongoose = require('mongoose');
const Product = require('./Model/product');

mongoose.Promise = global.Promise;
//connect db
 const db = mongoose.connect('mongodb://localhost:27017/productcli', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });

//Add Product
const addProduct = (product) => {
    Product.create(product).then(product => {
        console.info('New product created');
        // db.close();
    })
}

//find customer
const findProduct = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Product.find({name:name}).then(product => {
        console.info(product);
        console.info(`${product.length} found`);
        // db.close();
    }).catch(err => {
        console.log(err);
    });
}

//Update product
const updateProduct = (_id, product) => {
    Product.updateOne({_id}, product).then(product => {
        console.info('Product updated');
        db.close;
    })
}


//Remove product
const removeProduct = (_id) => {
    Product.remove({_id}).then(product => {
        console.info('Customer removed');
    })
}

//List all product
const listProduct = () => {
    Product.find().then(product => {
        console.info(product);
        console.info(`${product.length} found`);
    })
}
module.exports = {
    addProduct,
    findProduct,
    updateProduct,
    removeProduct,
    listProduct
}