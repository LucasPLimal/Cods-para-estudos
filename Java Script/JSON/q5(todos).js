function listar() {
    const user = document.getElementById('user_id').value;
    const url = `https://jsonplaceholder.typicode.com/users/${user}/todos`

    fetch(url)
        .then((response) => response.json())
        .then((lista) => listar_atvs(lista))
}

function listar_atvs(lista) {
    let atividades = document.getElementById('atividades')
    atividades.innerHTML = ''

    for (let tarefa of lista) {
    let item = document.createElement('li')
    item.innerHTML = tarefa.title;

    if (tarefa.completed) {
        item.style.color = 'green';
        item.style.textDecoration = 'line-through'
    }
    else
       { item.style.color = 'red';
    }

    atividades.appendChild(item);
    }
}