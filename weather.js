let updateWidget = function(data) {

  console.log("Got weather data: ", data);
  // YOUR CODE GOES HERE

  let weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  $("#icon").attr("src", weatherIcon)
  $(".card-title").html(data.name)
  $("#degreesTemp").html("It is " + Math.round(data.main.temp) + " degrees outside.")

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}


let getWeather = function(info) {
  console.log(info)
  window.weatherInfo = info
  let latitude = info.coords.latitude;
  let longitude = info.coords.longitude;
  let apiKey = '4a537f4ad60d98fe174dccbb2c50ae5a'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let findMe = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
}

jQuery("#get_forecast").on("click", findMe)


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
