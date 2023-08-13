let sitio = {
    nombre: "ecamp",
};

const proxySitio = new Proxy(sitio, {
    get: (obj, prop) => {
        console.log(`GET ${prop}`);
        return Reflect.get(obj, prop);
    },

    set: (obj, prop, valor) => {
        console.log(`SET ${prop}=${valor}`);
        return Reflect.set(obj, prop, valor);

    }

});

let nombre = proxySitio.nombre;
proxySitio.nombre = "ECAMP";

console.log(nombre);
