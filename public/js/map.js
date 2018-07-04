var data = [];
var locations = [];

$( ".hide" ).each(function( index ) {
  data.push($(this).text().split(' ').map(Number));
});

    function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat:data[0][0],lng:data[0][1]}
      });
      
     for(var i = 0; i < data.length; i++){
        var marker = new google.maps.Marker({
          position: {lat: data[i][0], lng: data[i][1]},
          map: map,
          title: "Beer!",
          animation: google.maps.Animation.DROP,
        })
      }
      
      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    }