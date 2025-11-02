const express = require('express');
const cors = require('cors');

const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/productos', productosRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API corriendo: /productos, /categorias, /lugares, /comidas');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
