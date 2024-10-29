function listar() {
    const ano = document.getElementById('ano').value;
    const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
    
    fetch(url)
        .then(response => response.json())
        .then(feriado => listar_feriados(feriado));
  }
  
  function listar_feriados(feriados) {
    let resultado = document.getElementById('atividades');
    resultado.innerHTML = '';
    
    let contadorFeriados = feriados.length;
    let feriadosPorMes = {};
  
    // Nomes dos meses
    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    feriados.forEach(feriado => {
        const mes = new Date(feriado.date).getMonth();
        if (!feriadosPorMes[mes]) {
            feriadosPorMes[mes] = [];
        }
        feriadosPorMes[mes].push(feriado.name);
    });
  
    let totalDiv = document.createElement("div");
    totalDiv.innerHTML = `<strong>Total de feriados:${contadorFeriados}</strong>`;
    resultado.appendChild(totalDiv);
  
    for (let mes in feriadosPorMes) {
        const quantidade = feriadosPorMes[mes].length;
        let mesDiv = document.createElement("div");
        mesDiv.innerHTML = `<br><strong>${nomesMeses[mes]} (${quantidade}) Feriado(s):</strong> ${feriadosPorMes[mes].join(', ')}`;
        resultado.appendChild(mesDiv);
    }
  }
  