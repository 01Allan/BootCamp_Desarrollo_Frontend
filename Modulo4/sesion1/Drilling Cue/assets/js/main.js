let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let fecha = document.getElementById("fecha");
let time = new Date();

titulo.innerHTML = '¡Apresúrese!';
texto.innerHTML = 'El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:';
fecha.innerHTML = `${time.toLocaleDateString()}`;

// formulario 

let formulario = document.getElementById("form");

formulario.innerHTML = `<input class="usuario" type="text" placeholder="Usuario" required> <br> <br> <input class="correo" type="email" id="email" pattern=".+@globex\.com" placeholder="Correo" required> <br><br> <input class="pass" type="password" id="pass" placeholder="Contraseña" required> <br> <br> <button class="boton" type="submit">INSCRIBIRSE</button> <p class="textfoot"><span>¿Tiene una cuenta?</span> <a href="#">Inicie sesión aquí</a></p>`

