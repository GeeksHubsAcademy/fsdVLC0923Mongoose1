

//Importo método router() de la clase express
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const PurchasesRouter = require('./views/PurchasesRouter');
const ProductsRouter = require('./views/ProductsRouter');

router.use("/users", UsersRouter);
router.use("/products", ProductsRouter);
router.use("/purchases", PurchasesRouter);

//Exporto router
module.exports = router;