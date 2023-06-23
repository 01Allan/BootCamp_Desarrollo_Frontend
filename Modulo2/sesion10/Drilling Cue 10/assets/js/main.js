// usando JQuery 

$(document).ready(function () {

    // mostrar formularios

    $("#comunicacion").click(function () {
        $("#form1").removeClass("d-sm-none");
        $("#form1").removeClass("d-md-none");
        $("#form1").removeClass("d-none");
    });

    $("#reservacion").click(function () {
        $("#form2").removeClass("d-sm-none");
        $("#form2").removeClass("d-md-none");
        $("#form2").removeClass("d-none");
    });

    // capturando datos - formulario 1
    $("#enviar1").click(function () {
        let nombre1 = $("#nombre1").val();
        let correo1 = $("#mail1").val();
        let telefono1 = $("#telefono1").val();
        let motivo = $("#motivo").val();
        let comentario = $("#comentario").val();

        if (nombre1 == "") {
            alert("El campo 'Nombre' es obligatorio.");
        } else if (correo1 == "") {
            alert("El campo 'Correo' es obligatorio.");
        } else if (telefono1 == "") {
            alert("El campo 'Telefono' es obligatorio.");
        } else if (motivo == "") {
            alert("El campo 'Motivo' es obligatorio.");
        } else if (comentario == "") {
            alert("El campo 'Escribe tu comentario' es obligatorio.");
        } else {
            alert("Muchas Gracias " + nombre1 + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + correo1);
        }

    });

    // capturando datos - formulario 2
    $("#enviar2").click(function () {
        let nombre2 = $("#nombre2").val();
        let correo2 = $("#mail2").val();
        let telefono2 = $("#telefono2").val();
        let fecha = $("#fecha").val();
        let hora = $("#hora").val();
        let cantidadAsis = $("#asistentes").val();

        if (nombre2 == "") {
            alert("El campo 'Nombre' es obligatorio.");
        } else if (correo2 == "") {
            alert("El campo 'Correo' es obligatorio.");
        } else if (telefono2 == "") {
            alert("El campo 'Telefono' es obligatorio.");
        } else if (fecha == "") {
            alert("El campo 'Motivo' es obligatorio.");
        } else if (hora == "") {
            alert("El campo 'Escribe tu comentario' es obligatorio.");
        } else if (cantidadAsis == "") {
            alert("El campo 'Cantidad de asistentes' es obligatorio");
        } else {
            alert("Estimada/o: " + nombre2 + " agradecemos por resevar con nosotros.\nHemos registrado: " + cantidadAsis + " asistentes." + " Se ha enviado el código de confirmación al correo: " + correo2 + "\nGracias por preferirnos.")
        }

    });

    // tratando las Imagenes

    $(".card").click(function () {
        let img_text = $(this).text();
        console.log(img_text);
        $(".cont_popup p").text(img_text);
    });

    $(".imgs").click(function () {
        let up_img = $(this).attr("src");

        $(".popup").fadeIn();
        $(".cont_popup img").attr("src", up_img);
    });

    $(".cerrar").click(function () {
        $(".popup").fadeOut();
    });
    
});



