var map = L.map('healthCentreMap').setView([40.714269, -74.005973], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var mappingHealthCentres = healthCentreData.rows;

for (var i=0; i<mappingHealthCentres.length; i++) {
	var healthCentreLocation = mappingHealthCentres [i]; 
	
	var marker = L.marker([healthCentreLocation.latitude, healthCentreLocation.longitude]).addTo(map);
	
	marker.bindPopup("<b>"+healthCentreLocation.NameOfCenter+"</b><br>"+healthCentreLocation.FullAddress);
	
}

