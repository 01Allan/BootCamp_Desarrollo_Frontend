// API de chuck norris

$(document).ready(function () {
    
    var chiste = "";
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
});