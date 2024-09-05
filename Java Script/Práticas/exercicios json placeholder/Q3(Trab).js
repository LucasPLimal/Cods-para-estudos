const url_times = "https://worldcupjson.net/teams";
fetch(url_times)
  .then(response => response.json())
  .then(times => list_teams(times));

function list_teams(times) {
  let select = document.getElementById('country');
  for (let time of times) {
    let option = new Option(time.id, time.country);
    select.options[select.options.length] = option;
  }
}

function listar() {
    const time = document.getElementById('country').value;
    const url = `https://worldcupjson.net/teams/${time}`;
    
    fetch(url)
        .then(response => response.json())
        .then(partidas => list_matches(partidas));
}

function list_matches(partidas) {
    let totalidade = document.getElementById('totalidade');
    totalidade.innerHTML = '';
    for (let partida of partidas) {
        let item = document.createElement('li');
        item.innerHTML = partida.status
        totalidade.appendChild(item)
    }
}  