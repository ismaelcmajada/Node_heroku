var map = L.map('main_map').setView([28.4965, -13.8622], 13);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

}).addTo(map);

L.marker([28.496766, -13.855685]).addTo(map);

L.marker([28.497611, -13.859994]).addTo(map);

L.marker([28.508071, -13.869284]).addTo(map);
