// API de Digimon

// variables globlales



//-------- funciones --------//

function mayusculaLetra(word) {
    // El objetivo de esta funcion es por si el usuario ingresa una palabra 
    // en mayuscula o minuscula y se pueda convertir al formato del texto de la API

    const letra = word.toLowerCase();
    return letra.charAt(0).toUpperCase() + letra.slice(1);
}

function information(data) {

    let menuDesplegable = document.getElementById("menu");

    for (const k of data) {
        let digiName = k.name;

        menuDesplegable.innerHTML += 
        `
            <option><a class="desplegar__item" href="#" id="dnombre">${k.name}</a></option>
        `
    }

    var valorNombre = document.getElementById("menu");
    valorNombre.addEventListener('change',
        function () {
            var valorSelect = this.options[valorNombre.selectedIndex].text;
            let pintarImg = document.getElementById("cartaImg");
            let pintarNombre = document.getElementById("pnombre");
            let pintarNivel = document.getElementById("pnivel");

            for (const i of data) {

                if (valorSelect == i.name) {

                    pintarImg.innerHTML = 
                    `
                        <img src="${i.img}" class="carta__img texto card-img-top" alt="...">
                    `

                    pintarNombre.innerHTML = 
                    `   
                        <p class="carta1__nombre--style"><strong>Nombre:</strong></p>
                        <p class="carta1__nombre--style"><strong>${valorSelect}</strong></p>
                    `

                    pintarNivel.innerHTML = 
                    `
                        <p class="carta2__nivel--style"><strong>Nivel:</strong></p>
                        <p class="carta2__nombre--style"><strong>${i.level}</strong></p>
                    `
                } else if (valorSelect == 'Seleccionar') {

                    pintarImg.innerHTML = 
                    `
                            <img src="assets/img/symbol.jpeg" class="carta__img rounded-pill texto card-img-top" alt="...">
                    `
                    

                    pintarNombre.innerHTML = 
                    `   
                        <p class="carta1__nombre--style"><strong>Nombre:</strong></p>
                    `

                    pintarNivel.innerHTML = 
                    `
                        <p class="carta2__nivel--style"><strong>Nivel:</strong></p>
                    `

                }

            }


        }
    );

}

function barraSearch(data) {
    let botonSearch = document.getElementById("boton");
    
    botonSearch.addEventListener('click',
        function () {
            var busqueda = document.getElementById("buscar").value;
            for (const j of data) {
                let pintarImg2 = document.getElementById("cartaImg");
                let pintarNombre2 = document.getElementById("pnombre");
                let pintarNivel2 = document.getElementById("pnivel");

                if (mayusculaLetra(busqueda) == j.name) {
                    
                    pintarImg2.innerHTML = 
                    `
                        <img src="${j.img}" class="carta__img texto card-img-top" alt="...">
                    
                    `
                    pintarNombre2.innerHTML = 
                    `   
                        <p class="carta1__nombre--style"><strong>Nombre:</strong></p>
                        <p class="carta1__nombre--style"><strong>${j.name}</strong></p>
                    `

                    pintarNivel2.innerHTML = 
                    `
                        <p class="carta2__nivel--style"><strong>Nivel:</strong></p>
                        <p class="carta2__nombre--style"><strong>${j.level}</strong></p>
                    `

                }
            }

        }
    )

}

// Consumiendo la API
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        information(datos);
        barraSearch(datos);
    });