const express = require('express')
const router = express.Router()
const proyectoController =   require('../controllers/proyecto.controller');
// Retrieve all proyectos
router.get('/', proyectoController.findAll);
// Create a new proyecto
router.post('/', proyectoController.create);
// Retrieve a single proyecto with id
router.get('/:id', proyectoController.findById);
// Update a proyecto with id
router.put('/:id', proyectoController.update);
// Delete a proyecto with id
router.delete('/:id', proyectoController.delete);
module.exports = router