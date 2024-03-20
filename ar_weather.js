let coordinates = {}
$(document).ready(function(){
    getCoordinates()
    get_weather()
})
function getCoordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has('source')&&searchParams.has('destination')){
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        console.log(source)
        coordinates.source_lat=source.split(';')[0]
        coordinates.source_lon=source.split(';')[1]
        coordinates.destination_lat=source.split(';')[0]
        coordinates.destination_lon=source.split(';')[1]
    }
    else{
        alert('Coordinates are not selected')
        window.history.back()
    }
}
function get_weather(){
    $.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`,
    type: 'get',
    success: function (response) {
        let name =  response.name
        let weather =  response.weather[0].main
        $("#scene_container").append(
        <a-entity gps-entity-place="latitude: $(steps[i].maneuver.location [1]); longitude: ${steps[i].maneuver.location[0]);">
        <a-entity>
        <a-text height="50" value="Weather forcast is $(weather) at ${name}"></a-text>
        </a-entity>
        </a-entity>
        )
    }
    
        
        })
}