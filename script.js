// Initialize map
const map = L.map('map').setView([22.9734, 78.6569], 5); // center India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// NCRB 2022 data for all states & UTs
const crimeData = [
  {"state":"Andhra Pradesh","lat":15.9129,"lon":79.7400,"year":2022,"cases":158547,"description":"Andhra Pradesh: 158547 crimes reported against women in 2022"},
  {"state":"Arunachal Pradesh","lat":28.2180,"lon":94.7278,"year":2022,"cases":2308,"description":"Arunachal Pradesh: 2308 crimes reported against women in 2022"},
  {"state":"Assam","lat":26.2006,"lon":92.9376,"year":2022,"cases":59315,"description":"Assam: 59315 crimes reported against women in 2022"},
  {"state":"Bihar","lat":25.0961,"lon":85.3131,"year":2022,"cases":211079,"description":"Bihar: 211079 crimes reported against women in 2022"},
  {"state":"Chhattisgarh","lat":21.2787,"lon":81.8661,"year":2022,"cases":73822,"description":"Chhattisgarh: 73822 crimes reported against women in 2022"},
  {"state":"Goa","lat":15.2993,"lon":74.1240,"year":2022,"cases":2711,"description":"Goa: 2711 crimes reported against women in 2022"},
  {"state":"Gujarat","lat":22.2587,"lon":71.1924,"year":2022,"cases":134600,"description":"Gujarat: 134600 crimes reported against women in 2022"},
  {"state":"Haryana","lat":29.0588,"lon":76.0856,"year":2022,"cases":125435,"description":"Haryana: 125435 crimes reported against women in 2022"},
  {"state":"Himachal Pradesh","lat":31.1048,"lon":77.1734,"year":2022,"cases":13231,"description":"Himachal Pradesh: 13231 crimes reported against women in 2022"},
  {"state":"Jharkhand","lat":23.6102,"lon":85.2799,"year":2022,"cases":48726,"description":"Jharkhand: 48726 crimes reported against women in 2022"},
  {"state":"Karnataka","lat":15.3173,"lon":75.7139,"year":2022,"cases":129461,"description":"Karnataka: 129461 crimes reported against women in 2022"},
  {"state":"Kerala","lat":10.8505,"lon":76.2711,"year":2022,"cases":235858,"description":"Kerala: 235858 crimes reported against women in 2022"},
  {"state":"Madhya Pradesh","lat":22.9734,"lon":78.6569,"year":2022,"cases":298578,"description":"Madhya Pradesh: 298578 crimes reported against women in 2022"},
  {"state":"Maharashtra","lat":19.7515,"lon":75.7139,"year":2022,"cases":374038,"description":"Maharashtra: 374038 crimes reported against women in 2022"},
  {"state":"Manipur","lat":24.6637,"lon":93.9063,"year":2022,"cases":3029,"description":"Manipur: 3029 crimes reported against women in 2022"},
  {"state":"Meghalaya","lat":25.4670,"lon":91.3662,"year":2022,"cases":2914,"description":"Meghalaya: 2914 crimes reported against women in 2022"},
  {"state":"Mizoram","lat":23.1645,"lon":92.9376,"year":2022,"cases":3587,"description":"Mizoram: 3587 crimes reported against women in 2022"},
  {"state":"Nagaland","lat":26.1584,"lon":94.5624,"year":2022,"cases":1008,"description":"Nagaland: 1008 crimes reported against women in 2022"},
  {"state":"Odisha","lat":20.9517,"lon":85.0985,"year":2022,"cases":143414,"description":"Odisha: 143414 crimes reported against women in 2022"},
  {"state":"Punjab","lat":31.1471,"lon":75.3412,"year":2022,"cases":43738,"description":"Punjab: 43738 crimes reported against women in 2022"},
  {"state":"Rajasthan","lat":27.0238,"lon":74.2179,"year":2022,"cases":236090,"description":"Rajasthan: 236090 crimes reported against women in 2022"},
  {"state":"Sikkim","lat":27.5330,"lon":88.5122,"year":2022,"cases":549,"description":"Sikkim: 549 crimes reported against women in 2022"},
  {"state":"Tamil Nadu","lat":11.1271,"lon":78.6569,"year":2022,"cases":193913,"description":"Tamil Nadu: 193913 crimes reported against women in 2022"},
  {"state":"Telangana","lat":17.3850,"lon":78.4867,"year":2022,"cases":151849,"description":"Telangana: 151849 crimes reported against women in 2022"},
  {"state":"Tripura","lat":23.9408,"lon":91.9882,"year":2022,"cases":3653,"description":"Tripura: 3653 crimes reported against women in 2022"},
  {"state":"Uttar Pradesh","lat":26.8467,"lon":80.9462,"year":2022,"cases":401787,"description":"Uttar Pradesh: 401787 crimes reported against women in 2022"},
  {"state":"Uttarakhand","lat":30.0668,"lon":79.0193,"year":2022,"cases":16967,"description":"Uttarakhand: 16967 crimes reported against women in 2022"},
  {"state":"West Bengal","lat":22.9868,"lon":87.8550,"year":2022,"cases":156503,"description":"West Bengal: 156503 crimes reported against women in 2022"},
  {"state":"Andaman and Nicobar Islands","lat":11.7401,"lon":92.6586,"year":2022,"cases":460,"description":"Andaman and Nicobar Islands: 460 crimes reported against women in 2022"},
  {"state":"Chandigarh","lat":30.7333,"lon":76.7794,"year":2022,"cases":2941,"description":"Chandigarh: 2941 crimes reported against women in 2022"},
  {"state":"Dadra and Nagar Haveli and Daman and Diu","lat":20.1809,"lon":73.0169,"year":2022,"cases":1184,"description":"Dadra and Nagar Haveli and Daman and Diu: 1184 crimes reported against women in 2022"},
  {"state":"Delhi","lat":28.6139,"lon":77.2090,"year":2022,"cases":300429,"description":"Delhi: 300429 crimes reported against women in 2022"},
  {"state":"Jammu and Kashmir","lat":33.7782,"lon":76.5762,"year":2022,"cases":25915,"description":"Jammu and Kashmir: 25915 crimes reported against women in 2022"},
  {"state":"Ladakh","lat":34.1526,"lon":77.5770,"year":2022,"cases":439,"description":"Ladakh: 439 crimes reported against women in 2022"},
  {"state":"Lakshadweep","lat":10.5621,"lon":72.6369,"year":2022,"cases":64,"description":"Lakshadweep: 64 crimes reported against women in 2022"},
  {"state":"Puducherry","lat":11.9416,"lon":79.8083,"year":2022,"cases":3237,"description":"Puducherry: 3237 crimes reported against women in 2022"}
];

// Function to determine marker color
function getColor(cases) {
  if (cases > 200000) return 'red';
  if (cases > 50000) return 'orange';
  return 'green';
}

// Plot data on map
crimeData.forEach(loc => {
  L.circle([loc.lat, loc.lon], {
    radius: 50000,       // radius in meters
    color: getColor(loc.cases),
    fillColor: getColor(loc.cases),
    fillOpacity: 0.4
  }).addTo(map)
    .bindPopup(`
      <b>${loc.state} (${loc.year})</b><br>
      Cases: ${loc.cases}<br>
      ${loc.description}
    `);
});

// Add legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
    <b>Crime Levels</b><br>
    <span style="color:red">&#9632;</span> High (>2,00,000)<br>
    <span style="color:orange">&#9632;</span> Medium (50,001–2,00,000)<br>
    <span style="color:green">&#9632;</span> Low (≤50,000)
  `;
  return div;
};
legend.addTo(map);
