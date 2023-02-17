// API de studio Ghibli


fetch('https://digimon-api.vercel.app/api/digimon')
    .then((response) => response.json())
    .then((data) => {
        nombre = data.name,
        imagen = data.img,
        nivel = data.level
    } 
    );
