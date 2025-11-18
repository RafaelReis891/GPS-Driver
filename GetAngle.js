function azimute(lat1, lon1, lat2, lon2) {
    let phi1 = lat1 * Math.PI / 180;
    let phi2 = lat2 * Math.PI / 180;
    let delta_lon = (lon2 - lon1) * Math.PI / 180;
    
    let x = Math.sin(delta_lon) * Math.cos(phi2);
    let y = Math.cos(phi1)*Math.sin(phi2) - Math.sin(phi1)*Math.cos(phi2)*Math.cos(delta_lon);
    
    let theta = Math.atan2(x, y);
    let az = (theta * 180/Math.PI + 360) % 360;
    return az;
}

// Teste
let pos = {lat: -23.5002, lon: -46.6005};
let rota = [
    {lat: -23.5, lon: -46.6},
    {lat: -23.5005, lon: -46.601},
    {lat: -23.501, lon: -46.602}
];

rota.forEach(p => {
    console.log("Direção para", p, ":", azimute(pos.lat, pos.lon, p.lat, p.lon).toFixed(2), "°");
});
