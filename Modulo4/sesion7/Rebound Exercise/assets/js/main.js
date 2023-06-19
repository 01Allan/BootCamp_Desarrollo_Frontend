// variables 
var texto = document.getElementById('texto').textContent;
var colores = document.querySelectorAll(".colores");
var nums = document.querySelectorAll(".cantidad");
var words = document.querySelectorAll(".palabras");
const arrColors = [];
const arrNums = [];

// llenando los arrays

colores.forEach((color) => {
    arrColors.push(color.textContent);
});

// manipulando el texto

// Eliminando los signos de puntuacion y convirtiendo el texto en minuscula
var minuscula = texto.replace(/[^\w\s]/g, '').toLowerCase();

// diviendo el texto en palabras
var divPalabras = minuscula.split(/\s+/);
var arrDivp = Object.values(divPalabras);

// creando una funcion para determinar las palabras repetidas.

function repetidasWords(arr) {
    
    // sirve para almacenar
    var objAlm = {}

    for (let k = 0; k < arr.length; k++) {
        let palabra = arr[k];

        // se agrega 1 si no existe
        if (!objAlm[palabra]) {
            objAlm[palabra] = 1;
        } else {
            objAlm[palabra]++;
        }
    }

    var frecMax = 0;
    for (const palabra in objAlm) {
        var frecuencia = objAlm[palabra];
        if (frecuencia > frecMax) {
            frecMax = frecuencia;
        }
    }

    var masRepetidas = [];
    for (const palabra in objAlm) {
        if (frecuencia === frecMax) {
            masRepetidas.push(palabra);
        }
    }

    return masRepetidas + " (" + frecMax + " veces)";
}

console.log(repetidasWords(divPalabras));
