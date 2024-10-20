const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`;

fetch(url)
.then(response => response.json())
.then(data => exibir_pokemon(data))

function exibir_pokemon(data) {

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
    let img = document.createElement("img");

     for (let poke of data.results) {
        img.src = poke.url;
        let descrição = document.createElement("div");
        descrição.appendChild(img);
        descrição.innerHTML = `<br>Nome: ${poke.name}<br>
                                   Imagem: ${poke.url}`
        resultado.appendChild(descrição)
    }
}