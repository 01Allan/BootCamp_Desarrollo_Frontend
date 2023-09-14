const checkboxes = document.querySelectorAll('.form-check-input');
const countExtras = document.getElementById('valor-extras');
const propina = document.getElementById('propina');
const writePropina = document.getElementById('dar-propina');
const btnEnviarPropina = document.getElementById('enviar-propina');
const mostrarTodos = document.getElementById('mostrarTodos');
const mostrarExtras = document.getElementById('mostrarExtras');
const gratis = [];
const extras = [];

checkboxes.forEach(checks => {

    checks.addEventListener('change', () => {

        // Esta parte del codigo agrega y elimina elementos del array.

        if (checks.checked) {
            if (gratis.length < 3) {
                gratis.push(checks.value);
            } else {
                extras.push(checks.value);
            }

        } else {
            const indexGratis = gratis.indexOf(checks.value);
            const indexExtras = extras.indexOf(checks.value);
            if (indexGratis !== -1) {
                gratis.splice(indexGratis, 1);
            }

            if (indexExtras !== -1) {
                extras.splice(indexExtras, 1);
            }

        }

        // funcion que une los arreglos gratis y extras.
        function unirArr(...arr) {
            return [].concat(...arr);
        }

        const allIngredients = unirArr(gratis, extras);

        // mostrando los datos en el html
        mostrarTodos.innerHTML = `${allIngredients.join(', ')}`;
        mostrarExtras.innerHTML = `${extras.join(', ')}`;

        countExtras.innerHTML = `<strong>$${parseInt(extras.length * 800)}</strong>`;

    })
    
});

// Enviando propina
btnEnviarPropina.addEventListener('click', () => {

    propina.textContent = `$${writePropina.value}`;

    if (propina.textContent === '$' || propina.textContent === '') {
        alert('Aún no ha definido la propina.');
    } else {
        propina.innerHTML = `<strong>$${writePropina.value}</strong>`;
        alert(`Su propina de $${writePropina.value} ha sido enviada. :D`);
    }

})
