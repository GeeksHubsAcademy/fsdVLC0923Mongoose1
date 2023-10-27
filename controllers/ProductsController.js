

const Product = require('../models/product');

const ProductsController = {};

ProductsController.newProduct = async (req, res) => {

    try {

        let product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            precio: req.body.precio,
            categoria: req.body.categoria,
            vegan: req.body.vegan,
            image: req.body.image
        })

        if (product) {
            res.send({ "Message": `El producto ${product.name} se ha añadido con éxito` })
        }

    } catch (error) {
        res.json({ 
            success: false,
            message: "El producto no se ha podido añadir.",
            error: error
        })
    }

};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = ProductsController;