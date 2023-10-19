const userModel = require('./model_user'); 

async function getUser(parameter) {
  const user = await userModel.findOne(parameter);
  return user;
}

async function addUser(user) {
  const newUser = new userModel(user);
  await newUser.save();
}

async function getUsers(parameter) {
  const users = await userModel.find(parameter);
  return users;
}

async function updateUser(id, parameter) {
  await userModel.updateOne({ _id: id }, parameter);
}

async function deleteUser(id) {
  try {
    const result = await userModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new Error("El usuario no se encontró o no pudo ser eliminado.");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};