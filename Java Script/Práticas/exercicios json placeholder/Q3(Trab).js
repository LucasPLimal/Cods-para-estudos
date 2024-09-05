const url_teams = 'https://worldcupjson.net/teams';
fetch(url_teams)
  .then(response => response.json())
  .then(teams => list_teams(teams))

function list_teams(teams) {
  let select = document.getElementById('seleção');
  for (let team of teams) {
    let option = new Option(team.country, team.id);
    select.options[select.options.length] = option;
  }
}

function listar() {
    const team = document.getElementById('seleção').value;
    const url = `https://worldcupjson.net/teams/${team}`;
    
    fetch(url)
        .then(response => response.json())
        .then(matches => list_matches(matches));
}

function list_matches(matches) {
    let totalidade = document.getElementById('totalidade');
    totalidade.innerHTML = '';
    for (let match of matches) {
      let descrição = document.createElement('div')
      descrição.innerHTML = `<p>#${match.id}</p>
                            <p>Usuário: ${match.country}</p>
                            <p>Título: ${match.wins}</p>
                            <p>Texto: ${match.losses}</p>`
      totalidade.appendChild(descrição)
    }
}  