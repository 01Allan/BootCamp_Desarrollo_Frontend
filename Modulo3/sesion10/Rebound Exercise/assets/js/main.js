$(document).ready(function(){

    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

   $("#siguiente").click(function () {
        $(".formulario").addClass("d-none");
        $(".formulario2").removeClass("d-none");

   });

    $("#enviar").click(function () {
        $(".popup").fadeIn();
    });

    $(".cerrar").click(function () {
        $(".popup").fadeOut();  
    });


});