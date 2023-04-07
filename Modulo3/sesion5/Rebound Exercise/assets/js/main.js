// elementos del DOM a llamar
var like1 = document.getElementById("like1");
var like2 = document.getElementById("like2");
var ocultar1 = document.getElementById("ocultar1");
var ocultar2 = document.getElementById("ocultar2");
var ocultar3 = document.getElementById("ocultar3");
var ocultar4 = document.getElementById("ocultar4");
var comentario = document.getElementById("comentario");
var comentario2 = document.getElementById("comentario2");



// funciones 
const likes = () => {
    let contador = 0;
    contador++;
    like1.innerHTML = 
    `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        ${contador++}
        </small>
    `;
}

const likes2 = () => {
    let contador = 1;
    contador++;
    like2.innerHTML = 
    `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        ${contador++}
    `;
}

const mostrar = () => {
    ocultar1.style.display = "block";
    ocultar2.style.display = "block";

}

const mostrar2 = () => {
    ocultar3.style.display = "block";
    ocultar4.style.display = "block";

}

// eventos

// dar un like
like1.addEventListener("click", likes);
like2.addEventListener("click", likes2);

// Mostrar comentarios en pantallas pequeñas 
comentario.addEventListener("click", mostrar);
comentario2.addEventListener("click", mostrar2);

