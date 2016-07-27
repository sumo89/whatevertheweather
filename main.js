/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data for London
- Print the temperature in console.
- Possible next steps
- 1: Display the temperature in the UI rather than the console
- 2: Display an icon or image depending on the current weather
- 3: add a form prompting user for the city.
- 4: add a toggle for switching between farenheit and celcius

*/
var app = {};
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '0230bf02702536cff53832eef68ab815';

var userLocation = {};

app.getData = function(){
	$.ajax({
		url: weatherUrl + userLocation.place + "&appid=" + apiKey,
		success: function(response){
			var returnWeather = response.weather[0].main;
			console.log(returnWeather);
		}
	});
};

app.handleSubmit = function(event){
	event.preventDefault();
	userLocation.place = $('#location').val();
	$('#location').focus().val('');
	$('#userLocation').html(userLocation);
	app.getData();
};

app.init = function(){
	$('form').on('submit', app.handleSubmit);
};

$(document).ready(app.init);



// var app = {};
// var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
// var apiKey = '0230bf02702536cff53832eef68ab815';

// app.init = function(){
// };

// app.getData = function(){
// 	$.ajax({
// 	url: weatherUrl + 'london' + '&appid=' + apiKey,
// 		success: function(response){

// 		console.log('response ==>', response);
// 		console.log('response list==>', response.list);

// 		var mainWeatherResults = [];
// 		for (var i = 0; i < response.list.length; i ++){
// 		mainWeatherResults.push(response.list[i].dt_txt, response.list[i].main.temp, response.list[i].main.humidity, response.list[i].weather[0].description, response.list[i].clouds.all, response.list[i].rain);
// 		// $('#listWeather').html(mainWeatherResults);
// 		};
// 		console.log('results ==>', mainWeatherResults)

// 		var weatherMain = [];
// 		for (var i = 0; i < response.list.length; i ++){
// 		weatherMain.push(response.list[i].main);
// 		};
// 		console.log("just main ==>", weatherMain);

// 		var weatherTemp = [];
// 		for (var i = 0; i < weatherMain.length; i ++){
// 		weatherTemp.push(weatherMain[i].temp);

// 		};
// 		console.log("weather temp ==>", weatherTemp);

// 		$.each(response.list, function(index, value) {
//     		$('#listTemp').html(dt_txt)
// 		});

// 		},
// 	});
// };


// $(document).ready(app.getData);


