const router = require('express').Router();
const Product = require('../models/product');
const upload = require('../middlewares/upload-photo');

    /* title:String,
    description:String,
    photo:String,
    price:Number,
    stockQuantity:Number,
    rating:[Number]

*/
//POST request - create a new product

router.post("/products",upload.single("photo"), async(req,res) =>{


try {

let product = new Product();
product.title = req.body.title;
product.description = req.body.description;
product.price = req.body.price;
product.stockQuantity = req.body.stockQuantity;
product.photo = req.file.location;
product.rating =  req.body.rating;

await product.save();
res.json({
    status: true,
    message: "Successfully saved"
});

} catch (err) {

    res.status(500).json({
        success: false,
        message: err.message
    })
    
}

})




//GET request - get all products





//GET request - get a single product






//PUT request - Update a single product








//DELETE request - delete a single product


module.exports = router;