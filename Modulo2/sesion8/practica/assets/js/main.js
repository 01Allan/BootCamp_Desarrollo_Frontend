// var numero = parseInt(prompt("Ingrese un numero: "));

// console.log("ciclo for");
// for (let inicio = 0; inicio <= numero; inicio++) {
//     console.log(inicio);   
// }

// console.log("ciclo while");
// while (numero < 10) {
//     console.log(numero);
//     numero = numero + 1;
// }

// console.log("Ciclo do while");

// do{
//     console.log(numero);
//     numero += 1;
// }while(numero < 10);


// Control de excepciones con try catch

var numero = 7;

try {
    if(numero != 7) throw new Error("El numero no es 7");
} catch (error) {
    console.log(error.message);
}

console.log("Continua la ejecución del programa.");

// Tipos de excepciones:
// Reference error, 

function holas() {

    const mensaje = "holaaas xd";
    try {
        // procesarMen();
        console.log("bien :D");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("saliendo del try y catch");
    }

    
    return mensaje;
}

console.log(holas());

try {

    console.log("start of try runs");
    console.log("End of try runs -- never reached");

} catch (err) {

    console.log("Error has ocurred: ", err.stack);

}finally {
    console.log("Always run");
}

console.log("... Then the execution continues\n");

let json = '{"age":30}';

try {
    
    let user = JSON.parse(json);
    if(!user.name) {
        throw new SyntaxError("Incomplete data:  no name")
    }
    console.log(user.name);

} catch (e) {
    console.log("JSON error: " + e.message);
}

// arrays

var paises = ["chile", "Argentina", "Paraguay"];
console.log(paises);
console.log(paises.length);
console.log(paises[1]);

for (let index = 0; index < paises.length; index++) {
    const element = paises[index];
    console.log(element);
    
}

paises.push("Brasil");
console.log(paises);
paises.unshift("Honduras")
console.log(paises);
paises.pop(); // elimina el ultimo elemento de un array;
console.log(paises);
paises.shift(); // elimina el primer elemento de un array.
console.log(paises);

// programacion orientada a objetos con js

// primera forma de definir objetos.
var auto = new Object();
auto.color = "rojo";
auto.numeroPuertas = 4;
auto.marca = "Samsung";

auto.acelerar = function () {
    console.log("El auto aceleró");
}

auto.frenar = function () {
    console.log("El auto frenó");
}

console.log("\nAuto:\n", auto);

auto.frenar();
console.log(auto.marca);

// segunda forma de definir objetos.
var auto2 = {
    color: "rojo",
    numeroPuertas: 4,
    marca: 'Toyota',
    acelerar: function () {
        console.log("El auto2 aceleró.");
    },
    frenar: function () {
        console.log("El auto2 frenó.");
    },
}

console.log("\nAuto 2:\n", auto2);
auto2.acelerar();
console.log(auto2.marca);


// funcion constructora 
// this se utiliza para asignar valores a las propiedades del objeto en funcion de los valores pasados a la propia función. 

function Auto(color, numeroPuertas, marca) {
    this.color = color;
    this.numeroPuertas = numeroPuertas;
    this.marca = marca;
}

// objetos de tipo Auto

var miAuto1 = new Auto("Rojo", 4, "Nissan");
var miAuto2 = new Auto("Negro", 2, "Suzuki");

console.log(miAuto1);

// objetos como propiedades de objetos

function carro(color, numeroPuertas, marca, conductor) {
    this.color = color;
    this.numeroPuertas = numeroPuertas;
    this.marca = marca;
    this.conductor = conductor;
}

function Conductor(nombre, tipoLicencia, edad) {
    this.nombre = nombre;
    this.tipoLicencia = tipoLicencia;
    this.edad = edad;
}

var conductor1 = new Conductor("Axel Rose", "B", 27);
var miCarro1 = new carro("Verde", 4, "Nissan", conductor1);
var miCarro2 = new carro("Rojo", 2, "Suzuki", conductor1);
console.log(miCarro1);

// Agregando atributos

miCarro1.patente = "abcd 11";
console.log(miCarro1);
console.log(miCarro2);

// for of

for (const i of paises) {
    console.log(i);
}
