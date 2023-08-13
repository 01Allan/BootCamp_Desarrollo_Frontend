// ejemplo del uso de proxy 

// (function () {
//     let names = ["allan", "layla", "tyler"];
//     console.log("Alguien me ha invocado xdd");
//     let proxy = new Proxy(names, {

//         // tomar valores usar get
//         get: function (target, property) {
//             return property === 'length' ? target.length : target[property]?.toUpperCase();
//         },

//         // agregar nuevos elementos se usa set
//         set: (target, property, value) => {
//             if (typeof(value) === 'string') {
//                 target[property] = value;
//             }
//         }
//     });

//     proxy[5] = "katia";
//     for (let i = 0; i < proxy.length; i++) {
//         console.log(proxy[i]);
//     }

// })();

// Ejemplo 2 Proxies es6

var empleado = {
    nombre: '',
    apellido: '',
    password: '12345'
};

function valida(prop, value) {
    const keys = Object.keys(empleado);
    const propIvalida = keys.indexOf(prop) === -1;

    if (propIvalida) {
        console.error("Propiedad invalida");
        return false;
    }

    if ((prop === 'apellido' || prop === 'nombre') && /\d/.test(value)) {
        console.error(`El valor de la propiedad ${prop} es invalido`);
        return false;
    }

    return true;
}

var handler = {
    set: (obj, prop, value) => {
        if (valida(prop, value)) {
            obj[prop] = value;
        }
    },

    get: (obj, prop) => {
        if (prop === 'password') {
            return '*'.repeat(obj[prop].length) 
        }

        if (prop === 'nombreCompleto') {
            return `${obj['nombre']} ${obj['apellido']}`;
        }

        return obj[prop];
    }

};

let pEmpleado = new Proxy(empleado, handler);

pEmpleado.nombre = 'Alejandro';
pEmpleado.apellido = 'Amador';
pEmpleado.id = 324234;
console.log("El objeto empleado: ", empleado);
console.log(pEmpleado.password);
console.log(pEmpleado.nombre);
console.log(pEmpleado.nombreCompleto);