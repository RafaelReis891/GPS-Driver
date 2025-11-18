const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Lista de pontos da rota (exemplo STRAVA)
const rota = [
    { lat: -23.5, lon: -46.6 },
    { lat: -23.5005, lon: -46.601 },
    { lat: -23.501, lon: -46.602 }
];

app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para retornar rota
app.get('/rota', (req, res) => {
    res.json(rota);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
