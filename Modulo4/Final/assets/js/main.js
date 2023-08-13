// elementos de la primera columna
var presupuesto = document.getElementById("presupuesto");
var btnCalcular = document.getElementById("calcular");
var nameGasto = document.getElementById("name--gasto");
var valorGasto = document.getElementById("valorGasto");
var btnAdd = document.getElementById("addGasto");

//  Elementos de la segunda columna
var totalPresupuesto = document.getElementById("totalPresupuesto");
var acumulado = document.getElementById("acumulado");
var restante = document.getElementById("restante");
var mostrarGastos = document.getElementById("mostrar--gastos");
var borrarIcon = document.getElementsByClassName('borrarIcon');

// otras variables
var arrNameGasto = [];
var arrValGasto = [];

// constructor
function Presupuesto(name, valor) {
    this.name = name;
    this.valor = valor;
}

// funcion de sumar Array
function sumar(obj) {
    return obj.valor.reduce((a, b) => a + b, 0);
}

btnCalcular.addEventListener("click", () => {
    totalPresupuesto.innerText = parseInt(presupuesto.value);
    restante.innerText = parseInt(presupuesto.value);
});


btnAdd.addEventListener("click", () => {

    if (parseInt(valorGasto.value) > restante.textContent) {
        alert("el gasto vale más que el saldo disponible, no lo compre. xd")
    }

    if (parseInt(acumulado.value) > restante.textContent) {
        alert("Ya no puede tener más gastos, elimine uno.")
    }

    arrNameGasto.push(nameGasto.value);
    arrValGasto.push(parseInt(valorGasto.value));
    const objPresupuesto = new Presupuesto(arrNameGasto, arrValGasto);

    const nuevogasto = document.createElement('div');
    nuevogasto.classList.add('d-flex');

    for (let i = 0; i < objPresupuesto.name.length; i++) {

        nuevogasto.innerHTML = `

            <h6 class="me-5">${objPresupuesto.name[i]}</h6>
            <h6 class="mx-5">$${objPresupuesto.valor[i]}</h6>
            <i class="borrarIcon bi bi-trash-fill mx-5 text-primary" id="borrar"></i>
        `
        mostrarGastos.appendChild(nuevogasto);
    }

    acumulado.textContent = parseInt(sumar(objPresupuesto));
    restante.textContent = parseInt(presupuesto.value) - parseInt(sumar(objPresupuesto))

    if (restante.textContent < 0) {
        alert("Ya está en banca rota xdd.")
    }

    nameGasto.value = "";
    valorGasto.value = "";

    

});

// para borrar un elemento se implementa la siguiente funcion


const borrar = (event) => {
    let icon = event.target;
    let item = icon.parentNode;
    let index = Array.from(mostrarGastos.children).indexOf(item);

    arrNameGasto.splice(index, 1);
    arrValGasto.splice(index, 1);
    mostrarGastos.removeChild(item);

    // se recalcula todo de nuevo
    acumulado.textContent = sumar(new Presupuesto(arrNameGasto, arrValGasto));
    restante.textContent = parseInt(presupuesto.value) - sumar(new Presupuesto(arrNameGasto, arrValGasto));

}

mostrarGastos.addEventListener("click", (event) => {
    if (event.target.classList.contains("borrarIcon")) {
        borrar(event);
    }
})