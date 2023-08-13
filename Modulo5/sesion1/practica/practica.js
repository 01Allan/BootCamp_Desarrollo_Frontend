{
    var y = 5;
    var x = 3;
}

const multiplica = (x, y) => x * y;
const multiplica2 = (x, y) => {return x * y};

function miFuncion() {
    console.log(this);
}

const miObjeto = {
    method() {
        console.log(this);
    }
}

const miObjeto2 = {
    name: this,
    metodo: () => console.log(this),
    metodo2() {
        console.log(this);
    }


}

new miFuncion();
console.log(miObjeto2.name);
miObjeto2.metodo();
miObjeto2.metodo2();
console.log(multiplica(x, y));
console.log(multiplica2(2, 40));
miObjeto.method();
