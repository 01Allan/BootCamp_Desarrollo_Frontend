let simbolo1 = Symbol('simbolo2');
let simbolo2 = Symbol('simbolo2');
// aunque sean identicos, nunca serán iguales poque cada uno es unico. 
console.log(simbolo1===simbolo2);

// los Symbols como identificadores de propiedades de un objeto.

let usuario = {
    id: 234,
    nombre: 'Max',
    Ciudad: 'Osorno',
    edad: 54,
}

// nos permite asignarle un id unico
const idSimbolo = Symbol('id');
usuario[idSimbolo] = 12345678;
console.log(usuario);
console.log(Object.getOwnPropertyNames(usuario));
console.log(Object.getOwnPropertySymbols(usuario));

// analizar el uso de symbols en otro contexto de aplicación: la representación de conceptos.

// funcion que representa al semaforo

const VERDE = Symbol('verde');
const AMARILLO = Symbol('amarillo');
const ROJO = Symbol('rojo');
const manzana = Symbol('rojo');

function semaforo(color) {
    switch (color) {
        case ROJO:
            return 'Frena el auto';
            break;

        case AMARILLO:
            return 'Reduce la velocidad';
            break;

        case VERDE: 
            return 'Adelante';
            break;

        default:
            console.log('Esto no es un color. xdd');
            break;
    }
}

console.log(semaforo(manzana));
console.log(semaforo(ROJO));


// Proxy y el objeto REFLECT

var manejador = {
    get(target, key) {
        return key in target ? target[key] : 'no existe en el objeto';
    }
}

var p = new Proxy({}, manejador);
p.a = 1;
p.b = 'hola';

console.log(p.a, p.b);
console.log('c' in p, p.c);

let validar = {
    set: function (objeto, propiedad, valor) {
        // solo validara la propiedad edad

        if (propiedad === 'edad') {
            // se validara que es un numero
            if (typeof valor !== 'number' || Number.isNaN(valor)) {
                console.log('Edad debe ser un numero');
            }

            // se validara que el num sea positivo

            if (valor<0) {
                console.log("Edad debe ser un numero positivo");
            }
        }

        // si se cumple el criterio se asigna el valor
        objeto[propiedad] = valor;
        return true;
    }
}

let persona = new Proxy({}, validar);

// asignando valores a la propiedad edad:
persona.edad = 'joven';
persona.edad = -34;
persona.edad = 77;

console.log(persona.edad);

// objeto Reflect

const perrito = {
    nombre: 'Chippy',
    color: 'cafe',
    collar: function () {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

console.log(perrito);

// usamos has para ver si tiene las propiedades dadas
console.log(Reflect.has(perrito, 'color'));
console.log(Reflect.has(perrito, 'edad'));

// utilizar el método ownKeys() para obtener las llaves de propiedad de nuestro objeto:

console.log(Reflect.ownKeys(perrito));

// set nos permite asignar una nueva propiedad a nuestro objeto

console.log(Reflect.set(perrito, 'raza', 'pastor aleman'));
console.log(perrito);
