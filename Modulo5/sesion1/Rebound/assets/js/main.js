let boton = document.getElementById("boton");

// funciones 
const calcularInteres = (cuota, interes) => {
    return cuota * (interes / 100);
}

const valorCuota = (valor, interes, n) => {
    return (valor + interes)/n;
}

const darFormato = (valor) => {
    return valor.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
}

boton.addEventListener('click', () => {

    let pagar = document.getElementById("pagar");
    let interes = document.getElementById("interes");
    let numCuotas = document.getElementById("cuotas");
    const respuesta = document.querySelector(".respuesta");

    let calInteres = calcularInteres(parseFloat(pagar.value), parseFloat(interes.value));

    let valorCuotas = valorCuota(parseFloat(pagar.value), calInteres, parseInt(numCuotas.value));
    let formatear = darFormato(valorCuotas);
    const resp = document.createElement('h2');

    resp.textContent = `!NO TE PREOCUPES! PUEDES PAGARLO EN ${parseInt(numCuotas.value)} CUOTAS DE $${formatear}`;
    respuesta.appendChild(resp);
});