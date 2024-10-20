let url = `https://pokeapi.co/api/v2/pokemon/scizor`

fetch(url)
.then(response => response.json())
.then(data => { 
    let poke = data.forms
    poke.forEach(pokemon => {
        let resultado = document.getElementById("resultado")
        let img = document.createElement("img")
        img.src = pokemon.url
        resultado.appendChild(img)
    })
})







