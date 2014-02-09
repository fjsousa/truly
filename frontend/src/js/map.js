var map;
function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(38.72255, -9.1394)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


  var myLatlng = new google.maps.LatLng(37.3167, -8.800);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Sapato'
  });


  myLatlng = new google.maps.LatLng(38.8789, -6.9669);
  marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Sandália'
  });



  myLatlng = new google.maps.LatLng(37.1781, -3.6008);
  marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Chinelo'
  });


}

google.maps.event.addDomListener(window, 'load', initialize);