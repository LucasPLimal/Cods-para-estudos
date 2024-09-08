const url_teams = 'https://worldcupjson.net/teams';

fetch(url_teams)
  .then(response => response.json())
  .then(teams => list_teams(teams))

function list_teams(teams) {
  let select = document.getElementById('seleção');
  for (let team of teams['groups']) {
    for (let country of team.teams) {
      let option = new Option(country.name, country.country);
      console.log(country.country);
      select.options[select.options.length] = option;
    }
  }
}

function listar() {
    const team = document.getElementById('seleção').value;
    const url = `https://worldcupjson.net/matches/country/${team}`;
    
    fetch(url)
        .then(response => response.json())
        .then(matches => list_matches(matches));
        
        function list_matches(matches) {
          let totalidade = document.getElementById('totalidade');
          totalidade.innerHTML = '';
          
            let descrição = document.createElement('div')
            descrição.innerHTML =`<p> ${matches.home_team_country}</p>
                                  <p> ${matches.away_team_country}</p>
                                  <p> ${matches.winner}</p>`
            totalidade.appendChild(descrição)
          }
}

