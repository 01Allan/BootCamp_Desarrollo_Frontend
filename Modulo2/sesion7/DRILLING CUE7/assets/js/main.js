var opcion = parseInt(prompt("Seleccione que desea hacer: \n 1.- Calcular cual número es mayor. \n 2.- sumar.\n 3.- Restar.\n 4.- Multiplicar. \n 5.- Dividir. \n 6.- Mostrar los números ingresados.\n 7.- Salir. "));
var num1, num2, resultado;

// funciones 

function comparacion(num1, num2) {
    if (num1 > num2) {
        alert(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        alert(num2 + " es mayor que " + num1);
    } else {
        alert(num1 + " es igual que " + num2);
    }
}

function suma(num1, num2){
    resultado = num1 + num2;
    return resultado;
}

function resta(num1, num2){
    resultado = num1 - num2;
    return resultado;
}

function multiplicacion(num1, num2){
    resultado = num1 * num2;
    return resultado;
}

function division(num1, num2){
    resultado = num1 / num2;
    return resultado;
}

if (opcion > 0 && opcion <= 7) {

    if (opcion > 0 && opcion <= 6) {
        var n1 = parseInt(prompt("Ingrese el primero número: "));
        var n2 = parseInt(prompt("Ingrese el segundo número: "));

        switch (opcion) {
            case 1:
                comparacion(n1, n2);
                break;
            case 2:
                alert("La suma de los números " + n1 + " y " + n2 + " es: " + suma(n1, n2));
                break;
            case 3:
                alert("La resta de los números " + n1 + " y " + n2 + " es: " + resta(n1, n2));
                break;
            case 4:
                alert("La multiplicación de los números " + n1 + " y " + n2 + " es: " + multiplicacion(n1, n2));
                break;
            case 5:
                alert("La división de los números " + n1 + " y " + n2 + " es: " + division(n1, n2));
                break;
            case 6:
                alert("Los números ingresados son: " + n1 + " y " + n2);
                break;
        }

    } else {
        alert("Gracias por participar.");
    }


} else {
    alert("Elección incorrecta. Adios!")
}





