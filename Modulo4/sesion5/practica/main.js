// objeto 

// ejemplo 1: Creacion literal de objetos
var objeto = {
    // propiedades
    propiedad1: "string",
    propiedad2: 123,
    propiedad3: false,

    // metodos

    metodo: function () {
        alert('Hola soy un metodo xd, adiosxddd');
    }
};

console.log(objeto.propiedad1);
console.log(objeto.propiedad2);
console.log(objeto.propiedad3);
objeto.metodo;


// Creacion de objetos

var persona = new Object();
persona.nombre = "Milton";
persona.colorDeOjos = 'cafe';
persona.edad = 22;

var persona1 = Object.assign({}, persona);
persona1.colorFav = 'verde';

console.log(persona);
console.log(persona1);

// otra forma para crear objetos

var obj = Object.create({});
obj.nombre = 'Alexandraa';

var obj2 = Object.create(obj);
obj2.enamorado = 'Allan';

console.log(obj);
console.log(obj2);

// Creando objetos con constructores 

function Auto(marca, modelo, year, combustible) {
    this.make = marca;
    this.make = modelo;
    this.make = year;
    this.make = combustible;

    this.encender = function () {
        console.log(`${marca} encendido.`);
    }
}

var subaru = new Auto('subaru', 'WRX', 2099, 'Diesel');
var toyota = new Auto(toyota, 'Supra', 2020, 'Diesel')
console.log(subaru);
console.log(toyota);

var saludo = {
    nombre: "Juan",
    metodo: function () {
        console.log("buenos dias" + this.nombre);
    }    
};

saludo.metodo;

