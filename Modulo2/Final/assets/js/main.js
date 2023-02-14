// API de studio Ghibli

$(document).ready(function () {
    
    var chiste = "";
    fetch('https://studio-ghibli-films-api.herokuapp.com/Arrietty')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
});