
var map;
function addPinsOnMap(latLongs) {
	var myIcon = L.divIcon({html: '<img height="50px" width="50px" src="pictures/pin.png"></img>'})
	for (var i = 0; i < latLongs.length; i++) {
		latLongs[i]
	  var marker2 = L.marker([latLongs[i].lat, latLongs[i].lon], {icon: myIcon}).addTo(map);
		  marker2.bindPopup(latLongs[i].name);
		  marker2.on('mouseover', function (e) {
		    this.openPopup();
	  });
	}
}
$(document).ready(function() {
	map = new L.Map('map', { zoom: 15});

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        minZoom: 2,
        maxZoom: 20,
        maxNativeZoom: 17
    });
	map.setView(new L.LatLng(51.4839337, -0.2549888),9);
	map.addLayer(osm);
  map.invalidateSize();
	addPinsOnMap([{lat:51.5494457,lon:-0.4487664,name:'Cordant Hillingdon'}])
});

$(document).ready(function() {
	fetchAllClientsData()
	fetchAllCandidatesData()

	var origin1 = {lat: 53.3996968, lng: -1.2817522999999937};
	var origin2 = 'Greenwich, England';
	var destinationA = 'Stockholm, Sweden';
	var destinationB = {lat: 50.087, lng: 14.421};
	var origins = [origin1, origin2];
	var destinations = [destinationA, destinationB];
	var modeOfTransport = "WALKING"

	getDistanceMatrix(origins, destinations, modeOfTransport)
})

function fetchAllClientsData() {
	fetch("/clients")
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		showClientsList(data)
	})
}

function showClientsList(data) {
	var clientsList = ""
	data.forEach(function(client) {
		clientsList += `<li>${client.name}</li>`;
	})
	$("#clients ul").html(clientsList);
}

function fetchAllCandidatesData() {
	fetch("/candidates")
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		$("#candidates ul").text("CANDIDATES GO HERE");
	})
}

function getDistanceMatrix(origins, destinations, modeOfTransport) {
	var service = new google.maps.DistanceMatrixService;
	service.getDistanceMatrix({
		origins: origins,
		destinations: destinations,
		travelMode: modeOfTransport,
		unitSystem: google.maps.UnitSystem.METRIC,
		avoidHighways: false,
		avoidTolls: false
	}, function(response, status) {
		if (status !== 'OK') {
			alert('Error was: ' + status);
		} else {
			console.log(response)
			return response;
			}
		}
	)
}
