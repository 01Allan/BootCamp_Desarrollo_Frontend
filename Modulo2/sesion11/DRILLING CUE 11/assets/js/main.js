// API de studio Ghibli

// funciones
function information(data) {
    let card_info = document.getElementById("tarjeta");

    card_info.innerHTML = 
    `
        <div class="tarjeta__info card text-center">
            <img src="${data.poster}" class="tarjeta__img card-img-top" alt="...">
            <div class="tarjeta__texto card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">
                    ${data.hepburn}
                </p>

                <p class="card-text">
                    <strong>Año de estreno: </strong> ${data.release}
                </p>

                <p class="card-text">
                    <strong>Director: </strong> ${data.director}
                </p>

                <h6>sinopsis:</h6>
                <p class="card-text">
                    ${data.synopsis}
                </p>


            </div>
        </div>


    `

}


fetch('https://studio-ghibli-films-api.herokuapp.com/api/Castle in the sky')
    .then(response => response.json())
    .then(datos => {
        information(datos);
    });


