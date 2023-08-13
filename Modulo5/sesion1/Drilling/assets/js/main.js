const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const seleccionar = document.getElementById('seleccionar');
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('boton');

boton.addEventListener("click", () => {
    alert(`
        DE: ${nombre.value} ${apellido.value}
        ~ ASUNTO: ${seleccionar.options[seleccionar.selectedIndex].text}
        ~ MENSAJE:
        ~ ${mensaje.value}
    `)
})

