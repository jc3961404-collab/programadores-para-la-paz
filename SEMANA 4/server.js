const express = require('express');
const app = express();

// Ruta principal (Raíz)
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
