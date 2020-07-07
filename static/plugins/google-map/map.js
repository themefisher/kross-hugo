window.marker = null;

function initialize() {
  var map;
  var latitude = $('#map').attr('data-latitude');
  var longitude = $('#map').attr('data-longitude');
  var mapMarker = $('#map').attr('data-marker');
  var mapMarkerName = $('#map').attr('data-marker-name');
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
          "color": "#e9e9e9"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    }
  ];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 15,
    panControl: !1,
    zoomControl: !0,
    mapTypeControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    overviewMapControl: !1,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = mapMarker;
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(46, 40));
  marker = new google.maps.Marker({
    position: nottingham,
    map: map,
    icon: pinIcon,
    title: mapMarkerName
  })
}
var map = document.getElementById('map');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize)
}