// Aplicación: Cajero automático
// Inicio

// Funcion constructora:

function Cliente(nombre, id, clave, saldo) {
    // el id representa un identificador de un usuario, en las demás el nombre de los parámetros representa cada cosa perse.

    this.nombre = nombre;
    this.id = id;
    this.clave = clave;
    this.saldo = saldo;

}

// Realizaré la aplicación con 3 clientes.

var usuario1 = new Cliente("Ramon Solis", "12345", "algo01", 100);
var usuario2 = new Cliente("Rosa Garcia", "67890", "algo02", 3000);
var usuario3 = new Cliente("Roberto Figueroa", "199511", "algo3", 0);
var clientes = [usuario1, usuario2, usuario3];

alert("Bienvenido a banca en línea");

var identify_id = prompt("Ingrese su id: ");
var identify_clave = prompt("Ingrese su clave: ");
let datos = false;


for (let i = 0; i < clientes.length; i++) {

    if (clientes[i].id == identify_id && clientes[i].clave == identify_clave) {
        datos = true;
        client_act = clientes[i]; //usuario actual
        alert("Bienvenido " + clientes[i].nombre);

        while (opcion != 4) {
            var opcion = parseInt(prompt("Seleccione que desea hacer:\n 1.- Ver saldo \n 2.- Realizar giro \n 3.- Realizar deposito \n 4. Salir."));

            switch (opcion) {
                case 1:
                    var saldo = clientes[i].saldo;
                    alert("Su saldo actual es: " + saldo);
                    break;

                case 2:
                    var giro = parseInt(prompt("Su saldo es: " + clientes[i].saldo + "\nIngrese el monto que desea girar: "));
                    if (giro > clientes[i].saldo) {
                        alert("Saldo insuficiente, usted actualmente tiene: " + clientes[i].saldo);
                    } else {
                        clientes[i].saldo = clientes[i].saldo - giro;
                        alert("Giro realizado. Su nuevo saldo es " + clientes[i].saldo);
                    }
                    
                    break;

                case 3:
                    var deposito = parseInt(prompt("Su saldo es: " + clientes[i].saldo + "Ingrese el monto que desea depositar: "));
                    clientes[i].saldo = clientes[i].saldo + deposito;
                    alert("Deposito realizado. Su nuevo saldo es " + clientes[i].saldo);
                    break;

            }

        }

        alert("Hasta luego.")

    }
}

if (datos == false) {
    alert("Datos incorrectos. Adios!");
}