// MOstrando el formulario.

function comunicar() {
    document.getElementById('cont_form').classList.remove("d-none");
    document.getElementById('cont_form').classList.remove("d-sm-none");
    document.getElementById('cont_form').classList.remove("d-md-none");
    document.getElementById('cont_form').classList.remove("d-lg-none");
    document.getElementById('cont_form').classList.remove("d-xl-none");
    document.getElementById('cont_form').classList.remove("d-xxl-none");
}

function enviarForm() {
    let nombre = document.getElementById('form_name').value;
    let correo = document.getElementById('form_mail').value;
    
    if (nombre == "") {
        alert("Rellene todos los campos");
    } else if (correo == "") {
        alert("Rellene todos los campos");
    } else {
        alert("Gracias por ponerte en contacto con nosotros " + nombre + ". Nos pondremos en contacto contigo al correo " + correo + ". ¡Hasta Luego!");
    }
}


$(document).ready(function () {

    $("enviar").click(function () {
        let nombre = $('#form_name').val();
        let correo = $('#form_mail').val();
    
        if (nombre == "") {
            alert("Rellene todos los campos");
        } else if (correo == "") {
            alert("Rellene todos los campos");
        } else {
            alert("Gracias por ponerte en contacto con nosotros " + nombre + ". Nos pondremos en contacto contigo al correo " + correo + ". ¡Hasta Luego!");
        }
    });

});
