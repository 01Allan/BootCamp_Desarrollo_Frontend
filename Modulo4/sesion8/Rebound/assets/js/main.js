// VARIABLES

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var edad = document.getElementById('edad');
var fecha = document.getElementById('fecha');
var boton = document.getElementById('boton');

let reserva = {
    nombre: '',
    apellido: '',
    email: '',
    edad: 0,
    fecha: '',
};


let proxyReserva = new Proxy(reserva, {
    set: (obj, prop, value) => {
        if (prop === 'edad') {
            if (value < 18) {
                alert("Debes ser mayor de edad para crear una reservación.")
                return false;
            }
        }

        obj[prop] = value;
        return true;
        alert("Nos pondremos en contacto contigo. Hasta luego!")
    }
});

boton.addEventListener('click', () => {
    proxyReserva.nombre = nombre.value;
    proxyReserva.apellido = apellido.value;
    proxyReserva.email = email.value;
    proxyReserva.edad = parseInt(edad.value);
    proxyReserva.fecha = fecha.value;

    console.log(reserva);
});
