var mostrarInfo = document.getElementById("overlay");
var imagen = document.getElementById("imagen");
var mostrarOver = document.getElementById("prueba");
var informacion = document.getElementById("informacion");
var opciones = document.getElementById("opciones");

mostrarOver.addEventListener("mouseover", () => {
    mostrarInfo.classList.remove("d-none");
});

mostrarOver.addEventListener("mouseout", () => {
    mostrarInfo.classList.add("d-none");
});

var defaulImg = `
    <div class="imagen--style card text-bg-dark" id="prueba">
        <img src="assets/img/senderismo.jpg" class="card-img" alt="...">

        <div class="imagen--overlay card-img-overlay bg-dark bg-opacity-50 d-none" id="overlay">
            <h5 class="card-title">TREKKING</h5>
            <p class="card-text">
                <i class="bi bi-geo-alt"></i>
                Volcán Villarrica
            </p>
        </div>
    </div>
`

var defaulText = `
    <div class="informacion--style card  mb-5" >
        <div class="card-body">
            <p class="card-text">
                *Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas. generalmente de alta montaña y poco frecuentadas por el turismo convencional.*
                <br>
                <a href="#">Conocer más</a>
            </p>
        </div>

        <div class="card-footer bg-transparent border-white">
            <button type="button" class="btn btn-light">Agendar actividad</button>
        </div>
    </div>
`

var natacionImg = `
    <div class="imagen--style card text-bg-dark" id="prueba">
        <img src="assets/img/natacion.jpg" class="card-img" alt="...">

        <div class="imagen--overlay card-img-overlay bg-dark bg-opacity-50 d-none" id="overlay">
            <h5 class="card-title">NATACIÓN</h5>
            <p class="card-text">
                <i class="bi bi-geo-alt"></i>
                Lago Cochrane
            </p>
        </div>
    </div>
`;

var natacionText = `
    <div class="informacion--style card  mb-5" >
        <div class="card-body">
            <p class="card-text">
                *Deporte  o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos;braza, crol, espalda y mariposa.*
                <br>
                <a href="#">Conocer más</a>
            </p>
        </div>

        <div class="card-footer bg-transparent border-white">
            <button type="button" class="btn btn-light">Agendar actividad</button>
        </div>
    </div>

`;

var ferryImg = `
    <div class="imagen--style card text-bg-dark" id="prueba">
        <img src="assets/img/ferry.jpg" class="card-img" alt="...">

        <div class="imagen--overlay card-img-overlay bg-dark bg-opacity-50 d-none" id="overlay">
            <h5 class="card-title">FERRY</h5>
            <p class="card-text">
                <i class="bi bi-geo-alt"></i>
                    Lago LLanquihue
            </p>
        </div>
    </div>
`;

var ferryText = `
    <div class="informacion--style card  mb-5" >
        <div class="card-body">
            <p class="card-text">
                *Embarcación que realiza alternativamente el mismo  recorrido entre dos puntos: espcialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.*
                <br>
                <a href="#">Conocer más</a>
            </p>
        </div>

        <div class="card-footer bg-transparent border-white">
            <button type="button" class="btn btn-light">Agendar actividad</button>
        </div>
    </div>
`;

opciones.addEventListener("change", () => {
    console.log(opciones.value);
    switch (opciones.value) {
        case 'uno':
            imagen.innerHTML = defaulImg;
            informacion.innerHTML = defaulText;
            break;
                
        case 'dos':
            imagen.innerHTML = natacionImg;
            informacion.innerHTML = natacionText;
            break;
        
        case 'tres':
            imagen.innerHTML = ferryImg;
            informacion.innerHTML = ferryText;
            break;
                    
        default:
            break;
    }

});
