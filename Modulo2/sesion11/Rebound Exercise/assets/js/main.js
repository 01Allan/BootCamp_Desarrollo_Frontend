// API de chuck norris

$(document).ready(function () {
    
    var chiste = "";
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then((response) => response.json())
    .then((datos) => {
        chiste = datos.joke
    });

    $("#botonxd").click(function () {
        $("p").text(chiste);
    });
    
});