import math

# Função para calcular azimute entre dois pontos
def azimute(lat1, lon1, lat2, lon2):
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_lon = math.radians(lon2 - lon1)
    
    x = math.sin(delta_lon) * math.cos(phi2)
    y = math.cos(phi1)*math.sin(phi2) - math.sin(phi1)*math.cos(phi2)*math.cos(delta_lon)
    
    theta = math.atan2(x, y)
    az = math.degrees(theta)
    return (az + 360) % 360

# Lista de pontos (exemplo STRAVA)
rota = [
    ( -23.5, -46.6),
    ( -23.5005, -46.601),
    ( -23.501, -46.602)
]

# Posição atual simulada
pos = (-23.5002, -46.6005)

# Calcula azimute para próximo ponto
for p in rota:
    ang = azimute(pos[0], pos[1], p[0], p[1])
    print(f"Direção para {p}: {ang:.2f}°")
