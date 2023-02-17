// API de studio Ghibli

var card = document.getElementById('tarjeta');

fetch('https://studio-ghibli-films-api.herokuapp.com/api/My Neighbor Totoro')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
    });