// Librerias y modulos: Express, ruta de libros y manejo de errores
const express = require("express");
const librosRouter = require("./routes/libros");
const errorHandler = require("./middlewares/errorHandler");

// Inicializacion de la app y sus funcionalidades
const app = express();
app.use(express.json());
app.use("/libros", librosRouter);
app.use(errorHandler);

// Apertura del servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
