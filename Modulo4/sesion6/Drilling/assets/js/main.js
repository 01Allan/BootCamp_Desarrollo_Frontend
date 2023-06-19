var personas = document.getElementById("personas");
var btnAdd = document.getElementById("btnAdd");
var btnDel = document.getElementById("btnDel");
var agregar = document.getElementById("agregar");
var borrar = document.getElementById("borrar");

const arrPersonas = [];
const elemento = document.createElement('p');


function eliminarElemento(arr, alguien) {
    let index = arr.indexOf(alguien);
    return arr.splice(index, 1);
}

btnAdd.addEventListener("click", function () {
    
    arrPersonas.push(agregar.value);
    console.log(arrPersonas);

    elemento.innerHTML = `${arrPersonas}`;
    personas.appendChild(elemento);

});

btnDel.addEventListener("click", () => {
    
    eliminarElemento(arrPersonas, borrar.value);
    console.log(arrPersonas);
    elemento.innerHTML = `${arrPersonas}`;
    personas.appendChild(elemento);
});


