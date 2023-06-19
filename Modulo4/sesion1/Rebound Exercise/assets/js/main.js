// generando el alert
let cardText = document.getElementById("cardtext");
let cardFoot = document.getElementById("cardfoot");

cardText.innerHTML = "Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embargue. Manténgase atento a los avisos mediante esta plataforma.";
cardFoot.innerHTML = "<hr> <strong id='cerrar'>Close</strong>";

let cerrarCard = document.getElementById("cerrar");

cerrarCard.addEventListener("click", () => {
    let alert = document.getElementById("alert").style.display = "none";
});

// manejando los horarios y las fechas

var time = new Date();
var horario = document.getElementById("hora");
var fecha = document.getElementById("fechaBody");

horario.innerHTML = time.toLocaleTimeString();
fecha.innerHTML = time.toLocaleDateString();

// generar aleatoreamente elementos 

let n = [1234, 1625, 1344, 2034, 1033, 3214];
let term = [1, 2, 3, 4, 5, 6, 7, 8];
let nvuelos = document.getElementById("nvuelo");
let terminal = document.getElementById("terminal");
let randN = Math.floor(Math.random()*n.length);
let randT = Math.floor(Math.random()*term.length);
let rn = n[randN];
let rt = term[randT];

nvuelos.innerHTML = `Número de vuelo: ${rn}`;
terminal.innerHTML = `Terminal: ${rt}`;
