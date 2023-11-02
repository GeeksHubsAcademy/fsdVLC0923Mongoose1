

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const ProductsController = require('../controllers/ProductsController');


router.get("/", ProductsController.getOneProduct);
router.post("/", ProductsController.newProduct);
router.delete("/", ProductsController.deleteProduct);



//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;