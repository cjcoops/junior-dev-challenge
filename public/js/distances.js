//on page load, loads a list of all the clients
//listens for a hashchange and then will show candidate distances from that client
$(document).ready(function() {
	fetchAllClientsData()
	makeUrlChangeShowDistances()
})

function fetchAllClientsData() {
	$.get("/clients", function(data) {
		showClientsList(data)
	})
}

function showClientsList(data) {
	var clientsList = "";
	data.forEach(function(client) {
		clientsList += `<li><a href="#${client._id}">${client.name}</a></li>`;
	});
	$("#clients ul").html(clientsList);
}

function makeUrlChangeShowDistances() {
	window.addEventListener("hashchange", showDistances);
}

function showDistances() {
	var id = getId(window.location);
	$("#candidates ul").html("");
	displayDistances(id);
}

function getId(location) {
	return location.hash.split("#")[1];
}

function displayDistances(clientId) {
	$.get("/clients", function(data){
		var client = data.find(function(client) {
			return client._id == clientId;
		});
		$.get("/candidates", function(data){
			data.forEach(function(candidate) {
				getDistanceMatrix(client, candidate);
			});
		});
	});
}

// takes client and candidate as arguments and displays a list of distances/times between the two
function getDistanceMatrix(client, candidate) {
	var service = new google.maps.DistanceMatrixService;
	var modeOfTransport = getModeOfTransport(candidate)
	var googleModeOfTransport = getGoogleModeOfTransport(candidate);
	service.getDistanceMatrix({
		origins: [client.postcode],
		destinations: [candidate.postcode],
		travelMode: "DRIVING",
		unitSystem: google.maps.UnitSystem.METRIC,
		avoidHighways: false,
		avoidTolls: false
	}, function(response, status) {
		if (status !== 'OK') {
			alert('Error was: ' + status);
		} else {
			var name = candidate.name;
			var journey = response.rows[0].elements[0];
			if (journey.status == "OK") {
				addCandidateToMap(candidate);
				var distance = journey.distance.text;
				var time = journey.duration.text;
				$("#candidates ul").append(`<li>${name} is ${distance} away from ${client.name}. It will take ${time} to get there by ${modeOfTransport}</li>`);
			}
		}
	});
}

function addCandidateToMap(candidate) {
	var geocoder = new google.maps.Geocoder();
	var postcode = candidate.postcode;
	geocoder.geocode({'address': postcode}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			addPinsOnMap([{lat:results[0].geometry.location.lat(),lon:results[0].geometry.location.lng(),name:candidate.name}]);
		}
	});
}

function getGoogleModeOfTransport(candidate) {
	if (candidate.modeOfTransport) {
		var type = candidate.modeOfTransport.type;
		convertModeOfTransportToGoogleModes(type);
	} else {
		return "DRIVING";
	}
}

function convertModeOfTransportToGoogleModes(type) {
	if (type == "bike") {
		return "BICYCLING";
	} else {
		return "DRIVING";
	}
}

function getModeOfTransport(candidate) {
	if (candidate.modeOfTransport) {
		return candidate.modeOfTransport.type;
	} else {
		return "car";
	}
}
