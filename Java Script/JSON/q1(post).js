const url_posts = 'https://jsonplaceholder.typicode.com/posts'
const url_users = 'https://jsonplaceholder.typicode.com/users'

let usuários= ['zero']

fetch(url_users)
    .then(response => response.json())
    .then(users => criar_vetor(users))

function criar_vetor(users) {
    for (let user of users) {
        usuários.push(user.name);
    }
}

fetch(url_posts)
    .then(response => response.json())
    .then(posts => exibir_posts(posts))

function exibir_posts(posts) {
    let postagens = document.getElementById('postagens')
    postagens.innerHTML = ''
    for (let post of posts) {
        let postagem = document.createElement('div')
        postagem.innerHTML = `<p>#${post.id}</p>
                              <p>Usuário: ${usuários[post.userId]}</p>
                              <p>Título: ${post.title}</p>
                              <p>Texto: ${post.body}</p>`
        postagens.appendChild(postagem)
    }
}
