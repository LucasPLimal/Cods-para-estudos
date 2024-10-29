const url_select = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`;

fetch(url_select)
.then(response => response.json())
.then(data=> pokedex(data))

let select = document.getElementById("seleção");
let img = document.createElement("img");


function pokedex(data) {

    for (let poke of data.results) {
        let option = new Option(poke.name);
        select.options[select.options.length] = option;
        
    }
}

function listar() {
    const pokemon = document.getElementById("seleção").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(response => response.json())
        .then(data2 => exibir_pokemon(data2))
    }

function exibir_pokemon(data2) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let stats of data2) {
        let descriçao = document.createElement("div")
        descriçao.innerHTML = ` <br>${stats.name}`
    resultado.appendChild(descriçao)
    }
}
