document.addEventListener('DOMContentLoaded', function () {
    // Specify the center of the map using latitude and longitude
    var mapCenter = [52.0907374, 5.1214201];
  
    // Create a new map and set its center and zoom level
    var map = L.map('map').setView(mapCenter, 9);
  
    // Add a default OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 15,
      minZoom: 8,
    }).addTo(map);
  
    // Add markers to the map
    var markers = [
      { coordinates: [52.5907374, 5.1214201], popupText: 'Marker 1' },
      { coordinates: [52.0907374, 5.1214201], popupText: 'Marker 2' },
      // Add more markers as needed
    ];
  
    markers.forEach(function (marker) {
      L.marker(marker.coordinates)
        .addTo(map)
        .bindPopup(marker.popupText);
    });
  });
  