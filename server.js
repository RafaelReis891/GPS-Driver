const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Lista de pontos da rota (exemplo STRAVA)
const rota = [
    { lat: -22.451858, lon: -46.972882 }, //-22.451858, -46.972882
    { lat: -22.452157, lon: -46.972941 }, //-22.452157, -46.972941
    { lat: -22.452407, lon: -46.973054 },//-22.452407, -46.973054
    { lat: -22.452500, lon: -46.973169 },//-22.452500, -46.973169
    { lat: -22.452325, lon: -46.973767 },//-22.452325, -46.973767
    { lat: -22.452030, lon: -46.974868 } //-22.452030, -46.974868
];

app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para retornar rota
app.get('/rota', (req, res) => {
    res.json(rota);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
