const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=> {
        if (res.status != 200){
            pokeImage("./img/Pokebola.png");
            alert('¡El pokemon, no existe!')
        }
        else{
            return res.json();
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        let graf = data.stats;
        pokeImage(pokeImg);
        grafica(graf);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const grafica = (graf) => {
    var miGrafica = document.getElementById("miGrafica");
    const data = {
        labels: ['HP', 'AT', 'DE', 'AE', 'DS', 'VE' ],
        datasets:[{
            label: 'Estadísticas',
            data: [graf[0].base_stat, graf[1].base_stat, graf[2].base_stat, graf[3].base_stat, graf[4].base_stat, graf[5].base_stat],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
        }]
    }
    console.log(window.char);
    if (window.char) {
        window.char.destroy();
    }
    window.char = new Chart(miGrafica, { type:'bar', data });
}

// const imprimir = () => {
//     const pokeName = document.getElementById("pokeName");
//     let pokeInput = pokeName.value;
//     console.log(pokeInput);
// }