// funciones 

function comunicar() {
    document.getElementById('form1').classList.remove("d-none");
    document.getElementById('form1').classList.remove("d-md-none");
    document.getElementById('form1').classList.remove("d-sm-none");
}

function reservar() {
    document.getElementById('form2').classList.remove("d-none");
    document.getElementById('form2').classList.remove("d-md-none");
    document.getElementById('form2').classList.remove("d-sm-none");
}

function enviarForm1(params) {
    let name_usuario = document.getElementById('nombre1').value;
    let mail_usuario = document.getElementById('mail1').value;
    let tel_usuario = document.getElementById('telefono1').value;
    let motivo = document.getElementById('motivo').value;
    let comentario = document.getElementById('comentario').value;

    if (name_usuario.length == 0) {
        alert("El campo 'Nombre' es obligatorio.");
        name_usuario.focus();
    }

    if (mail_usuario.length == 0) {
        alert("El campo 'Correo' es obligatorio.");
        mail_usuario.focus();
    }

    if (tel_usuario.length == 0) {
        alert("El campo 'Telefono' es obligatorio.");
        tel_usuario.focus();
    }

    if (motivo.length == 0) {
        alert("El campo 'Motivo' es obligatorio.");
        motivo.focus();
    }

    if (comentario.length == 0) {
        alert("El campo 'Escribe tu comentario' es obligatorio.");
        comentario.focus();
    }

    alert("Muchas Gracias " + name_usuario + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + mail_usuario);
    
}

function enviarForm2(params) {
    let name_usuario = document.getElementById('nombre2').value;
    let mail_usuario = document.getElementById('mail2').value;
    let hora_usuario =  document.getElementById('hora').value;
    let tel_usuario = document.getElementById('telefono2').value;
    let fecha_usuario = document.getElementById('fecha').value;
    let cantidadPersonas = document.getElementById('asistentes').value;

    if (name_usuario.length == 0) {
        alert("El campo 'Nombre' es obligatorio.");
        name_usuario.focus();
    }

    if (mail_usuario.length == 0) {
        alert("El campo 'Correo' es obligatorio.");
        mail_usuario.focus();
    }

    if (tel_usuario.length == 0) {
        alert("El campo 'Telefono' es obligatorio.");
        tel_usuario.focus();
    }

    if (cantidadPersonas.length == 0) {
        alert("El campo 'Motivo' es obligatorio.");
        cantidadPersonas.focus();
    }


    alert("Muchas Gracias " + name_usuario + " por reservar con nosotros,\nsu horario es: " + hora_usuario + "\nla fecha es: " + fecha_usuario + " \nLe enviaremos mas detalles sobre la reservación al correo: " + mail_usuario);
}


