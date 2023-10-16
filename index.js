const express = require("express");
const mongoose = require("mongoose");

const app = express();
const puerto = 3000;

// Función asincrónica para conectar a la base de datos
async function connectToDatabase() {
  try {
    const mongooseConnection = await mongoose.connect(
      "mongodb://localhost:27017/mibasexd"
    );
    console.log("Conexión a MongoDB establecida:", mongooseConnection);
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Llama a la función para conectar a la base de datos
connectToDatabase();

app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en el puerto ${puerto}`);
});
