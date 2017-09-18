function addMarker(data, map, bounds) {
  var mapLabel = new MapLabel({
    text: data.properties.name,
    map: map,
    fontSize: 12,
    align: 'center'
  });

  mapLabel.set('position', new google.maps.LatLng(data.geometry.coordinates[1], data.geometry.coordinates[0]));

  var marker = new google.maps.Marker({
    title: data.properties.name,
    map: map,
    icon: {
      path: "M27.648 -41.399q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm9.216 0q0 3.924 -1.188 6.444l-13.104 27.864q-0.576 1.188 -1.71 1.872t-2.43 0.684 -2.43 -0.684 -1.674 -1.872l-13.14 -27.864q-1.188 -2.52 -1.188 -6.444 0 -7.632 5.4 -13.032t13.032 -5.4 13.032 5.4 5.4 13.032z",
      scale: 0.6,
      strokeWeight: 0.2,
      strokeColor: 'black',
      strokeOpacity: 1,
      fillColor: data.properties.color,
      fillOpacity: 0.85,
    }
  });

  marker.bindTo('position', mapLabel);

  bounds.extend(marker.getPosition());
}

function initMap() {
  var data = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.102027000000003,
            44.441629,
            0
          ]
        },
        "properties": {
          "name": "Casa Lupu",
          "color": "#3F5BA9",
          "styleUrl": "#icon-503-3F5BA9",
          "styleHash": "2e5c9538",
          "description": "<img src=\"https://lh3.googleusercontent.com/Ko08wYtQx8ybaMIUUczzhkEVHhoLQlk3OrHyn6chon9SgKic9vvaYk_ctphzditB58ZK00B_TSSPCf-gm4CR8rvRRJrDCm8ukrs-uCveA0RjQ-9X8suHqmPVbpBsYEor\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh3.googleusercontent.com/Ko08wYtQx8ybaMIUUczzhkEVHhoLQlk3OrHyn6chon9SgKic9vvaYk_ctphzditB58ZK00B_TSSPCf-gm4CR8rvRRJrDCm8ukrs-uCveA0RjQ-9X8suHqmPVbpBsYEor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1173585,
            44.4498486,
            0
          ]
        },
        "properties": {
          "name": "Casa Jurnalistului",
          "color": "#C6A4CF",
          "styleUrl": "#icon-503-C6A4CF",
          "styleHash": "4e63f658",
          "description": "<img src=\"https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.0921062,
            44.4485494,
            0
          ]
        },
        "properties": {
          "name": "Cetatea Artelor",
          "color": "#B29189",
          "styleUrl": "#icon-503-B29189",
          "styleHash": "-55e4da28",
          "description": "<img src=\"https://lh5.googleusercontent.com/proxy/zP3QQ2w2ZLCBHGfQA6JgyBFuXPffjzOn9OhJRd8d6gV3GDWgo4l0JFQqI7hJUHcLqw\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/proxy/zP3QQ2w2ZLCBHGfQA6JgyBFuXPffjzOn9OhJRd8d6gV3GDWgo4l0JFQqI7hJUHcLqw"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1213067,
            44.4390983,
            0
          ]
        },
        "properties": {
          "name": "Colivia",
          "color": "#F4EB36",
          "styleUrl": "#icon-503-F4EB37",
          "styleHash": "517b1b18",
          "description": "<img src=\"https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://lh3.googleusercontent.com/8i_vPzvvfXsuCfWJ1mlMlqrobTqAZ1E0B8H3mYfIZPJ4bcgsxvOSKw0ckTJ9pT-svr_9GTy8vtdbNhUdY0zlj4ON3k6G74eWDfIinQ6FwNikB_uRQLZRee6SA6zJpdt3rQ\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg https://lh3.googleusercontent.com/8i_vPzvvfXsuCfWJ1mlMlqrobTqAZ1E0B8H3mYfIZPJ4bcgsxvOSKw0ckTJ9pT-svr_9GTy8vtdbNhUdY0zlj4ON3k6G74eWDfIinQ6FwNikB_uRQLZRee6SA6zJpdt3rQ"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1083356,
            44.4396153,
            0
          ]
        },
        "properties": {
          "name": "Grădina Sticlarilor",
          "color": "#7C3592",
          "styleUrl": "#icon-503-7C3592",
          "styleHash": "-96e2d68",
          "description": "<img src=\"https://lh5.googleusercontent.com/8CLCLb3Pn9DMugxvO8cI9SxYmj5ri2a3TY6cMVJaNBfEkrxQF38vNN0jqOJNd9AKnUCsjJrlnDahv48snRunEnnJ5uRKEdtzpaJ0235kiR9ME0HxrKfJc2x4oVD2TRHi\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/8CLCLb3Pn9DMugxvO8cI9SxYmj5ri2a3TY6cMVJaNBfEkrxQF38vNN0jqOJNd9AKnUCsjJrlnDahv48snRunEnnJ5uRKEdtzpaJ0235kiR9ME0HxrKfJc2x4oVD2TRHi"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1290591,
            44.438546,
            0
          ]
        },
        "properties": {
          "name": "Home Mătăsari",
          "color": "#EE9C96",
          "styleUrl": "#icon-503-EE9C96",
          "styleHash": "abc3a98",
          "description": "<img src=\"https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.0887071,
            44.4429704,
            0
          ]
        },
        "properties": {
          "name": "Insula 42",
          "color": "#00A9CC",
          "styleUrl": "#icon-503-0BA9CC",
          "styleHash": "2656bf8",
          "description": "<img src=\"https://lh5.googleusercontent.com/AfyvrdQaLVupcMaJR9-huUF4qApVn0MH1Iq-KgoGuQEZZQSSatLXjsw1CtQPTKDtTNaVWq4ImdyUlg2avJTl7ccR5hfJUf-5xshOPaYM95NM-pLuHUC75d6cSnCODhoS\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/AfyvrdQaLVupcMaJR9-huUF4qApVn0MH1Iq-KgoGuQEZZQSSatLXjsw1CtQPTKDtTNaVWq4ImdyUlg2avJTl7ccR5hfJUf-5xshOPaYM95NM-pLuHUC75d6cSnCODhoS"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1066967,
            44.4316979,
            0
          ]
        },
        "properties": {
          "name": "Manasia Hub",
          "color": "#4186F0",
          "styleUrl": "#icon-503-4186F0",
          "styleHash": "-62c58ea8",
          "description": "<img src=\"https://lh5.googleusercontent.com/syvThbk1qNgx1e3UjSzEMoM6XYzEZ1JvOm18-m3hVQpAe8YaQX_t_ZS_IH-wb_TdmiPdtgA3HWj7GnIu2KgRs2VjPNUgpbufxTsl3YDMeYZHF_g85NKUsUrQuZBo6bSg\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/syvThbk1qNgx1e3UjSzEMoM6XYzEZ1JvOm18-m3hVQpAe8YaQX_t_ZS_IH-wb_TdmiPdtgA3HWj7GnIu2KgRs2VjPNUgpbufxTsl3YDMeYZHF_g85NKUsUrQuZBo6bSg"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.0877939,
            44.4412259,
            0
          ]
        },
        "properties": {
          "name": "CZVL 12",
          "color": "#DB4436",
          "styleUrl": "#icon-503-DB4436",
          "styleHash": "-12a4d528",
          "description": "<img src=\"https://lh3.googleusercontent.com/ki0aCxF6UlFyoyZK1GG6yCFsgKfrdkzHBI76BlRE_VVm2eEbGEVacCm61HfhHLGyowgi71j2_e5m6jKSgD8Uq0LSi_ZjOf7xIbNdnARBj3XJ1ixVmulMFy7oMCkYn38\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh3.googleusercontent.com/ki0aCxF6UlFyoyZK1GG6yCFsgKfrdkzHBI76BlRE_VVm2eEbGEVacCm61HfhHLGyowgi71j2_e5m6jKSgD8Uq0LSi_ZjOf7xIbNdnARBj3XJ1ixVmulMFy7oMCkYn38"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1051142,
            44.438675,
            0
          ]
        },
        "properties": {
          "name": "AICI",
          "color": "#FAD199",
          "styleUrl": "#icon-503-FAD199",
          "styleHash": "56cfdf38",
          "description": "<img src=\"https://lh5.googleusercontent.com/BrO3W-ql8bDyXlVlAY-mWoMRU6sk2vNj4PwbNTowgl0zVTPYFTdsPTt4jHFMS9qynxSuMe7kdW47rwFGR6V9RhqKgCNPjCzLS4tTFl17PYhVSN2omI0hB-NS642w4g\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/BrO3W-ql8bDyXlVlAY-mWoMRU6sk2vNj4PwbNTowgl0zVTPYFTdsPTt4jHFMS9qynxSuMe7kdW47rwFGR6V9RhqKgCNPjCzLS4tTFl17PYhVSN2omI0hB-NS642w4g"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1038724,
            44.4484585,
            0
          ]
        },
        "properties": {
          "name": "The Room ",
          "color": "#7CCFA9",
          "styleUrl": "#icon-503-7CCFA9",
          "styleHash": "42131318",
          "description": "<img src=\"https://lh5.googleusercontent.com/GpQqytnAjbuhikQQRGxkQWgZZWdiavg0pWJpt6DkFE8Xu7fjNRDTfRISUnYVSF2SjSnsxge0Y3qH6Dr4F0cl-6_zdhKLWBmIiOdBNdyDxawcupF0veaQl0Bwr86_rrXJ\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/GpQqytnAjbuhikQQRGxkQWgZZWdiavg0pWJpt6DkFE8Xu7fjNRDTfRISUnYVSF2SjSnsxge0Y3qH6Dr4F0cl-6_zdhKLWBmIiOdBNdyDxawcupF0veaQl0Bwr86_rrXJ"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1124903,
            44.4375126,
            0
          ]
        },
        "properties": {
          "name": "Carol 53",
          "color": "#A61B4A",
          "styleUrl": "#icon-503-A61B4A",
          "styleHash": "7e07a098",
          "description": "<img src=\"https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1167336,
            44.4497509,
            0
          ]
        },
        "properties": {
          "name": "Modulab",
          "color": "#62AF44",
          "styleUrl": "#icon-503-62AF44",
          "styleHash": "-6cd1e4a8",
          "description": "<img src=\"https://lh3.googleusercontent.com/GpGPzeK7iXQjrO2EjXmC8FmjarmFKEAbGa_BXOtSdyFG757TQfOOAyXocE_REzqhwte1JT17tlp_VpE_5Yu4gySxYzaKeyDqa9DL81m3X-0ziYxpJmIqTWYs_y3k4NFQ\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh3.googleusercontent.com/GpGPzeK7iXQjrO2EjXmC8FmjarmFKEAbGa_BXOtSdyFG757TQfOOAyXocE_REzqhwte1JT17tlp_VpE_5Yu4gySxYzaKeyDqa9DL81m3X-0ziYxpJmIqTWYs_y3k4NFQ"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1266309,
            44.4398892,
            0
          ]
        },
        "properties": {
          "name": "EFdeN",
          "color": "#009D57",
          "styleUrl": "#icon-503-009D57",
          "styleHash": "12c5bfd8",
          "description": "<img src=\"https://lh3.googleusercontent.com/fglsDD8v4nWOuq-EAxqh3SpSy2sEhYGwQ-dG-NbN0UiEpe044ZfN_XMwwi7ED52bCZKQqS_4y7SwyHRrVD1S1kyN-NWIdg6iSAMb29801IJ0P_nXPEjlykx08WsjGCRj\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh3.googleusercontent.com/fglsDD8v4nWOuq-EAxqh3SpSy2sEhYGwQ-dG-NbN0UiEpe044ZfN_XMwwi7ED52bCZKQqS_4y7SwyHRrVD1S1kyN-NWIdg6iSAMb29801IJ0P_nXPEjlykx08WsjGCRj"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.0983121,
            44.450444,
            0
          ]
        },
        "properties": {
          "name": "AvanPost",
          "color": "#795046",
          "styleUrl": "#icon-503-795046",
          "styleHash": "-1fc827e8",
          "description": "<img src=\"https://lh5.googleusercontent.com/_7Hu3-f0_1p-zoZEnvcC-BIveqirpVzYkJpaZx0FxnlIetWUcgGoEldfltyt2cr4k0xQH_U0uJXvIE7hT-S1Y65doZo2JYwd9GO4QvuSaDP-DoMvY5IdPEtJ7mfWmDye\" height=\"200\" width=\"auto\" />",
          "gx_media_links": "https://lh5.googleusercontent.com/_7Hu3-f0_1p-zoZEnvcC-BIveqirpVzYkJpaZx0FxnlIetWUcgGoEldfltyt2cr4k0xQH_U0uJXvIE7hT-S1Y65doZo2JYwd9GO4QvuSaDP-DoMvY5IdPEtJ7mfWmDye"
        }
      }
    ]
  };

  var styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: { lat: 41.876, lng: -87.624 },
    styles: styles,
  });

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < data.features.length; i++) {
    var feature = data.features[i];
    addMarker(feature, map, bounds);
  }

  map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initMap);