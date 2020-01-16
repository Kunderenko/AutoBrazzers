var map,
		marker,
		coordinates = {lat: 50.448309, lng: 30.602896},
		popupContent = '<p class="content">м. Київ, вул. Сверстюка 19, 10 поверх, офіс 13</p>',
		infowindow,
		image = '../images/marker.png';
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 50.448166, lng: 30.605499},
		  zoom: 16,
		  disableDefaultUI: true,
		  scrollwheel: false,
		  styles: [
					{
						"featureType": "all",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"saturation": 36
							},
							{
								"color": "#000000"
							},
							{
								"lightness": 40
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#000000"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#000000"
							},
							{
								"lightness": 17
							},
							{
								"weight": 1.2
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#e3b141"
							}
						]
					},
					{
						"featureType": "administrative.locality",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#e0a64b"
							}
						]
					},
					{
						"featureType": "administrative.locality",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"color": "#0e0d0a"
							}
						]
					},
					{
						"featureType": "administrative.neighborhood",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#d1b995"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#000000"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#000000"
							},
							{
								"lightness": 21
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"color": "#12120f"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"lightness": "-77"
							},
							{
								"gamma": "4.48"
							},
							{
								"saturation": "24"
							},
							{
								"weight": "0.65"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"lightness": 29
							},
							{
								"weight": 0.2
							}
						]
					},
					{
						"featureType": "road.highway.controlled_access",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f6b044"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#4f4e49"
							},
							{
								"weight": "0.36"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#c4ac87"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"color": "#262307"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#a4875a"
							},
							{
								"lightness": 16
							},
							{
								"weight": "0.16"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#deb483"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#000000"
							},
							{
								"lightness": 19
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#0f252e"
							},
							{
								"lightness": 17
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#080808"
							},
							{
								"gamma": "3.14"
							},
							{
								"weight": "1.07"
							}
						]
					}
				]
		});
		marker = new google.maps.Marker({
            position: coordinates,
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image
			});
		infowindow = new google.maps.InfoWindow({
            content: popupContent
		});
		infowindow.open(map, marker);
      }