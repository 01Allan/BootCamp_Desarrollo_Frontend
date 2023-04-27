var getcode = document.getElementById("getcode");
var codigo = document.getElementById("codigo");
var micheck = document.getElementById("micheck");

getcode.addEventListener("click", () => {

    if (micheck.checked) {
        codigo.innerHTML = 'MNO123ST';

    } else {
        alert("Para obtener un código de descuento debe aceptar los términos y condiciones.");
    }
});