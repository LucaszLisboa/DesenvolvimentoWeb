const containerEl = document.querySelector('#container');
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Camb%C3%A9?unitGroup=metric&key=9HB9JPSKTQK6X94VVFHAN9NHY&contentType=json"

fetch(url ,{
    method : "GET",
    headers: { 
        "Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => {
        return response.json(); //parse the result as JSON 
    })
    .then(response => {
        processWeatherData(response);
    })
    .catch(err => {
        console.log('Erro de solicitação', err);
        });

    
function processWeatherData(response) {
    var location=response.resolvedAddress;
    var days=response.days;

    console.log("Location: "+location);
    
    let local = document.createElement('div');
    local.classList.add('local');
    local.innerHTML = "Location: "+location;

    let weatherData = document.createElement('div');
    weatherData.classList.add('weatherData');


    for (var i = 0; i < days.length; i++) {
        let data = document.createElement("div");
        data.classList.add('data');
        data.innerHTML = days[i].datetime+": MÍNIMA = "+days[i].tempmax+", MÁXIMA = "+days[i].tempmin +", HUMIDADE = "+days[i].humidity+", VENTO = "+days[i].windspeed+", DIREÇÃO = "+days[i].winddir
        ;
        weatherData.appendChild(data);
    }
    
    containerEl.appendChild(local);
    containerEl.appendChild(weatherData);


}