const semanas = document.getElementById('semanas');
const dias = document.getElementById('dias');
const rutinasBtn = document.getElementById('boton');
const ejercicios = ["sentadillas", "bancos", "peso muerto", "prensas"];

function* rutina(week, days, ejercicio) {
    const dayWeek = 7*week;
    yield `Semanas ${week} \nDias: ${days}\n`;
    const totalEjercicios = ejercicio.length;
    
    for (let day = 1; day <= dayWeek; day += days){
        const indexEjercicio = Math.floor(Math.random() * totalEjercicios);
        yield `Dia ${day}: ${ejercicio[indexEjercicio]}`;
    }
}


rutinasBtn.addEventListener('click', () => {
    const verRutina = rutina(parseInt(semanas.value), parseInt(dias.value), ejercicios);

    let output = '';
    
    for (const value of verRutina) {
        output += value + '\n';
    }
    console.log(output);
});

// Nota: Deje la eleccion de forma aleatorea la seleccion del tipo de ejercicio que el usuario debe hacer para este ejercicio ya que me pareció las más optima. 
