const User = require("../models/user");

const UsersController = {};

UsersController.allUsers = async (req, res) => {
  try {
    let user = await User.find({});

    if (user.length > 0) {
      res.send(user);
    } else {
      res.send("No se han encontrado usuarios");
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Ha habido un error en la búsqueda.",
      error: error,
    });
  }
};

UsersController.newUser = async (req, res) => {
  // let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

  try {
    let user = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      dni: req.body.dni,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    if (user) {
      res.send({ Message: `El usuario ${user.name} se ha añadido con éxito` });
    }
  } catch (error) {
    console.log(error);
  }
};

UsersController.modifyUser = async (req, res) => {
  let { name, surname, _id } = req.body;

  try {
    let updated = await User.findOneAndUpdate(
      //Query de búsqueda....
      { _id: _id },
      //Campos a cambiar
      {
        name,
        surname,
      }
    ).setOptions({ returnDocument: "before" });
    //con setOptions en este caso voy a exigir que me devuelva el documento modificado

    if (updated) {
      res.send(`Usuario ${updated.name} ${updated.surname} actualizado con éxito a ${name}`);
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Ha habido un error en la búsqueda.",
      error: error,
    });
  }
};

UsersController.deleteUser = async (req, res) => {
  try {
    let user = await User.findOneAndDelete({
      _id: req.body._id,
    });

    if (user) {
      res.send({
        Message: `El usuario ${user.name} se ha eliminado con éxito`,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "El producto no se ha podido añadir.",
      error: error,
    });
  }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;
