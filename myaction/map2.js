
  var map ;

function initMap() {
  var uluru = {lat: 40.632317121459955, lng: -74.11999682434858};
   map = new google.maps.Map(document.getElementById('map'), {
    zoom:12,
    center: uluru
  });
  update();
}

function addPoint(cords,title,description){
  var contentString = `<div>
  <h2>${title}</h2>
  <p>${description}</p>
  </div>`;
  var infowindow = new google.maps.InfoWindow({
      content: contentString})
  var marker = new google.maps.Marker({
    position: {lat: cords[1], lng: cords[0]},
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
