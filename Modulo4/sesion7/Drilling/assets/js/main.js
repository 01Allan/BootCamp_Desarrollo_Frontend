// solo para probar defino una funcion para extraer los elementos que contengan id del dom, asi escribo menos jaja y probando a ver si sirve. xd
function domElementId(element) {
    return document.getElementById(element);
}

// valores
var typeM = domElementId('typeM');
var presion = domElementId('presion');
var bloqueMo = domElementId("bloqueMo");
var lcc = domElementId("lcc");
var hprpm = domElementId("hprpm");
var lrrpm = domElementId("lrrpm");
var sysmart = domElementId("sysmart");
var inyeccion = domElementId("inyeccion");
var remoteon = domElementId("remoteon");

const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
        tipoMotor: typeM.textContent,
        bloqueMotor: bloqueMo.textContent,
        desplazamiento: lcc.textContent, 
        caballosFuerza: hprpm.textContent,
        lineaRoja: lrrpm.textContent,
        inyeCombustible: inyeccion.textContent,
    }
}

console.log(vehiculo?.marca);
console.log(vehiculo?.modelo);
console.log(vehiculo?.llantas);
console.log(vehiculo.motor?.tipoMotor);
console.log(vehiculo.motor?.presionPsi);
console.log(vehiculo.motor?.bloqueMotor);
console.log(vehiculo.motor?.desplazamiento);
console.log(vehiculo.motor?.caballosFuerza);
console.log(vehiculo.motor?.lineaRoja);
console.log(vehiculo.motor?.sistemaSmart);
console.log(vehiculo.motor?.inyeCombustible);
console.log(vehiculo.motor?.encendidoRemoto);
