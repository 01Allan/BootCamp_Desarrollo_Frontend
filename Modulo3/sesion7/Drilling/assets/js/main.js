// funciones

function cambiarColor(color) {
    let boton = document.getElementById('astronauta');
    boton.setAttribute("fill", color);
    
}

function colorTrazo(color) {
    let botontr = document.getElementById("astronauta");
    botontr.setAttribute("stroke", color);
}

function cambiarPx(n) {
    let botonpx = document.getElementById("astronauta");
    botonpx.setAttribute("stroke-width", n);
    console.log(typeof(n));
}