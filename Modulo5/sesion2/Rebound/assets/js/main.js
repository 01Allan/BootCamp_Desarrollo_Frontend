const btnSigin = document.getElementById('signin');
const btnVip = document.getElementById('vipbtn');
const signUpFrame = document.getElementById('signup-frame');
const vipFrame = document.getElementById('vip-frame');

// inputs Sign Up
const correoSign =  document.getElementById("correo");
const passSign = document.getElementById('password');
const checkSign = document.getElementById('checkSign');
const botonSign = document.getElementById("btnSign");

// inputs vip
const nameUser = document.getElementById('nameuser');
const correoVip = document.getElementById("correo2");
const passVip = document.getElementById('password2');
const checkVip = document.getElementById('checkVip');
const botonVip = document.getElementById('btnvip');


// clases
class Normal {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

}

class Vip extends Normal {
    constructor(userName, email, password) {
        super(email, password);
        this.userName = userName;
    }
}


btnVip.addEventListener('click', () => {
    signUpFrame.classList.add('d-none');
    vipFrame.classList.remove('d-none');
    btnVip.classList.add('text-white');
    btnSigin.classList.remove('text-white');
    btnVip.style.borderBottom = '2px solid rgb(255, 251, 0)';
    btnSigin.style.borderBottom = '0px solid';

});

btnSigin.addEventListener('click', () => {
    vipFrame.classList.add('d-none');
    signUpFrame.classList.remove('d-none');
    btnVip.classList.remove('text-white');
    btnSigin.classList.add('text-white');
    btnSigin.style.borderBottom = '2px solid rgb(0, 89, 255)';
    btnVip.style.borderBottom = '0px solid';

});


// para obtener datos en sign up:

botonSign.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * (999 - 100 + 1));
    let usuarioNombre = 'Usuario' + randNum.toString();
    const datosNormal = new Normal(correoSign.value, passSign.value);
    alert(`Bienvenido ${usuarioNombre} \nEmail: ${datosNormal.email} Contraseña: ${datosNormal.password}`);
});

botonVip.addEventListener('click', () => {
    const datosVip = new Vip(nameUser.value, correoVip.value, passVip.value);
    alert(`Bienvenido ${datosVip.userName} \nUsuario: ${datosVip.userName} Email: ${datosVip.email} Contraseña: ${datosVip.password}`);
});