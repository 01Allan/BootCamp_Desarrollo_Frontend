const productos = [
    { trago: "Martíni", precio: 2550, checked: false },
    { trago: "Cappuccino", precio: 1370, checked: false },
    { trago: "Latte", precio: 1350, checked: false },
    { trago: "Mojito", precio: 2290, checked: false },
    { trago: "Insalata de riso", precio: 6750, checked: false },
    { trago: "Insalata ai cipollotti", precio: 5990, checked: false },
    { trago: "Insalata caprese", precio: 8250, checked: false }
  ];


function agregarCuenta(elemento) {
    // se crea un elemento div para mostrar el producto y su precio

    let elementoCuenta = document.createElement('table');
    elementoCuenta.innerHTML = `<td>${elemento.trago}</td> <td>$${elemento.precio}</td>`;

    // se agrega el elemento al carrito 
    let cuentaAdds = document.getElementById('cuentaAdds');
    cuentaAdds.appendChild(elementoCuenta);

    // calcular el total de la cuenta
    let total = document.getElementById('total-price');
    // con .filter se filtran lo que tienen checked = true y con reduce se suman todos esos precios que han sido seleccionados.
    let precioTotal = productos.filter(p => p.checked).reduce((total, p) => total + p.precio, 0);
    total.textContent = `$${precioTotal}`;

}

// Eliminar elementos

function eliminarElementos(elementos) {
    let items = document.querySelectorAll('#cuentaAdds > table');

    // se itera por los elementos de la cuenta y se elimina el que se unchecked
    items.forEach(item =>{
        if (item.textContent.includes(elementos.trago)) {
            item.remove();
        }
    })

    // luego se recalcula el total, ya con el elemento eliminado
    const total = document.getElementById('total-price');
    const precioTotal = productos.filter(p => p.checked).reduce((total, p) => total + p.precio, 0);
    total.textContent = `$${precioTotal}`;

}

// Mostrar los productos que se han seleccionado 

function mostrarCuenta() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((check, i) => {
        check.addEventListener('change', function () {
            const producto = productos[i];
            producto.checked = this.checked;

            if (this.checked) {
                agregarCuenta(producto);
            } else {
                eliminarElementos(producto);
            }
        })
    });

}

// se activa la bestia *w*
mostrarCuenta();