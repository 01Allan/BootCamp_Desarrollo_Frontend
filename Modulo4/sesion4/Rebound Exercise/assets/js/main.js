// Variables
var selectOrigin = document.getElementById('origin');
var selectDestino = document.getElementById('destino');
var inputDateIda = document.getElementById('fechaIda');
var inputDateDes = document.getElementById('fechaDes');
var dateIda = document.getElementById('dateIda');
var infoIda = document.getElementById('infoIda');
var escala = document.getElementById('escala');
var dateDes = document.getElementById('dateDes');
var infoDes = document.getElementById('infoDes');


// lógica

selectOrigin.addEventListener("change", valoresActuales);
selectDestino.addEventListener("change", valoresActuales);
inputDateIda.addEventListener("change", valoresActuales);
inputDateDes.addEventListener("change", valoresActuales);

function valoresActuales() {
    let lugarOrigen = selectOrigin.value;
    let lugarDestino = selectDestino.value;
    let fechaOrigen = inputDateIda.value;
    let fechaDes = inputDateDes.value;

    if (lugarOrigen == 'Chicago' && lugarDestino == 'Venecia') {
        dateIda.innerText = fechaOrigen;
        infoIda.innerText = lugarOrigen;
        escala.innerText = "¡Ojo! Tu vuelo tiene una escala.";
        dateDes.innerText = fechaDes;
        infoDes.innerText = lugarDestino;

    } else if (lugarOrigen == 'Boston' && lugarDestino == 'Paris') {
        dateIda.innerText = fechaOrigen;
        infoIda.innerText = lugarOrigen;
        escala.innerText = "¡Ojo! Tu vuelo tiene una escala.";
        dateDes.innerText = fechaDes;
        infoDes.innerText = lugarDestino;
    } else {
        dateIda.innerText = fechaOrigen;
        infoIda.innerText = lugarOrigen;
        escala.innerText = "¡Tu vuelo no tiene escala!";
        dateDes.innerText = fechaDes;
        infoDes.innerText = lugarDestino;
    }
}


