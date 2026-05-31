const express = require('express');
const app = express();

// Middleware para permitir que el servidor entienda datos en formato JSON
app.use(express.json());

// Ruta principal (Raíz)
app.get('/', (req, res) => {
    res.send('Servidor activo');
});

// Ruta de saludo
app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
});

// Ruta con parámetros dinámicos
app.get('/mensaje/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send('Hola ' + nombre);
});

// --- PUESTO DE LA PREGUNTA 8 (Ruta POST) ---
app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje
    });
});

// Configuración del puerto
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});

app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje
    });
});