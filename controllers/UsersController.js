const User = require("../models/user");
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const UsersController = {};

UsersController.loginUser = async (req, res) => {

  if((!req.body.email || !req.body.password) || ((req.body.email === "") || (req.body.password === ""))){
    res.send({ 
      success: true,
      message: "Credenciales incorrectas"
    })
  }

  try {
    let userFound = await User.find({
      email: req.body.email,
    });

    if (userFound) {
      if (userFound[0].email === undefined) {
        //No hemos encontrado al usuario...mandamos un mensaje
        res.send({ 
          success: true,
          message: "Credenciales incorrectas"
        })
      } else {
        //Hemos encontrado al usuario, vamos a ver si el pass es correcto

        if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
          //En caso de que hayamos verificado que el password si es correcto, generamos un token
          let token = jsonwebtoken.sign(
            { usuario: userFound },
            process.env.AUTH_SECRET,
            {
              expiresIn: "24h",
            }
          );

          res.send({ 
            success: true,
            message: `Bienvenid@ ${userFound[0].name}`,
            token: token
          })
        } else {
          res.send({ 
            success: true,
            message: "Credenciales incorrectas"
          })
        }
      }
    }
  } catch (error) {
    res.send({ 
      success: false,
      message: "Credenciales incorrectas",
      error: error
    })
  }
};

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
  let password = bcrypt.hashSync(req.body.password, Number.parseInt(10));

  try {
    let user = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      dni: req.body.dni,
      email: req.body.email,
      password: password,
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
      res.send(
        `Usuario ${updated.name} ${updated.surname} actualizado con éxito a ${name}`
      );
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
