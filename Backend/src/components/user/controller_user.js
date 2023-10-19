const userStore = require('./store_user');

async function addUser(body) {
  try {
    if (!body) {
      throw new Error("No hay datos");
    }

    const user = {
      nombre: body.nombre,
      apellido: body.apellido,
      correoElectronico: body.correoElectronico,
      contraseña: body.contraseña,
      telefono: body.telefono,
      direccion: body.direccion,
    };

    await userStore.addUser(user);
    return "Usuario agregado correctamente";
  } catch (error) {
    throw error;
  }
}

async function getUsers(params = {}) {
  try {
    const users = await userStore.getUsers(params);
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUser(id) {
  try {
    const user = await userStore.getUser({ _id: id });
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, body) {
  try {
    if (!body) {
      throw new Error("No hay datos para actualizar");
    }

    const userUpdates = {
      nombre: body.nombre,
      apellido: body.apellido,
      correoElectronico: body.correoElectronico,
      contraseña: body.contraseña,
      telefono: body.telefono,
      direccion: body.direccion,
    };

    await userStore.updateUser(id, userUpdates);
    return "Usuario actualizado correctamente";
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    await userStore.deleteUser(id);
    return "Usuario eliminado correctamente";
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};