// Libreria y Modulo: Express, Libro
const express = require("express");
const Libro = require("../models/Libro");

// Inicializacion del router para los libros
const router = express.Router();

// Ruta para obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Ruta para obtener un libro por ID
router.get("/:id", async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    res.send(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Libro" });
  }
});

// Ruta para crear un nuevo Libro
router.post("/", async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
});

// Ruta para actualizar un Libro existente
router.put("/:id", async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
});

// Ruta para eliminar un Libro
router.delete("/:id", async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Libro" });
  }
});

module.exports = router;
