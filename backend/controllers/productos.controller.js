const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/productos.json');

function getAll(req, res) {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer productos.json:', err);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    try {
      const productos = JSON.parse(data);
      res.json(productos);
    } catch (parseErr) {
      console.error('Error al parsear JSON:', parseErr);
      res.status(500).json({ message: 'Error al procesar datos' });
    }
  });
}

module.exports = { getAll };
