$(document).ready(function(){

(function(){

	var map;
	map = new GMaps({
		el: '#myMap',
		lat: 34.0230753,
		lng: -84.1933037,
		scrollwheel:false,
		zoom: 17,
		zoomControl : true,
		panControl : true,
		streetViewControl : true,
		mapTypeControl: true,
		overviewMapControl: true,
		clickable: false
	});
	var image = 'images/map-marker.svg';
	map.addMarker({
		lat: 34.0230753,
		lng: -84.1933037,
		icon: image,
		height: '32px',
		width: '32px',
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'left',
		backgroundColor: '#efece0',
	});

	var styles = [

		{
			"featureType": "road",
			"stylers": [
				{ "color": "#ffffff" }
			]
		},{
			"featureType": "water",
			"stylers": [
				{ "color": "#bde5f6" }
			]
		 },{
		  "featureType": "landscape",
			 "stylers": [
			 { "color": "#faf5e8" }
			 ]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
				{ "color": "#a8a8a8" }
			]
		},{
			"featureType": "poi",
			"stylers": [
			 { "color": "#e2f0cd" }
			]
		},{
			"elementType": "labels.text",
			"stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#a8a8a8" }
			]
		}

	];

	 map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");
}());

});