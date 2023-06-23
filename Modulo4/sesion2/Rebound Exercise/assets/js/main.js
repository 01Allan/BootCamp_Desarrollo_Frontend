// otras
var valores = document.querySelectorAll("#calc");
var clear = document.getElementById("clear");
var igual = document.getElementById("igual");
var escribir = document.getElementById("escribir");

// calculadora
clear.addEventListener("click", () => {
    escribir.innerText = "";
});

valores.forEach((valor) => {
    valor.addEventListener("click", () => {
        let capturado = "";
        capturado += valor.textContent;
        escribir.innerText += capturado;
    });
});

igual.addEventListener("click", () => {
    escribir.innerText = eval(escribir.textContent);
});