var mostrarInfo = document.getElementById("overlay");
var imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
    mostrarInfo.classList.remove("d-none");
});

imagen.addEventListener("mouseout", () => {
    mostrarInfo.classList.add("d-none");
});

