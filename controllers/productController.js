// import your Model
const productModel = require('../models/product');

exports.createProduct = async (req, res) => {
    try{
        //Get the store ID from the params
        const storeId = req.params.storeId;
        //Destructure and extract the field from the request Body
        const{ productName, productQuantity, productAmount} = req.body;
        //create a new instance of the product and save to the database
        const newProduct = await productModel.create({productName, productQuantity, productAmount, storeId});
        //send a success response
        res.status(201).json({
            message: 'Product created successfully',
            data: newProduct
        });

    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error: ' + error.message
        })
    }
};

exports.getOneProduct = async (req, res)=> {
    try{
        const {id} = req.params;
        const product = await productModel.findOne({ where: {id : id}, include: {model: Store, as: 'Store', attributes:['name', 'location']}, })
        if(!product){
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        //send a success response
        res.status(200).json({
            message: 'Product Found',
            data: product
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }
    
};

exports.getAllProductBelongingToAStore = async (req, res)=> {
    try{
        const storeId = req.params;
        const products = await productModel.findAll({ where: {storeId: storeId}});
        if(products.length == 0){
            return res.status(404).json({
                message: 'No products found'
            })
        }
        //send a success response
        res.status(200).json({
            message: 'Products found',
            data: products
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }
};

exports.updateProduct = async (req, res)=> {
    try{
        const {id} = req.params;
        const updatedProduct = await productModel.update(req.body, { where: {id: id}});
        if(updatedProduct[0] == 0){
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        //send a success response
        res.status(200).json({
            message: 'Product updated successfully',
            data: updatedProduct
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }
};

exports.deleteProduct = async (req, res)=> {
    try{
        const {id} = req.params;
        const deletedProduct = await productModel.destroy({ where: {id: id}});
        if(deletedProduct == 0){
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        //send a success response
        res.status(200).json({
            message: 'Product deleted successfully',
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }
};