var numero1 = parseInt(prompt("Ingresa el primer numero: "));
var numero2 = parseInt(prompt("Ingresa el segundo numero: "));

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
} else if (numero2 > numero1) {
    alert(numero2 + " es mayor que " + numero1);
} else {
    alert(numero1 + " es igual que " + numero2);
}


