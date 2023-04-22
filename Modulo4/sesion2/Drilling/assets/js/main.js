// funciones

function fahrenheit(variable) {
    fahr = (9/5)*variable + 32;
    return fahr;
}

function celcius(variable) {
    centigrados = (5/9)*(variable - 32);
    return centigrados;
}

// valores del dom
var celsiusOn = document.getElementById("oncs");
var fahrenheitOn = document.getElementById("onfh");
var valores = document.querySelectorAll("#valor");
var escala = document.getElementById("escala");

// 

celsiusOn.addEventListener("click", () => {

    // Esta parte convierte de celcius a fahrenheit

    celsiusOn.style.display = "none";
    fahrenheitOn.style.display = "block";
    escala.innerText = "F";

    valores.forEach((valor) => {
        valor.innerText = fahrenheit(valor.textContent).toFixed(1); 
    });
});

fahrenheitOn.addEventListener("click", () => {
    // Esta parte devuelve a sus valores originales
    celsiusOn.style.display = "block";
    fahrenheitOn.style.display = "none";

    escala.innerText = "C";

    valores.forEach((valor) => {
        valor.innerText = celcius(valor.textContent).toFixed(0);
    });
});

