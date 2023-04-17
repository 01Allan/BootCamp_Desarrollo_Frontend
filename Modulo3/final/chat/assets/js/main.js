var mostrarChat = document.getElementById("mostrarChat");
var mensajes = document.getElementById("mensajes");
var personas = document.getElementById("personas");
var cambiarFondo = document.querySelectorAll("#personaStyle");

mostrarChat.addEventListener("click", () => {
    personas.style.display = "block";
    mensajes.style.display = "block";
});

cambiarFondo.forEach(person => {
    person.addEventListener("click", () => {
        person.classList.add("bg-black");
        person.classList.add("bg-opacity-10");
    })
})