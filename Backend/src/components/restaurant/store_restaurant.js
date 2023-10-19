const model = require('./model_restaurant'); // Asegúrate de importar el modelo correcto

async function getRestaurant(parameter) {
  const restaurant = await model.findOne(parameter);
  return restaurant;
}

async function addRestaurant(restaurant) {
  const newRestaurant = new model(restaurant);
  await newRestaurant.save();
}

async function getRestaurants(parameter) {
  const restaurants = await model.find(parameter);
  return restaurants;
}

async function getPopularRestaurants() {
  const restaurants = await model.aggregate([{ $sort: { visits: -1 } }]).limit(4);
  return restaurants;
}

async function updateRestaurant(id, parameter) {
  await model.updateOne({ _id: id }, parameter);
}

async function deleteRestaurant(id) {
    try {
      const result = await model.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        throw new Error("El restaurante no se encontró o no pudo ser eliminado.");
      }
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  getRestaurant,
  addRestaurant,
  getRestaurants,
  getPopularRestaurants,
  updateRestaurant,
  deleteRestaurant,
};