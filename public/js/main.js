
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
