const btnSigin = document.getElementById('signin');
const btnVip = document.getElementById('vipbtn');
const signUpFrame = document.getElementById('signup-frame');
const vipFrame = document.getElementById('vip-frame');

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