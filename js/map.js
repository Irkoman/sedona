function initialize() {
    var mapCanvas = document.getElementById("map-canvas");
    var mapOptions = {
        center: new google.maps.LatLng(34.8937876,-111.7007464),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.8937876,-111.7007464),
        map: map,
    });
}
google.maps.event.addDomListener(window, "load", initialize);