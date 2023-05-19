var seleccion= document.getElementById("opciones");
var textoDescriptor = document.getElementById("textoDescriptor");
var tarjetaImagen = document.getElementById("overlay"); //tarjetaImagen
var imagenes = document.getElementById("imagenes");
var textoImagen = document.getElementById("textoImagen");
var mostrarOver = document.getElementById("prueba");

function imagen2(source) { 
    imagenes.setAttribute("src", source) 
}

if(seleccion.value == "trekking") {
    imagen2("./assets/img/senderismo.jpg")
    textoDescriptor.innerHTML = 'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas. generalmente de alta montaña y poco frecuentadas por el turismo convencional.'
    textoImagen.innerHTML = `<h2>TREKKING</h2> <p><i class="bi bi-geo-alt"></i> Volcán Villarrica</p>`  
}

seleccion.addEventListener('change', (event) => {
    let opciones = event.target.value

    switch (opciones) {
        case 'trekking':
            imagen2("./assets/img/senderismo.jpg")
            textoDescriptor.innerHTML = 'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas. generalmente de alta montaña y poco frecuentadas por el turismo convencional.'
            textoImagen.innerHTML = `<h2>TREKKING</h2> <p><i class="bi bi-geo-alt"></i> Volcán Villarrica</p>`  
            break;
                
        case 'natacion':
            imagen2("./assets/img/natacion.jpg")
            textoDescriptor.innerHTML = 'Deporte o ejercicio que consiste en nadar; en las\n pruebas de natación se compite en velocidad, en\n cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.'
            textoImagen.innerHTML = `<h2>NATACIÓN</h2> <p><i class="bi bi-geo-alt"></i> Lago Cochrane</p>`
            break;
        
        case 'ferry':
            imagen2("./assets/img/ferry.jpg")
            textoDescriptor.innerHTML = 'Embarcación que realiza alternativamente el\n mismo recorrido entre dos puntos;\n especialmente la de grandes dimensiones destinada al trasporte de cargas pesadas o pasajeros.'
            textoImagen.innerHTML = `<h2>FERRY</h2> <p><i class="bi bi-geo-alt"></i> Lago Llanquihue</p>`  
            break;
                    
        default:
            break;
    }

});


tarjetaImagen.addEventListener("mouseenter", () => {
    imagenes.setAttribute("class", "card-img opacity-25")
    textoImagen.setAttribute("class", "card-text text-center text-light position-absolute top-50 start-50 translate-middle")
});

tarjetaImagen.addEventListener("mouseleave", () => {
    imagenes.setAttribute("class", "card-img")
    textoImagen.setAttribute("class", "card-text d-none text-light position-absolute top-50 start-50 translate-middle")
});


