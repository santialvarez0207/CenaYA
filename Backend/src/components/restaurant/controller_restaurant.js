const restaurantStore = require('./store_restaurant'); 

async function addRestaurant(body) {
  try {
    if (!body) {
      throw new Error("No hay datos");
    }

    const restaurant = {
      nombre: body.nombre,
      direccion: body.direccion,
      tipoDeCocina: body.tipoDeCocina,
      horaApertura: body.horaApertura,
      horaCierre: body.horaCierre,
      descripcion: body.descripcion,
      imagen: body.imagen,
      menu: body.menu,
    };

    await restaurantStore.addRestaurant(restaurant);
    return "Restaurante agregado correctamente";
  } catch (error) {
    throw error;
  }
}

async function getRestaurants(params = {}) {
  try {
    const restaurants = await restaurantStore.getRestaurants(params);
    return restaurants;
  } catch (error) {
    throw error;
  }
}

async function getRestaurant(id) {
  try {
    const restaurant = await restaurantStore.getRestaurant({ _id: id });
    return restaurant;
  } catch (error) {
    throw error;
  }
}



async function deleteRestaurant(id) {
  try {
    await restaurantStore.deleteRestaurant(id);
    return "Restaurante eliminado correctamente";
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addRestaurant,
  getRestaurant,
  getRestaurants,
  deleteRestaurant,
};