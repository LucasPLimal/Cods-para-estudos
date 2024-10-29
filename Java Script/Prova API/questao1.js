document.getElementById('botao').addEventListener('click', function() {
    const ano = document.getElementById('ano').value;
    buscarPremiosNobel(ano);
});

function buscarPremiosNobel(ano) {
    const url = `https://api.nobelprize.org/v1/prize.json?year=${ano}`;

    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Erro na requisição');
            }
            return resposta.json();
        })
        .then(dados => {
            // Filtra os prêmios pelo ano
            const premiosDoAno = dados.prizes.filter(prêmio => prêmio.year === ano);
            exibirResultados(premiosDoAno, ano);
        })
        .catch(erro => {
            console.error('Erro ao buscar dados:', erro);
        });
}

function exibirResultados(premios, ano) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (premios.length === 0) {
        resultadoDiv.innerHTML = `<p>Não foram encontrados resultados para o ano ${ano}.</p>`;
        return;
    }

    premios.forEach(prêmio => {
        const categoria = capitalizarCategoria(prêmio.category);
        const laureados = prêmio.laureates.map(laureado => laureado.firstname + ' ' + laureado.surname).join(', ');
        const motivacao = prêmio.laureates.map(laureado => laureado.motivation)

        resultadoDiv.innerHTML += `
            <h3>Categoria: ${categoria}</h3>
            <p>Laureados: ${laureados}</p>
            <p>Motivação: ${motivacao}</p>
            <hr>
        `;
    });
}

function capitalizarCategoria(categoria) {
    return categoria.charAt(0).toUpperCase() + categoria.slice(1);
}
