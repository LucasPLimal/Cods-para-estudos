const url='https://worldcupjson.net/teams'

fetch(url)
    .than(response => response.json)
    .than(json => listar_times(json))

function listar_times(json) {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ''
    for (let times of json)
        resultado.innerHTML= `${times.letra}`
}