$(document).ready(function() {
    // El código escrito acá se ejecutará luego de que se carguen los elementos de la página web.

    // var miTexto = $("#contenido").text();
    // var miTexto2 = $("#contenido").html();
    // var miAtributo = $("#nombre").attr("type");
    // alert(miTexto);
    // alert(miTexto2);
    // alert(miAtributo);

    // $("#caja1").mouseenter(function () {
    //     $("#caja2").show();
    // });

    // $("#caja1").mouseout(function () {
    //     $("#caja2").hide();
    // });

    $("#caja1").mouseenter(function () {
        $("#caja2").toggle();
    })

    $("#boton").click(function () {
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();

        if (nombre == "" || correo == "") {
            alert("Campos vacios, ingrese los datos solicitados.")
        } else {
            alert("Su nombre es: " + nombre + " y su  correo es: " + correo);
        }

        
    })

    $("#boton1").click(function () {
        $("#contenido").css("background-color", "greenyellow");
    })

    $("#boton2").click(function () {
        $("#texto").text("Texto escrito usando JQuery");
    })

    $("#boton1").dblclick(function () {
        $("#contenido").css("background-color", "white");
        $("#texto").text("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus doloremque rerum " + "corrupti eveniet, quis quas nam quisquam, magnam consequuntur ipsa aspernatur reprehenderit " + " repellendus delectus voluptates veniam odio, adipisci aliquam!")
    })

    window.onload = function() {

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                    text: "Desktop Browser Market Share in 2016"
                },
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        { y: 51.08, label: "Chrome" },
                        { y: 27.34, label: "Internet Explorer" },
                        { y: 10.62, label: "Firefox" },
                        { y: 5.02, label: "Microsoft Edge" },
                        { y: 4.07, label: "Safari" },
                        { y: 1.22, label: "Opera" },
                        { y: 0.44, label: "Others" }
                ]
            }]
        });
        
        chart.render();
            
        }

});



