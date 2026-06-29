function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
  
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c;
  }
  
  export function calculateMetroRoute(origin, destination) {
    const distance = haversineDistance(
      origin.lat,
      origin.lng,
      destination.lat,
      destination.lng
    );
  
    const time = Math.round(distance * 2);
  
    let cost = 40;
  
    if (distance > 5) cost = 60;
    if (distance > 10) cost = 90;
    if (distance > 20) cost = 120;
    if (distance > 30) cost = 150;
  
    return {
      distance: distance.toFixed(2),
      time,
      cost,
    };
  }