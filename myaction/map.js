var map;
$(document).ready(function() {


  mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haGI5MzAiLCJhIjoiY2l1MDhnYTlkMDFlNjJ6cnRxc3Y2YjgzeSJ9.RW6CF5kA8lG7nadOkNZR6w';
  map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-73.96101379999999,40.7686457], // starting position
    zoom: 1 // starting zoom
  });
})

function addPoint(address, name) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    console.log([results[0].geometry.location.lng(), results[0].geometry.location.lat()]);
    if (status === 'OK') {
      map.addSource(`${name}Point`, {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [results[0].geometry.location.lng(), results[0].geometry.location.lat()]
            },
            "properties": {
              "title": name,
              "icon": "monument"
            }
          }]

        }
      })
      map.addLayer({
        "id": `${name}Layer`,
        "type": "symbol",
        "source": `${name}Point`,
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
}
