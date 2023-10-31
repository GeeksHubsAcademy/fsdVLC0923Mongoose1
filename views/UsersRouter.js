

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const UsersController = require('../controllers/UsersController');

router.get("/", UsersController.allUsers);
router.post("/", UsersController.newUser);
router.post("/login", UsersController.loginUser);
router.put("/", UsersController.modifyUser);
router.delete("/", UsersController.deleteUser);



//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;