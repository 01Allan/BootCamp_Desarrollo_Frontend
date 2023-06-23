var check = document.getElementById("check");
var correo = document.getElementById("correo");
var boton = document.getElementById("boton");

boton.addEventListener("click", verificacion);

function verificacion() {
    let mensaje = (check.checked && correo.value.length > 0) ? alert("¡Felicitaciones! Pronto escucharás de nosotros") : alert("Parece que nos falta algo...")
}