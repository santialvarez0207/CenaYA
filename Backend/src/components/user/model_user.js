const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    password: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
    },
    direccion: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true, // Agrega timestamps para createdAt y updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);