// EVENTOS en javascript

function mostrarMensaje() {
    document.getElementById("caja2").style.display = "block";
}

function ocultarMensaje() {
    document.getElementById("caja2").style.display = "none";
}

function cambiarFondo() {
    document.getElementById("contenido").style.backgroundColor = "blue";
}

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Este es el nuevo texto"; 
}

function volver() {
    document.getElementById("contenido").style.backgroundColor = "coral";
}