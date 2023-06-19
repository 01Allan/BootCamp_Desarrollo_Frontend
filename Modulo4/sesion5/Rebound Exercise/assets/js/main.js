// Variable
var boton = document.getElementById("boton");

// constructor
function Safeme(nombre, correo, trabajo, telefono, sobreti){
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.sobreti = sobreti;
}


boton.addEventListener("click", () => {

    var putName = document.getElementById("putName");
    var putJob = document.getElementById("putJob");
    var putMail = document.getElementById("putMail");
    var putNumber = document.getElementById("putNumber");
    var sobremi = document.getElementById("sobremi");
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var trabajo = document.getElementById("trabajo").value;
    var telefono = document.getElementById("telefono").value;
    var sobreti = document.getElementById("sobreti").value;

    // objeto
    var persona = new Safeme(nombre, correo, trabajo, telefono, sobreti);

    // poniendo los datos en el carta
    putName.innerText = persona.nombre;
    putJob.innerText = persona.trabajo;
    putMail.innerText = persona.correo;
    putNumber.innerText = persona.telefono;
    sobremi.innerText = persona.sobreti;

})

