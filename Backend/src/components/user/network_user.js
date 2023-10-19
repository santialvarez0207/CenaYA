const response = require('../../network/response');
const userController = require('./controller_user'); 

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  userController.addUser(req.body) 
    .then(() => {
      response.success(req, res, "Usuario creado correctamente", 201);
    })
    .catch(() => {
      response.error(req, res, "Información inválida", "Error al crear el usuario");
    });
});

router.get('/', (req, res) => {
  userController.getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch(() => {
      response.error(req, res, "No se obtuvieron los datos de los usuarios");
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  userController.getUser(id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(() => {
      response.error(req, res, "No se obtuvieron los datos del usuario");
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  userController.updateUser(id, req.body)
    .then(() => {
      response.success(req, res, "Usuario actualizado correctamente", 200);
    })
    .catch(() => {
      response.error(req, res, "Información inválida", "Error al actualizar el usuario");
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  userController.deleteUser(id)
    .then(() => {
      response.success(req, res, "Usuario eliminado correctamente", 200);
    })
    .catch((error) => {
      response.error(req, res, "No se pudo eliminar el usuario", error);
    });
});

router.get('/check', (req, res) =>{
  controller.checkUser(req.query.email, req.query.password)
      .then((sesion)=>{
          response.success(req, res,sesion,201)
      })
      .catch((e)=>{
          response.error(req, res,"informacion incorrecta",e)
      })
})
module.exports = router;