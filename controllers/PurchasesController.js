
const Purchase = require('../models/purchase');

const PurchasesController = {};

PurchasesController.allPurchases = async (req, res) => {

    try {

        let purchase = await Purchase.find({})
                            .populate('userId')
                            .populate('products.itemId');

        if (purchase.length > 0) {
            res.send(purchase)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna compra." })
        }

    } catch (error) {
        res.json({ 
            success: false,
            message: "Ha habido un error en la búsqueda de las compras",
            error: error
        })
    }

}


PurchasesController.newPurchase = async (req, res) => {

    try {

        let purchase = await Purchase.create({
            userId: req.body.userId,
            products: req.body.products
        })

        if (purchase) {
            res.send({ "Message": `La compra se ha producido con éxito` })
        }

    } catch (error) {
        res.json({ 
            success: false,
            message: "La compra no se ha podido realizar",
            error: error
        })
    }

};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PurchasesController;