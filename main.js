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
var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiKey = '0230bf02702536cff53832eef68ab815';

app.init = function(){
};

app.getData = function(){
	$.ajax({
	url: weatherUrl + 'london' + '&appid=' + apiKey,
	success: function(response){

		console.log('response====>', response)
		console.log('response CITY====>', response.city)
		console.log('response name====>', response.city.name);
		console.log('response name====>', response.list[0].dt_txt);
	},
	});
};


$(document).ready(app.getData);


