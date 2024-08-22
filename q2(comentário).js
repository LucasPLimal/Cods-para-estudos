const url_comments = "https://jsonplaceholder.typicode.com/comments"

fetch(url_comments)
    .then(response => response.json())
    .then((json) => criar_comment(json))

function criar_comment(json) {
    let commentt= document.getElementById("comm")
    commentt.innerHTML = ''
    for (let comment of json) {
        let commen = document.createElement('div')
        commen.innerHTML = `<p>${comment.postId}</p>
                            <p>${comment.id}</p>
                            <p>${comment.name}</p>
                            <p>${comment.email}</p>
                            <p>${comment.body}</p>`
        commentt.appendChild(commen)
    }
}