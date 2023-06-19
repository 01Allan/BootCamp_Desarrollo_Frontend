// variables
var imgProducto = document.getElementById("imgProducto");
var nombreProducto = document.getElementById("nombreProducto");
var precioProducto = document.getElementById("precioProducto");
var boton = document.getElementById("alternativa");
var seccion = document.getElementById("section");

// constructor 
function Producto(precio, imagen, nombre) {
    this.precio = precio;
    this.imagen = imagen;
    this.nombre = nombre;
}

var macbook = new Producto("$999", "https://media.auchan.fr/A0220201113000603065PRIMARY_1200x1200/B2CD/", "Apple Macbook Air");
var dell = new Producto("$3,990", "https://www.nay.sk/data/images/productGalleryModal-w900/8/482368.jpg", "Dell Xtreme 270");

boton.addEventListener("click", () => {
    imgProducto.src = macbook.imagen;
    nombreProducto.innerText = macbook.nombre;
    precioProducto.innerText = macbook.precio;
});

seccion.addEventListener( "click", () => {
        imgProducto.src = dell.imagen;
        nombreProducto.innerText = dell.nombre;
        precioProducto.innerText = dell.precio;
});