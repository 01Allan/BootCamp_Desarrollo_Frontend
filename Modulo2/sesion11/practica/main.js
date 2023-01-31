// forma general

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function () {
    
// })

// .catch(function () {
    
// });

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then(datos => {
    tabla(datos);
})

var contenido = document.querySelector("#contenido");

function tabla(datos) {
    contenido.innerHTML = "";

    for (const temp of datos) {
        contenido.innerHTML += 
        `
        <tr>
            <th scope = "row">${temp.userId}</th>
            <td>${temp.id}</td>
            <td>${temp.title}</td>
            <td>${temp.body}</td>
        </tr>

        `

        if (temp.id == 2) {
            break;
        }
    }
}

var formulario = document.getElementById("boton");

formulario.addEventListener("click", () => {
    
    var id_user = parseInt(document.getElementById("userId").value);
    var titulo = document.getElementById("titulo").value;
    var cuerpo = document.getElementById("body").value;
    const newPost = {
        title: titulo,
        body: cuerpo,
        userId: id_user
    };
    limpiar()
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response) => response.json())
    .then((json) => console.log(json));
    
})

function limpiar() {
    document.getElementById("formulario").reset();
}
