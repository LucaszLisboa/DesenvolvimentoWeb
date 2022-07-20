const url = "https://api.openweathermap.org/data/2.5/weather?q=Camb%C3%A9&lang=pt_br&units=metric&APPID=ee4181be469e95dd23835ad46d185cd5"

fetch(url ,{
    method : "GET",
    headers: { 
        "Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .catch(err => err.json)
    
