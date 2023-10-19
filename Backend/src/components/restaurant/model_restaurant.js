const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    tipoDeCocina: {
      type: String,
      required: true,
    },
    horaApertura: {
        type: String,
        required: true,
      },
    horaCierre: {
        type: String,
        required: true,
      },
    descripcion: {
      type: String,
      required: true,
    },
    imagen: {
      type: String, 
    },
    menu: [
      {
        nombre: String,
        precio: Number,
        descripcion: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);