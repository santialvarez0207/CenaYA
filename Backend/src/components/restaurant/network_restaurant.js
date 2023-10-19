const response = require('../../network/response');
const restaurantController = require('./controller_restaurant');

const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  restaurantController.addRestaurant(req.body) // Asegúrate de que el controlador tenga un método addRestaurant
    .then(() => {
      response.success(req, res, "Creado correctamente", 201);
    })
    .catch(() => {
      response.error(req, res, "Información inválida", "Error al crear el restaurante");
    });
});

router.get('/', (req, res) => {
  restaurantController.getRestaurants() 
    .then((restaurants) => {
      response.success(req, res, restaurants, 201);
    })
    .catch(() => {
      response.error(req, res, "No se obtuvieron los datos");
    });
});



router.get('/:id', (req, res) => {
  const id = req.params.id;
  restaurantController.getRestaurant(id) 
    .then((restaurant) => {
      response.success(req, res, restaurant, 201);
    })
    .catch(() => {
      response.error(req, res, "No se obtuvieron los datos");
    });
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    restaurantController.deleteRestaurant(id)
      .then(() => {
        response.success(req, res, "Restaurante eliminado correctamente", 200);
      })
      .catch((error) => {
        response.error(req, res, "No se pudo eliminar el restaurante", error);
      });
  });


module.exports = router;