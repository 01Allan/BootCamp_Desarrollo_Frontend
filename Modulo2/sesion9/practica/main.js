// document.getElementById() nos permite obtener un elemento del DOM a través de su id. para este caso el nodo retornado del html es unico, ya que el id debiese ser único. 

var selectorId = document.getElementById('parrafo');
console.log(selectorId);

// Document.getElementsByTagName: nos permite obtener una lista con todos los nodos que
// tienen definida la etiqueta proporcionada. Puede obtener, 0, 1 o N nodos.

var selectorEtiqueta = document.getElementsByTagName("h1");
console.log(selectorEtiqueta);

// Document.getElementsByClassName: retorna una lista de una clase especifica.

var selectorClass = document.getElementsByClassName("contenedor");
console.log(selectorClass);

// Document.querySelector: nos permite obtener cualesquiera elementos del DOM de acuerdo con el argumento que le indiquemos.

var selectorVarios = document.querySelector(".contenedor");
console.log(selectorVarios);

// Document.querySelectorAll: devuelve una lista de cualquier elemento del DOM que coincida con el argumento que le indiquemos.

var selectorTodos = document.querySelectorAll(".contenedor");
console.log(selectorTodos);

// para obtener acceso al contenido de un elemento, podemos hacer uso de la propiedad innerhtml

var selectorId1 =  document.getElementById('parrafo').innerHTML;
console.log(selectorId1);

// En los casos que hayamos obtenido una lista, la recorremos con un ciclo:

var selectorClass01 = document.getElementsByClassName("contenedor");

for (let i = 0; i < selectorClass01.length; i++) {
    console.log(selectorClass01[i].innerHTML);
    
}

// Manipulando los valores del dom

var creandoElemento = document.createElement("p");

// texto que llevará la etiqueta
creandoElemento.textContent = "Creado desde javascript.";

// Incorporando el nodo al html;
document.body.appendChild(creandoElemento);

// Creando un nodo e incorporandolo en el dom
var selectorVarios1 = document.querySelector(".contenedor");
var creandoElemento1 = document.createElement("p");
creandoElemento1.textContent = "Este nodo fue creado desde javascript.";
selectorVarios1.append(creandoElemento1);

// para eliminar un nodo:
var nodoPadre = document.querySelector(".contenedor");
var nodoHijo = document.querySelector("#parrafo");

// nodoPadre.removeChild(nodoHijo);    


// Capturando y modificando un valor;

var texto = document.getElementById("parrafo").innerHTML="nuevo texto";
var texto2 = document.getElementById("parrafo").innerText="nuevo texto xd";



