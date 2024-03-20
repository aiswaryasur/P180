let destination 
let latitude = 22.7868542, longitude = 88.3643296
$(document).ready(function(){
    initGeoLocation()
})
$(function () {
    $("#navigate-button").click(function () {
    window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
    })
function initGeoLocation(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(success) 

    }
    else{
        alert('Sorry! Your browser does not support Geolocation')
    }
}
function success(position){
    console.log(position)
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:16,
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true,

        },
        trackUserLocation:true,

    
    })

)
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    }).on('result', function (e) {
    destination =  e.result.center
    })
    );
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)

var img1 = document.querySelector('#amber')
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133,26.98547]).addTo(map)

var img2 = document.querySelector('#GatewayOfIndia')
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([72.834641,18.922064]).addTo(map)


var img3 = document.querySelector('#IndiaGate')
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.229446, 28.612894]).addTo(map)

var img4 = document.querySelector('#LotusTemple')
var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.259132, 28.553558]).addTo(map)

var img5 = document.querySelector('#VictoriaMemorial')
var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3425578, 22.5448082]).addTo(map)
}

