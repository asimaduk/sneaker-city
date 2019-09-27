const router = require('express').Router();
const data = require('../data');

//hard coded data to mock sneakers available
const products = data.products;
const productsAvailableSizes = data.productsAvailableSizes;

//sort products with latest date first
products.sort((a,b) => (a.releaseDate < b.releaseDate) ? 1 : ((b.releaseDate < a.releaseDate) ? -1 : 0))

router.route('/').get((req, res) => {
    res.status(400).json('Specify a full endpoint. E.g /api/products');
});

router.route('/products').get((req, res) => {
    try {
        const startIndex = Number(req.query.start);
        const endIndex = Number(req.query.end);
        
        console.log('startIndex & endIndex ',startIndex, endIndex);
        
        let temp = [];

        //send only requested range products

        if(startIndex && endIndex && (startIndex < endIndex)){
            temp = products.slice(startIndex, endIndex);
        }
        else if(startIndex && !endIndex){
            temp = products.slice(startIndex, 10);
        }
        else {
            temp = products.slice(0, 10);
        }

        res.json(temp);
    } 
    catch (error) {
        res.status(400).json('Error: ' + error);
    } 
});

router.route('/products/:id').get((req, res) => {
    const id = req.params.id;
    let product = null;

    try {
        const temp = products.filter(_product => _product.id == id);
    
        if(temp.length > 0){
            product = temp[0];
        }

        res.json(product);
    } 
    catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.route('/products/:id/sizes').get((req, res) => {
    const id = req.params.id;

    try {
        const availableSizes = productsAvailableSizes[id];
    
        if(availableSizes.length > 0){
            res.json(availableSizes);
        }
        else {
            res.json([]);
        }
    } 
    catch (error) {
        res.status(400).json('Error: ' + error);
    } 
});

module.exports = router;