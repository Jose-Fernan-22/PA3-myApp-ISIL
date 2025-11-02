const express = require('express');
const router = express.Router();
const controller = require('../controllers/productos.controller');

// GET /productos
router.get('/', controller.getAll);

module.exports = router;
