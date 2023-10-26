
const User = require('../models/user');

const UsersController = {};

UsersController.newUser = async (req, res) => {

    // let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }

};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;